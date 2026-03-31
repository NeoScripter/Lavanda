import LanternDkTinyWebp from '@/assets/images/home/lantern-dk-tiny.webp';
import LanternDkAvif from '@/assets/images/home/lantern-dk.avif';
import LanternDkWebp from '@/assets/images/home/lantern-dk.webp';
import LanternDk2xAvif from '@/assets/images/home/lantern-dk2x.avif';
import LanternDk2xWebp from '@/assets/images/home/lantern-dk2x.webp';
import LanternDk3xAvif from '@/assets/images/home/lantern-dk3x.avif';
import LanternDk3xWebp from '@/assets/images/home/lantern-dk3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { useAuthModal } from '@/providers/AuthModalContext';
import { Auth } from '@/types/auth';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import css from './HelpSection.module.scss';
import ListItem from './partials/ListItem/ListItem';

const HelpSection = () => {
    const { auth } = usePage<{ auth: Auth }>().props;
    const { showSignup } = useAuthModal();

    const isLoggedIn = auth.user;

    return (
        <section className={cn(css.root, 'full-bleed')}>
            <div className={css.content}>
                <h2 className={css.heading}>Как это устроено?</h2>

                <ul className={css.items}>
                    {items.map((item) => (
                        <ListItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </ul>

                <p className={css.highlight}>
                    Никаких скрытых платежей. Дальше — только если захотите
                    остаться
                </p>

                <div class={cn(css.btnWrapper)}>
                    {!isLoggedIn && (
                        <>
                            <button
                                className="primary-btn"
                                onClick={showSignup}
                            >
                                Попробовать 24 часа бесплатно
                            </button>
                            <p>Без привязки карты</p>
                        </>
                    )}
                </div>
            </div>

            <BgLoader
                prtClass={cn(css.fgLoader)}
                imgClass={css.fgImage}
                dk={LanternDkWebp}
                dk2x={LanternDk2xWebp}
                dk3x={LanternDk3xWebp}
                dkAvif={LanternDkAvif}
                dkAvif2x={LanternDk2xAvif}
                dkAvif3x={LanternDk3xAvif}
                dkTiny={LanternDkTinyWebp}
                tb={LanternDkWebp}
                tb2x={LanternDk2xWebp}
                tb3x={LanternDk3xWebp}
                tbAvif={LanternDkAvif}
                tbAvif2x={LanternDk2xAvif}
                tbAvif3x={LanternDk3xAvif}
                tbTiny={LanternDkTinyWebp}
                mb={LanternDkTinyWebp}
                mb2x={LanternDk2xWebp}
                mb3x={LanternDk3xWebp}
                mbAvif={LanternDkAvif}
                mbAvif2x={LanternDk2xAvif}
                mbAvif3x={LanternDk3xAvif}
                mbTiny={LanternDkTinyWebp}
            />
        </section>
    );
};

export default HelpSection;

export type ItemType = {
    id: string;
    title: string;
    content: string;
};

const items: ItemType[] = [
    {
        id: crypto.randomUUID(),
        title: '1. Заходите',
        content: 'Без регистрации можно вытянуть карту Кошачьего оракула.',
    },
    {
        id: crypto.randomUUID(),
        title: '2. Входите в пространство',
        content: 'Открываете доступ на 24 часа бесплатно. Без привязки карты.',
    },
    {
        id: crypto.randomUUID(),
        title: '3. Пользуетесь',
        content:
            'Любые инструменты, сколько хотите. Если нравится — остаётесь.',
    },
];
