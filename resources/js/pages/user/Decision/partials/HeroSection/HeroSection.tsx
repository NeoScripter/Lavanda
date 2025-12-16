import BgDkTiny from '@/assets/images/assymetric-layout/hero-bg-dk-tiny.webp';
import BgDk from '@/assets/images/assymetric-layout/hero-bg-dk-tiny.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/hero-bg-tb-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/hero-bg-tb.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/hero-bg-mb-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/hero-bg-mb.webp';
import HeroDecorTiny from '@/assets/images/decision/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/decision/hero-decor.webp';
import FgMbTiny from '@/assets/images/home/hero-fg-mb-tiny.webp';
import FgMb from '@/assets/images/home/hero-fg-mb.webp';
import FgDkTiny from '@/assets/images/home/hero-fg-tiny.webp';
import FgDk from '@/assets/images/home/hero-fg.webp';
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

            <div class={css.content}>
                <h1 class={css.heading}>
                    Принять <AnimatedOutline>решение</AnimatedOutline>
                </h1>

                <p class={css.intro}>
                    Когда трудно выбрать путь или не хватает уверенности, здесь
                    вы найдете слова, которые помогут услышать себя и сделать
                    шаг вперед.
                </p>

                <div class={css.btnGroup}>
                    <button class={'primary-btn'}>Купить подписку</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
