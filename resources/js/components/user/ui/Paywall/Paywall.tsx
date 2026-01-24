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
    const { showLogin } = useAuthModal();

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
            <p>
                Данный раздел доступен только по подписке.
                <br /> Если у вас уже есть подписка, пожалуйста авторизуйтесь
            </p>

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
    );
};

export default Paywall;
