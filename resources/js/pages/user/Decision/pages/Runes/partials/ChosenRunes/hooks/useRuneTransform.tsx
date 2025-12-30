import { useMemo } from 'preact/hooks';

export function useRuneTransform(idx: number) {
    const rotation = useMemo(
        () => Math.floor(Math.random() * idx * 20) + 'deg',
        [idx],
    );
    const translation = useMemo(
        () => Math.floor((Math.random() * 4 - 2) * 20) + '%',
        [],
    );

    return { rotation, translation };
}
