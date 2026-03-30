import { useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import css from './BenefitSection.module.scss';
import { infoCards } from './pageData';
import InfoCard from './partials/InfoCard';

const BenefitSection = () => {
    const { auth } = usePage<{ auth: Auth }>().props;
    const { showLogin } = useAuthModal();

    const isLoggedIn = auth.user;

    return (
        <section className={cn(css.root, 'full-bleed')}>
            <div className={css.intro}>
                <h2 className={css.heading}>Что внутри?</h2>
                <p className={css.description}>Инструменты на любой запрос</p>
            </div>

            <ul className={css.cardList}>
                {infoCards.map((card) => (
                    <InfoCard
                        key={card.id}
                        card={card}
                    />
                ))}
            </ul>

            <div className={css.footnote}>
                <p>
                    И это только часть. Коллекция постоянно пополняется: новые
                    карты, расклады, практики и авторские инструменты
                </p>

                {!isLoggedIn && (
                    <button
                        onClick={showLogin}
                        className={cn('primary-btn', css.loginBtn)}
                    >
                        Открыть доступ
                    </button>
                )}
            </div>
        </section>
    );
};

export default BenefitSection;

type InfoCardItemType = {
    id: string;
    img: string;
    tinyImg: string;
    label: string;
    href: string;
};

export type InfoCardType = {
    id: string;
    title: string;
    items: InfoCardItemType[];
};
