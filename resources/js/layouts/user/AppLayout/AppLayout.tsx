import CatMdTinyWebp from '@/assets/images/shared/cat-md-tiny.webp';
import CatMd2xWebp from '@/assets/images/shared/cat-md2x.webp';
import EndedMdTinyWebp from '@/assets/images/shared/ended-md-tiny.webp';
import EndedMd2xWebp from '@/assets/images/shared/ended-md2x.webp';
import EndsSoonMdTinyWebp from '@/assets/images/shared/ends-soon-md-tiny.webp';
import EndsSoonMd2xWebp from '@/assets/images/shared/ends-soon-md2x.webp';
import Error from '@/components/shared/layout/Error/Error';
import ErrorBoundary from '@/components/shared/layout/ErrorBoundary';
import Login from '@/components/user/forms/Login/Login';
import Signup from '@/components/user/forms/Signup/Signup';
import VerifyOtp from '@/components/user/forms/VerifyOtp/VerifyOtp';
import Notification from '@/components/user/ui/Notification';
import { AuthModalProvider, useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { Flash } from '@/types/flash';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/formatData';
import { usePage } from '@inertiajs/react';
import { FC, useEffect } from 'preact/compat';
import { toast, Toaster } from 'sonner';
import '../../../../scss/app.scss';
import DialogLayout from '../DialogLayout/DialogLayout';
import css from './AppLayout.module.scss';
import AppFooter from './partials/AppFooter/AppFooter';
import AppHeader from './partials/AppHeader/AppHeader';
import BackToTopBtn from './partials/BackToTopBtn/BackToTopBtn';

const AppLayout: FC<
    NodeProps<{ extendedFooter?: boolean; variation?: string }>
> = ({ className, children, extendedFooter, variation = 'dark' }) => {
    const { auth } = usePage<{ auth: Auth }>().props;

    useEffect(() => {
        const subEvent = getNotificationContent(auth.subEvent);

        if (!subEvent) {
            return;
        }
        toast.message(subEvent, {
            style: {
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
                position: 'relative',
            },
        });
    }, [auth.subEvent]);

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

                <BackToTopBtn />
                <Toaster
                    toastOptions={{
                        style: {
                            color: '#5f4e8b',
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

const getNotificationContent = (subEvent?: string, endDate?: string) => {
    switch (subEvent) {
        case 'purchase':
            return (
                <Notification
                    image={{ src: CatMd2xWebp, tinySrc: CatMdTinyWebp }}
                >
                    <>
                        <p>Доступ успешно открыт</p>
                        <p>Вы можете пользоваться всеми разделами сайта.</p>
                        {endDate && (
                            <p>
                                <strong>
                                    Доступ истекает: {formatDate(endDate)}
                                </strong>
                            </p>
                        )}
                    </>
                </Notification>
            );
        case 'ends_soon':
            return (
                <Notification
                    image={{
                        src: EndsSoonMd2xWebp,
                        tinySrc: EndsSoonMdTinyWebp,
                    }}
                    buttons={{
                        leftBtn: { href: route('home'), label: 'Главная' },
                        rightBtn: {
                            href: route('plans'),
                            label: 'Открыть период',
                        },
                    }}
                >
                    <>
                        <p>Период доступа заканчивается через час</p>
                        <p>
                            Откройте новый, чтобы продолжить пользоваться всеми
                            инструментами сайта.
                        </p>
                    </>
                </Notification>
            );
        case 'ended':
            return (
                <Notification
                    image={{ src: EndedMd2xWebp, tinySrc: EndedMdTinyWebp }}
                    buttons={{
                        leftBtn: { href: route('home'), label: 'Главная' },
                        rightBtn: {
                            href: route('plans'),
                            label: 'Открыть период',
                        },
                    }}
                >
                    <>
                        <p>Ваша подписка истекла</p>
                        <p>
                            Вы можете заранее открыть следующий период, чтобы
                            сохранить доступ ко всем разделам.
                        </p>
                    </>
                </Notification>
            );
        default:
            return null;
    }
};
