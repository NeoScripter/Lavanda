import Error from '@/components/shared/layout/Error/Error';
import ErrorBoundary from '@/components/shared/layout/ErrorBoundary';
import Login from '@/components/user/forms/Login/Login';
import Signup from '@/components/user/forms/Signup/Signup';
import { LoginProvider, useLoginModal } from '@/providers/LoginContext';
import { SignupProvider, useSignupModal } from '@/providers/SignupContext';
import { Flash } from '@/types/flash';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC, useEffect } from 'preact/compat';
import { toast } from 'sonner';
import '../../../../scss/app.scss';
import DialogLayout from '../DialogLayout/DialogLayout';
import css from './AppLayout.module.scss';
import AppFooter from './partials/AppFooter/AppFooter';
import AppHeader from './partials/AppHeader/AppHeader';

const AppLayout: FC<
    NodeProps<{ extendedFooter?: boolean; variation?: string }>
> = ({ className, children, extendedFooter, variation = 'dark' }) => {
    return (
        <ErrorBoundary fallback={Error}>
            <SignupProvider>
                <LoginProvider>
                    <div
                        class={cn(
                            'full-bleed-parent',
                            css.wrapper,
                            variation === 'dark' && css.darkHeader,
                            className,
                        )}
                    >
                        {children}
                        <AppHeader />

                        <AppFooter hasMenu={extendedFooter} />
                        <AppModals />
                    </div>
                </LoginProvider>
            </SignupProvider>
        </ErrorBoundary>
    );
};

export default AppLayout;

const AppModals = () => {
    const { showLoginModal, setShowLoginModal } = useLoginModal();
    const { showSignupModal, setShowSignupModal } = useSignupModal();
    const { flash } = usePage<{ flash: Flash }>().props;

    useEffect(() => {
        if (flash?.message) {
            toast(flash.message);
        }
    }, []);

    return (
        <>
            <DialogLayout
                show={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                key="login-dialog"
            >
                <Login />
            </DialogLayout>
            <DialogLayout
                show={showSignupModal}
                onClose={() => setShowSignupModal(false)}
                key="signup-dialog"
            >
                <Signup />
            </DialogLayout>
        </>
    );
};
