import { useEffect, useState } from 'preact/hooks';

export default function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const media = window.matchMedia(query);
        const handler = () => setMatches(media.matches);

        media.addEventListener('change', handler);
        handler();

        return () => media.removeEventListener('change', handler);
    }, [query]);

    return matches;
}
