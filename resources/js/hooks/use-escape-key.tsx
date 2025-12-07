import { useEffect } from 'preact/hooks';

export const useEscapeKey = (onEscape: () => void) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onEscape();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onEscape]);
};
