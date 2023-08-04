import { useState, useEffect } from 'react';
import styles from '@/styles/modules/Navigation.module.scss';
import Link from 'next/link';

import useElementSize from '@/hooks/useElementSize';
import useIsMounted from '@/hooks/useIsMounted';

import Logo from './icons/Logo';
import MobileNavigation from './MobileNavigation';

import classNames from 'classnames';
import headerNavLinks from '@/data/headerNavLinks';

export default function Navigation() {
    const [navigationRef, { height }] = useElementSize();
    const isMounted = useIsMounted();

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isSticky = window.scrollY > 0;
            setSticky(isSticky);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky top-0 z-[110] flex items-center justify-between px-4 py-0 sm:py-2 md:py-2 border-b border-gray-200 backdrop-blur-lg backdrop-filter dark:border-gray-700 bg-opacity-30 blur-10`}>
            <div>
                <Link href="/" aria-label="Next.js starter">
                    <div className="sticky flex h-10 w-10 items-center justify-between">
                        <div className="ml-3" style={{ color: '#00FF00' }}>
                            <Logo />
                        </div>
                    </div>
                </Link>
            </div>

            <div className="hidden sm:block">
                <div className="flex items-center gap-6 justify-end flex-1 ml-4 ">
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

                 
        <div className="pl-12"></div>
        </div>
       
      </div>
      < MobileNavigation />
  
        </header>
    );
}