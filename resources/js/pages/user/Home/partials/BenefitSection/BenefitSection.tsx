import BgDkTinyWebp from '@/assets/images/home/benefits/bg-dk-tiny.webp';
import BgDkAvif from '@/assets/images/home/benefits/bg-dk.avif';
import BgDkWebp from '@/assets/images/home/benefits/bg-dk.webp';
import BgDk2xAvif from '@/assets/images/home/benefits/bg-dk2x.avif';
import BgDk2xWebp from '@/assets/images/home/benefits/bg-dk2x.webp';
import BgDk3xAvif from '@/assets/images/home/benefits/bg-dk3x.avif';
import BgDk3xWebp from '@/assets/images/home/benefits/bg-dk3x.webp';
import BgMbTinyWebp from '@/assets/images/home/benefits/bg-mb-tiny.webp';
import BgMbAvif from '@/assets/images/home/benefits/bg-mb.avif';
import BgMbWebp from '@/assets/images/home/benefits/bg-mb.webp';
import BgMb2xAvif from '@/assets/images/home/benefits/bg-mb2x.avif';
import BgMb2xWebp from '@/assets/images/home/benefits/bg-mb2x.webp';
import BgMb3xAvif from '@/assets/images/home/benefits/bg-mb3x.avif';
import BgMb3xWebp from '@/assets/images/home/benefits/bg-mb3x.webp';
import BgTbTinyWebp from '@/assets/images/home/benefits/bg-tb-tiny.webp';
import BgTbAvif from '@/assets/images/home/benefits/bg-tb.avif';
import BgTbWebp from '@/assets/images/home/benefits/bg-tb.webp';
import BgTb2xAvif from '@/assets/images/home/benefits/bg-tb2x.avif';
import BgTb2xWebp from '@/assets/images/home/benefits/bg-tb2x.webp';
import BgTb3xAvif from '@/assets/images/home/benefits/bg-tb3x.avif';
import BgTb3xWebp from '@/assets/images/home/benefits/bg-tb3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
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
            <BgLoader
                prtClass={cn(css.bgLoader)}
                dk={BgDkWebp}
                dk2x={BgDk2xWebp}
                dk3x={BgDk3xWebp}
                dkAvif={BgDkAvif}
                dkAvif2x={BgDk2xAvif}
                dkAvif3x={BgDk3xAvif}
                dkTiny={BgDkTinyWebp}
                tb={BgTbWebp}
                tb2x={BgTb2xWebp}
                tb3x={BgTb3xWebp}
                tbAvif={BgTbAvif}
                tbAvif2x={BgTb2xAvif}
                tbAvif3x={BgTb3xAvif}
                tbTiny={BgTbTinyWebp}
                mb={BgMbWebp}
                mb2x={BgMb2xWebp}
                mb3x={BgMb3xWebp}
                mbAvif={BgMbAvif}
                mbAvif2x={BgMb2xAvif}
                mbAvif3x={BgMb3xAvif}
                mbTiny={BgMbTinyWebp}
            />

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
