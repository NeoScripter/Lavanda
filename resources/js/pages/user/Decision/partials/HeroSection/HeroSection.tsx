import {
    default as BgDk,
    default as BgDkTiny,
} from '@/assets/images/assymetric-layout/hero-bg-dk-tiny.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/hero-bg-mb-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/hero-bg-mb.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/hero-bg-tb-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/hero-bg-tb.webp';
import HeroDecorTiny from '@/assets/images/decision/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/decision/hero-decor.webp';
import FgDkTiny from '@/assets/images/decision/hero-fg-dk-tiny.webp';
import FgDk from '@/assets/images/decision/hero-fg-dk.webp';
import FgMbTiny from '@/assets/images/decision/hero-fg-mb-tiny.webp';
import FgMb from '@/assets/images/decision/hero-fg-mb.webp';
import FgTbTiny from '@/assets/images/decision/hero-fg-tb-tiny.webp';
import FgTb from '@/assets/images/decision/hero-fg-tb.webp';
import AnimatedOutline from '@/components/user/ui/AnimatedOutline/AnimatedOutline';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { cn } from '@/utils/cn';
import css from './HeroSection.module.scss';

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
                mb={BgMb}
                mbTiny={BgMbTiny}
            />

            <BgLoader
                prtClass={cn(css.fgLoader)}
                imgClass={css.fgImage}
                dk={FgDk}
                dkTiny={FgDkTiny}
                tb={FgTb}
                tbTiny={FgTbTiny}
                mb={FgMb}
                mbTiny={FgMbTiny}
            />

            <LazyImage
                img={HeroDecor}
                tinyImg={HeroDecorTiny}
                prtClass={css.decor}
            />

            <div class={css.content}>
                <h1 class={css.heading}>
                    Принять <AnimatedOutline>решение</AnimatedOutline>
                </h1>

                <p class={css.intro}>
                    Когда трудно выбрать путь — остановись и послушай себя.
                    Здесь ты найдёшь поддержку, чтобы принять решение спокойно и
                    уверенно.
                </p>

                <div class={css.btnGroup}>
                    <button class={'primary-btn'}>Купить подписку</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
