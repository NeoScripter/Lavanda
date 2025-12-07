import { Signal, signal } from '@preact/signals';
import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

interface ModalContextValue {
    showModal: Signal<boolean>;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) {
        throw new Error('useModal must be used within ModalProvider');
    }
    return ctx;
}

export function ModalProvider({
    children,
}: {
    children: preact.ComponentChildren;
}) {
    const showModal = signal(false);
    return (
        <ModalContext.Provider value={{ showModal }}>
            {children}
        </ModalContext.Provider>
    );
}
