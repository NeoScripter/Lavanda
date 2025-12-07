import type { RefObject } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(
    options: UseIntersectionObserverOptions = {},
): [RefObject<T>, boolean] => {
    const {
        threshold = 0,
        root = null,
        rootMargin = '0px',
        freezeOnceVisible = false,
    } = options;

    const ref = useRef<T>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    const frozen = freezeOnceVisible && isIntersecting;

    useEffect(() => {
        const element = ref.current;

        if (!element || frozen) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            { threshold, root, rootMargin },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, root, rootMargin, frozen]);

    return [ref, isIntersecting];
};
