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

interface InteractiveItemsContextValue {
    interactiveItems: Signal<InteractiveItem[]>;
    prevInteractiveItems: Signal<InteractiveItem[]>;
    isLoading: Signal<boolean>;
}

const InteractiveItemsContext =
    createContext<InteractiveItemsContextValue | null>(null);

export function useInteractiveItems() {
    const ctx = useContext(InteractiveItemsContext);
    if (!ctx) {
        throw new Error(
            'useInteractiveItems must be used within InteractiveItemsProvider',
        );
    }
    return ctx;
}

export function InteractiveItemsProvider({
    children,
}: {
    children: preact.ComponentChildren;
}) {
    const interactiveItems = signal([]);
    const prevInteractiveItems = signal<InteractiveItem[]>([]);
    const isLoading = signal(false);

    return (
        <InteractiveItemsContext.Provider
            value={{ interactiveItems, prevInteractiveItems, isLoading }}
        >
            {children}
        </InteractiveItemsContext.Provider>
    );
}
