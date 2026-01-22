import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

interface LoginContextValue {
    showLoginModal: boolean;
    setShowLoginModal: (value: boolean) => void;
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
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <LoginContext.Provider
            value={{ showLoginModal, setShowLoginModal }}
        >
            {children}
        </LoginContext.Provider>
    );
}

