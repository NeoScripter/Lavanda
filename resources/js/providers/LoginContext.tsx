import { Signal, signal } from '@preact/signals';
import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

interface LoginContextValue {
    showLoginModal: Signal<boolean>;
}

const LoginContext = createContext<LoginContextValue | null>(null);

export function useLoginModal() {
    const ctx = useContext(LoginContext);
    if (!ctx) {
        throw new Error('useLoginModal must be used within LoginProvider');
    }
    return ctx;
}

export function LoginProvider({
    children,
}: {
    children: preact.ComponentChildren;
}) {
    const showLoginModal = signal(false);
    return (
        <LoginContext.Provider value={{ showLoginModal }}>
            {children}
        </LoginContext.Provider>
    );
}
