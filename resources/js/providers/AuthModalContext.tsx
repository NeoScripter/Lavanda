import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

type ModalType = 'login' | 'signup' | null;

interface AuthModalContextValue {
    activeModal: ModalType;
    setActiveModal: (value: ModalType) => void;
    showLogin: () => void;
    showSignup: () => void;
    closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextValue | null>(null);

export function useAuthModal() {
    const ctx = useContext(AuthModalContext);
    if (!ctx) {
        throw new Error('useAuthModal must be used within AuthModalProvider');
    }
    return ctx;
}

export function AuthModalProvider({
    children,
}: {
    children: preact.ComponentChildren;
}) {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const showLogin = () => setActiveModal('login');
    const showSignup = () => setActiveModal('signup');
    const closeModal = () => setActiveModal(null);

    return (
        <AuthModalContext.Provider
            value={{
                activeModal,
                setActiveModal,
                showLogin,
                showSignup,
                closeModal,
            }}
        >
            {children}
        </AuthModalContext.Provider>
    );
}
