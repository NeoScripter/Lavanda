import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

interface SignupContextValue {
    showSignupModal: boolean;
    setShowSignupModal: (value: boolean) => void;
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
    const [showSignupModal, setShowSignupModal] = useState(false);

    return (
        <SignupContext.Provider value={{ showSignupModal, setShowSignupModal }}>
            {children}
        </SignupContext.Provider>
    );
}
