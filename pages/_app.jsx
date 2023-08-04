import { Roboto } from '@next/font/google';
import localFont from '@next/font/local';

/**
 * Fonts
 */
const roboto = Roboto({
    fallback: ['sans-serif'],
    weight: ['300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
});

const victorMono = localFont({
    fallback: ['sans-serif'],
    src: [
        {
            path: '../public/fonts/VictorMono-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/VictorMono-Regular.woff2',
            weight: '400',
            style: 'normal'
        }
    ],
    display: 'swap'
});

import '@/styles/style.scss';


import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useNextCssRemovalPrevention from '@/hooks/useNextCssRemovalPrevention';

import Layout from '@/components/Layout';
import  '@/styles/globals.css'



export default function App({ Component, pageProps }) {
    const router = useRouter();

    /* Removes focus from next/link element after page change */
    useEffect(() => {
        document.activeElement && document.activeElement.blur();
    }, [router]);

    /* Temporary fix to avoid flash of unstyled content (FOUC) during route transitions */
    useNextCssRemovalPrevention();

    return (
       
       
            <div>
               
                        <style jsx global>
            {`
                                :root {
                                    --font-primary: ${roboto.style.fontFamily};
                                    --font-secondary: ${victorMono.style.fontFamily};
                                }
                            `}
        </style>
        <Layout>
                <Component {...pageProps} />
            </Layout>
            </div>
                 
    )
}