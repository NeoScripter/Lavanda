import ForegroundDkTinyWebp from '@/assets/images/paywall/foreground-dk-tiny.webp';
import ForegroundDkWebp from '@/assets/images/paywall/foreground-dk.webp';
import { useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { router, usePage } from '@inertiajs/react';
import { CalendarCheck, CircleUser } from 'lucide-preact';
import { FC } from 'preact/compat';
import LazyImage from '../LazyImage/LazyImage';
import css from './Paywall.module.scss';

const Paywall: FC<NodeProps> = ({ className }) => {
    const { auth } = usePage<{
        auth: Auth;
    }>().props;
    const { showLogin, showSignup } = useAuthModal();

    const isLoggedIn = auth.user != null;

    const handleClick = () => {
        if (!isLoggedIn) {
            showLogin();
        } else {
            router.visit(route('plans'));
        }
    };

    return (
        <div
            id="paywall"
            className={cn(css.wrapper, className)}
        >
            <LazyImage
                prtClass={css.imageFrame}
                img={ForegroundDkWebp}
                tinyImg={ForegroundDkTinyWebp}
            />
            {!auth.user ? (
                <p>
                    Этот раздел открывается после регистрации
                    <br />{' '}
                    <>
                        <strong class={css.highlight}>
                            Зарегистрируйтесь за 1 минуту и получите 24 часа
                            полного доступа ко всем инструментам сайта: картам,
                            рунам и практикам.{' '}
                        </strong>
                        <br /> Уже есть аккаунт? Нажмите "Войти".
                    </>
                </p>
            ) : (
                <p>
                    Пожалуйста, купите подписку для получения доступа к данному
                    разделу
                </p>
            )}
            <div className={css.btnWrapper}>
                {!isLoggedIn && (
                    <button
                        onClick={showSignup}
                        className={cn('secondary-btn', css.signupBtn)}
                    >
                        Зарегистрироваться
                    </button>
                )}
                <button
                    onClick={handleClick}
                    className={cn('primary-btn', css.actionBtn)}
                >
                    {!isLoggedIn ? (
                        <span>
                            <CircleUser />
                            Войти
                        </span>
                    ) : (
                        <span>
                            <CalendarCheck />
                            Выбрать тариф
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Paywall;
