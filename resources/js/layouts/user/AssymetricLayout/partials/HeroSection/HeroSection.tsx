import {
    default as BgDk,
    default as BgDkTiny,
} from '@/assets/images/assymetric-layout/hero-bg-dk.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/hero-bg-mb-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/hero-bg-mb.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/hero-bg-tb-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/hero-bg-tb.webp';
import AnimatedOutline from '@/components/user/ui/AnimatedOutline/AnimatedOutline';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import BreadCrumbs from '@/components/user/ui/BreadCrumbs';
import { BgLoaderImg } from '@/lib/types/shared';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { ComponentChildren } from 'preact';
import { FC } from 'react-dom/src';
import css from './HeroSection.module.scss';

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

            <div class={css.content}>
                <BreadCrumbs className={css.breadcrumbs} />

                <h1 class={css.heading}>
                    {parts.slice(0, -1)}{' '}
                    <AnimatedOutline>{parts.at(-1)}</AnimatedOutline>
                </h1>

                <p
                    class={css.intro}
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                <div class={css.btnGroup}>
                    <Link
                        href={route('plans')}
                        prefetch
                        class={'primary-btn'}
                    >
                        Купить подписку
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
