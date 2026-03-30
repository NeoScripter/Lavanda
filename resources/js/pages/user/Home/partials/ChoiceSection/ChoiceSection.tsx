import { useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './ChoiceSection.module.scss';

const ChoiceSection: FC<NodeProps> = ({ children }) => {
    const { auth } = usePage<{ auth: Auth }>().props;
    const { showLogin } = useAuthModal();

    const isLoggedIn = auth.user;

    return (
        <section className={cn('full-bleed', css.wrapper)}>
            <div className={css.root}>
                <h2 className={css.heading}>
                    Одной подсказки иногда мало, чтобы увидеть всю картину. Мы
                    открыли для вас все залы сайта на 24 часа.
                </h2>

                <p className={css.cta}>
                    Посмотрите, что ещё есть внутри — это бесплатно и без
                    привязки карты. Просто осмотритесь.
                </p>

                {!isLoggedIn && (
                    <>
                        <div className={css.joinBtnFrame}>
                            <button
                                onClick={showLogin}
                                className={css.joinBtn}
                            >
                                Открыть доступ на 24 часа
                            </button>
                            <span className={css.badge}>Бесплатно</span>
                        </div>

                        <p className={css.highlight}>
                            Регистрация в один клик через Google / Yandex
                        </p>
                    </>
                )}
                <p className={css.footnote}>
                    «Кошачий оракул» всегда открыт для вас.
                </p>
            </div>

            {children}
        </section>
    );
};

export default ChoiceSection;
