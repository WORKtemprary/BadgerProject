import { createContext, useContext, useState } from 'react';

// Create a context for the navigation data
const NavigationContext = createContext();

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
}

export function NavigationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [hidden, setHidden] = useState(false);

  const setRef = (el) => {
    // Implement any logic you want when setting the navigation reference
    // For example, you can check the element's position to determine if it should be sticky or hidden
    // Here, I'm just setting it to sticky when the element reaches the top of the viewport
    if (el) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setSticky(!entry.isIntersecting);
      });

      observer.observe(el);
      return () => observer.disconnect();
    }
  };

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  // You can add more functions or state variables as per your requirements

  const navigationContextValue = {
    isOpen,
    sticky,
    hidden,
    setRef,
    toggleNavigation,
    // Add other functions or state variables here
  };

  return (
    <NavigationContext.Provider value={navigationContextValue}>
      {children}
    </NavigationContext.Provider>
  );
}
