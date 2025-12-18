import {
    default as BgDk,
    default as BgDkTiny,
} from '@/assets/images/assymetric-layout/hero-bg-dk.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/hero-bg-mb-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/hero-bg-mb.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/hero-bg-tb-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/hero-bg-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { BgLoaderImg } from '@/lib/types/shared';
import { cn } from '@/utils/cn';
import { ComponentChildren } from 'preact';
import { FC } from 'react-dom/src';
import css from './HeroSection.module.scss';
import AnimatedOutline from '@/components/user/ui/AnimatedOutline/AnimatedOutline';

type AssymetricHeroSectionProps = {
    heading: string;
    description: string;
    fgImg: BgLoaderImg;
    decorImg: ComponentChildren;
};

const HeroSection: FC<AssymetricHeroSectionProps> = ({
    heading,
    description,
    fgImg,
    decorImg,
}) => {
    const parts = heading.split(' ');

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

            <div class={css.content}>
                <h1 class={css.heading}>
                    {parts.slice(0, -1)}{' '}
                    <AnimatedOutline>{parts.at(-1)}</AnimatedOutline>
                </h1>

                <p class={css.intro}>{description}</p>

                <div class={css.btnGroup}>
                    <button class={'primary-btn'}>Купить подписку</button>
                </div>
            </div>

            <BgLoader
                prtClass={cn(css.fgLoader)}
                imgClass={css.fgImage}
                dk={fgImg.dk}
                dkTiny={fgImg.dkTiny}
                tb={fgImg.tb}
                tbTiny={fgImg.tbTiny}
                mb={fgImg.mb}
                mbTiny={fgImg.mbTiny}
            />

            {decorImg}
        </section>
    );
};

export default HeroSection;
