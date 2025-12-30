import { useMemo } from 'preact/hooks';

export function useRuneTransform(idx: number, length: number) {
    const rotation = useMemo(
        () => Math.floor(Math.random() * idx * 10) + 'deg',
        [idx, length],
    );
    const translation = useMemo(
        () => Math.floor((Math.random() * 4 - 2) * 20) + '%',
        [length],
    );

    return { rotation, translation };
}
