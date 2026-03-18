import { useAuthModal } from '@/providers/AuthModalContext';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import css from './AccessSection.module.scss';

const AccessSection = () => {
    const { showLogin } = useAuthModal();
    return (
        <section className={css.wrapper}>
            <div className={css.content}>
                <h2 className={css.heading}>Почему доступ платный?</h2>
                <p>
                    В интернете действительно много бесплатных сайтов с
                    онлайн-гаданиями.
                    <br />
                    Но{' '}
                    <span class="decorative-title">
                        Lavanda<sup>Kim</sup>
                    </span>{' '}
                    - это не генератор случайных карт и не сборник шаблонных
                    трактований.
                </p>
                <p>
                    Платформа создана для тех, кто ценит внимательный подход,
                    глубину и спокойное пространство без шума и рекламы.
                </p>
                <p>
                    Поэтому доступ к ресурсу платный — <br />
                    чтобы сохранять качество, развивать проект и поддерживать
                    работу команды.{' '}
                    <span class="decorative-title">
                        Lavanda<sup>Kim</sup>
                    </span>{' '}
                    — это не поток случайных трактований, а пространство
                    избранных подсказок.
                </p>
                <p>
                    При регистрации вы можете протестировать сайт в течение 24
                    часов, чтобы прочувствовать его возможности и приемущества.
                </p>
            </div>
            <div className={css.btnWrapper}>
                <button
                    onClick={showLogin}
                    type="button"
                    class={'primary-btn'}
                >
                    Попробовать бесплатно
                </button>
                <Link
                    href={route('home')}
                    class={cn('secondary-btn', css.neutralBtn)}
                >
                    Вернуться на главную
                </Link>
                <Link
                    href={route('plans')}
                    class={cn('secondary-btn', css.neutralBtn)}
                >
                    Подробнее о тарифах
                </Link>
            </div>
        </section>
    );
};

export default AccessSection;
