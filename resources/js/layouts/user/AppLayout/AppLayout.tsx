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
    );
};

export default AppLayout;

const AppModals = () => {
    const { showLoginModal } = useLoginModal();
    const { showSignupModal } = useSignupModal();
    const { flash } = usePage<{ flash: Flash }>().props;

    useEffect(() => {
        if (flash?.message) {
            toast(flash.message);
        }
    }, []);

    return (
        <>
            <DialogLayout
                show={showLoginModal.value}
                onClose={() => (showLoginModal.value = false)}
            >
                <Login />
            </DialogLayout>
            <DialogLayout
                show={showSignupModal.value}
                onClose={() => (showSignupModal.value = false)}
            >
                <Signup />
            </DialogLayout>
        </>
    );
};
