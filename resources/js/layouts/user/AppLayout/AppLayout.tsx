import Login from '@/components/user/forms/Login/Login';
import { LoginProvider, useLoginModal } from '@/providers/LoginContext';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import '../../../../scss/app.scss';
import DialogLayout from '../DialogLayout/DialogLayout';
import css from './AppLayout.module.scss';
import AppFooter from './partials/AppFooter/AppFooter';
import AppHeader from './partials/AppHeader/AppHeader';

const AppLayout: FC<
    NodeProps<{ extendedFooter?: boolean; variation?: string }>
> = ({ className, children, extendedFooter, variation = 'dark' }) => {
    return (
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
    );
};

export default AppLayout;

const AppModals = () => {
    const { showLoginModal } = useLoginModal();
    return (
        <>
            <DialogLayout
                show={showLoginModal.value}
                onClose={() => (showLoginModal.value = false)}
            >
                <Login />
            </DialogLayout>
        </>
    );
};
