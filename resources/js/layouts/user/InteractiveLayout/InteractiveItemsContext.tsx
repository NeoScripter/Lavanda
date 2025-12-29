import { Image } from '@/types/model';
import { Signal, signal } from '@preact/signals';
import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

export type InteractiveItem = {
    id: string | number;
    name: string;
    description: string;
    summary: string;
    advice: string;
    front_image?: Image;
    back_image?: Image;
};

interface InterativeItemsContextValue {
    interativeItems: Signal<InteractiveItem[]>;
}

const InterativeItemsContext = createContext<InterativeItemsContextValue | null>(
    null,
);

export function useInterativeItems() {
    const ctx = useContext(InterativeItemsContext);
    if (!ctx) {
        throw new Error(
            'useInterativeItems must be used within InterativeItemsProvider',
        );
    }
    return ctx;
}

export function InterativeItemsProvider({
    children,
}: {
    children: preact.ComponentChildren;
}) {
    const interativeItems = signal([]);
    return (
        <InterativeItemsContext.Provider value={{ interativeItems }}>
            {children}
        </InterativeItemsContext.Provider>
    );
}
