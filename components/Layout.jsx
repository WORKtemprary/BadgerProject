import Navigation from './Navigation';


export default function Layout({ children }) {
    return (
   
            <><Navigation /><main id="content">
            {children}

        </main></>
      
    );
}