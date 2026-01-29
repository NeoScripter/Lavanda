import { useEffect, useRef, useState } from 'preact/hooks';

export default function useAutoHideOnScroll() {
    const [hide, setHide] = useState(false);
    const lastScrollTopRef = useRef(0);

    useEffect(() => {
        const handleScrollDown = () => {
            const currentScrollTop =
                window.scrollY || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTopRef.current + 30) {
                // User is scrolling down
                setHide(true);
            } else if (currentScrollTop < lastScrollTopRef.current) {
                // User is scrolling up
                setHide(false);
            }

            lastScrollTopRef.current = currentScrollTop;
        };

        window.addEventListener('scroll', handleScrollDown);

        return () => window.removeEventListener('scroll', handleScrollDown);
    }, []);

    return hide;
}
