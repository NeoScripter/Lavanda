import { Signal, signal } from '@preact/signals';
import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

interface CurrentSlideContextValue {
    currentSlideId: Signal<number | null>;
}

const CurrentSlideContext = createContext<CurrentSlideContextValue | null>(
    null,
);

export function useCurrentSlideId() {
    const ctx = useContext(CurrentSlideContext);
    if (!ctx) {
        throw new Error(
            'useCurrentSlideId must be used within CurrentSlideProvider',
        );
    }
    return ctx;
}

export function CurrentSlideProvider({
    children,
}: {
    children: preact.ComponentChildren;
}) {
    const currentSlideId = signal(null);
    return (
        <CurrentSlideContext.Provider value={{ currentSlideId }}>
            {children}
        </CurrentSlideContext.Provider>
    );
}
