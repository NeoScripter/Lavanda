import { useRef } from 'preact/hooks';

export default function useThrottle(cb: () => void, limit: number) {
    const lastRun = useRef(Date.now());

    return function () {
        if (Date.now() - lastRun.current >= limit) {
            cb();
            lastRun.current = Date.now();
        }
    };
}
