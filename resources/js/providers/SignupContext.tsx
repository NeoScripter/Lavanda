import { Signal, signal } from '@preact/signals';
import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

interface SignupContextValue {
    showSignupModal: Signal<boolean>;
}

const SignupContext = createContext<SignupContextValue | null>(null);

export function useSignupModal() {
    const ctx = useContext(SignupContext);
    if (!ctx) {
        throw new Error('useSignupModal must be used within SignupProvider');
    }
    return ctx;
}

export function SignupProvider({
    children,
}: {
    children: preact.ComponentChildren;
}) {
    const showSignupModal = signal(false);
    return (
        <SignupContext.Provider value={{ showSignupModal }}>
            {children}
        </SignupContext.Provider>
    );
}
