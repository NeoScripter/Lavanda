import { useSignal } from '@preact/signals';
import { useEffect, useRef } from 'preact/hooks';

export default function useElementHeight() {
    const actualHeight = useSignal(0);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const adjustHeight = () => {
            if (!ref.current) return;
            actualHeight.value = ref.current.getBoundingClientRect().height;
        };

        const resizeObserver = new ResizeObserver(adjustHeight);

        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    return { actualHeight, ref };
}
