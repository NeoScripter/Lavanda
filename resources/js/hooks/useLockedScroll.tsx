import { useEffect } from "preact/hooks";

export function useLockScroll(locked: boolean) {
    useEffect(() => {
        document.documentElement.style.overflowY = locked ? 'hidden' : 'auto';
        return () => {
            document.documentElement.style.overflowY = 'auto';
        };
    }, [locked]);
}
