import Error from '@/components/shared/layout/Error/Error';
import ErrorBoundary from '@/components/shared/layout/ErrorBoundary';
import Login from '@/components/user/forms/Login/Login';
import Signup from '@/components/user/forms/Signup/Signup';
import VerifyOtp from '@/components/user/forms/VerifyOtp/VerifyOtp';
import { AuthModalProvider, useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { Flash } from '@/types/flash';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC, useEffect } from 'preact/compat';
import { toast, Toaster } from 'sonner';
import '../../../../scss/app.scss';
import DialogLayout from '../DialogLayout/DialogLayout';
import css from './AppLayout.module.scss';
import AppFooter from './partials/AppFooter/AppFooter';
import AppHeader from './partials/AppHeader/AppHeader';

const AppLayout: FC<
    NodeProps<{ extendedFooter?: boolean; variation?: string }>
> = ({ className, children, extendedFooter, variation = 'dark' }) => {
    const { auth } = usePage<{ auth: Auth }>().props;

    return (
        <ErrorBoundary fallback={Error}>
            <AuthModalProvider>
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
                    {!auth?.user && <AppModals />}
                </div>
                <Toaster
                    toastOptions={{
                        style: {
                            color: '#5f4e8b'
                        },
                    }}
                    position="top-center"
                />
            </AuthModalProvider>
        </ErrorBoundary>
    );
};

export default AppLayout;

const AppModals = () => {
    const { activeModal, closeModal } = useAuthModal();
    const { flash } = usePage<{ flash: Flash }>().props;

    useEffect(() => {
        if (flash?.message) {
            toast(flash.message);
        }
    }, []);

    return (
        <>
            <DialogLayout
                show={activeModal === 'login'}
                onClose={closeModal}
                key="login-dialog"
            >
                <Login />
            </DialogLayout>
            <DialogLayout
                show={activeModal === 'otp'}
                onClose={closeModal}
                key="otp-dialog"
            >
                <VerifyOtp />
            </DialogLayout>
            <DialogLayout
                show={activeModal === 'signup'}
                onClose={closeModal}
                key="signup-dialog"
            >
                <Signup />
            </DialogLayout>
        </>
    );
};
