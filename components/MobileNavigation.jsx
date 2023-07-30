/* eslint-disable react/jsx-key */

import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'

import Logo from './icons/Logo';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
 


  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
        // document.body.style.overflowX = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>

      <div className={`fixed top-0 right-0 h-screen w-full bg-white bg-gradient-to-b from-orange-200 via-amber-300 to-orange-400 shadow-lg transition-transform duration-300 ease-in-out transform ${navShow ? 'translate-y-0' : '-inset-full -translate-y-full '}`}>
  <button
    type="button"
    aria-label="toggle modal"
    className="fixed h-full w-full cursor-auto focus:outline-none"
    onClick={onToggleNav}
  ></button>
  <nav className="fixed top-0 left-1/2 transform -translate-x-1/2  px-6">
  <div className=" left-0  mt-0 h-10 w-10">
  <Logo className=" mb- 4 " />
</div>

    <ul className="flex flex-col items-center  justify-center space-y-4" style={{ height: 'calc(100% - 6rem)' }}>
      <div className='mt-12'></div>
      {headerNavLinks.map((link) => (
                         <div className="w-[140px] h-[53px] relative shadow">
                         <div className="w-[140px] h-[53.23px] left-0 top-0 absolute rounded-2xl border border-red-800" />
                         <div className="w-[140px] h-[53.23px] left-0 top-0 absolute bg-gradient-to-b from-orange-200 via-amber-300 to-orange-400 rounded-2xl border border-orange-500" />
                         <div className="left-[25.65px] top-[15.29px] absolute text-center">
                         <Link
            href={link.href}
          className=''
          >
            {link.title}
          </Link>
                         </div>
                         <div className="w-[8.52px] h-[4.26px] left-[17.30px] top-[7.45px] absolute bg-white bg-opacity-60 rounded-lg" />
                         <div className="w-[12.78px] h-[4.26px] left-[27.95px] top-[7.45px] absolute bg-white bg-opacity-60 rounded-lg" />
                       </div>
                    ))}
      <li>
   
        
      </li>
  
    </ul>
  </nav>
</div>


    </div>
  );
};

export default MobileNav;
