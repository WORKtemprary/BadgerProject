import { useEffect, useState } from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export default function useLockedScroll(
    initialLocked
) {
    const { ref } = useNavigationContext();
    const [locked, setLocked] = useState(initialLocked);

    /* Do the side effect before render */
    useIsomorphicLayoutEffect(() => {
        if (!locked) {
            return;
        }

        /* Save initial window offset width & body style */
        const originalDocumentWidth = document.documentElement.offsetWidth;
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight
        const originalHeight = document.body.style.height;

        /* Lock body scroll */
        document.body.style.overflow = 'hidden';
        document.body.style.height = `${100}vh`;
        document.body.classList.add('has-scroll-lock');

        /* Get the scrollbar width */
        const scrollBarWidth = window.innerWidth - originalDocumentWidth;

        /* Avoid width reflow */
        if (ref && scrollBarWidth) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
            ref.style.right = `${scrollBarWidth}px`;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.height = originalHeight;
            document.body.classList.remove('has-scroll-lock');

            if (ref && scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
                ref.style.right = 0;
            }
        }
    }, [locked]);

    /* Update state if initialLocked changes */
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
    }, [initialLocked]);

    return [locked, setLocked];
}