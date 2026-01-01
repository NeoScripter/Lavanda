import BgDkTiny from '@/assets/images/home/hero-bg-dk-tiny.webp';
import BgDk from '@/assets/images/home/hero-bg-dk.webp';
import BgTbTiny from '@/assets/images/home/hero-bg-tb-tiny.webp';
import BgTb from '@/assets/images/home/hero-bg-tb.webp';
import HeroDecorTiny from '@/assets/images/home/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/home/hero-decor.webp';
import FgMbTiny from '@/assets/images/home/hero-fg-mb-tiny.webp';
import FgMb from '@/assets/images/home/hero-fg-mb.webp';
import FgDkTiny from '@/assets/images/home/hero-fg-tiny.webp';
import FgDk from '@/assets/images/home/hero-fg.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { heroCards } from '@/lib/data/heroCards';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import css from './HeroSection.module.scss';
import Card from './partials/Card/Card';

const HeroSection = () => {
    return (
        <section class={cn(css.wrapper, 'full-bleed')}>
            <BgLoader
                prtClass={cn(css.bgLoader)}
                imgClass={css.bgImage}
                dk={BgDk}
                dkTiny={BgDkTiny}
                tb={BgTb}
                tbTiny={BgTbTiny}
                mb={BgTb}
                mbTiny={BgTbTiny}
            />

            <BgLoader
                prtClass={cn(css.fgLoader)}
                imgClass={css.fgImage}
                dk={FgDk}
                dkTiny={FgDkTiny}
                tb={FgDk}
                tbTiny={FgDkTiny}
                mb={FgMb}
                mbTiny={FgMbTiny}
            />

            <LazyImage
                img={HeroDecor}
                tinyImg={HeroDecorTiny}
                prtClass={css.decor}
            />

            <ul class={css.cards}>
                {heroCards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                    />
                ))}
            </ul>

            <div class={css.content}>
                <h1>Пространство для поддержки и вдохновения</h1>

                <p class={css.intro}>
                    Уникальный веб-ресурс на стыке науки и волшебства Лаванды.
                    Здесь инструменты, помогающие преодолеть трудности, укрепить
                    внутреннюю силу и услышать себя.
                </p>

                <div class={css.btnGroup}>
                    <Link
                        href={route('plans')}
                        prefetch
                        class={'primary-btn'}
                    >
                        Купить подписку
                    </Link>
                    <Link
                        href={route('about')}
                        prefetch
                        class={css.infoBtn}
                    >
                        <PlayBtn />
                        <span class={css.underline}>Узнать больше</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

const PlayBtn = () => {
    return (
        <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                opacity="0.75"
                cx="17.5"
                cy="17.5"
                r="16.5"
                stroke="#5F4E8C"
                stroke-width="2"
            />
            <path
                opacity="0.75"
                d="M22.5 14.9019C24.5 16.0566 24.5 18.9434 22.5 20.0981L17.25 23.1292C15.25 24.2839 12.75 22.8405 12.75 20.5311L12.75 14.4689C12.75 12.1595 15.25 10.7161 17.25 11.8708L22.5 14.9019Z"
                fill="#5F4E8C"
            />
        </svg>
    );
};
