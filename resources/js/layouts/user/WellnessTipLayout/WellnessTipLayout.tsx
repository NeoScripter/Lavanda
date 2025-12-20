import BgDkTiny from '@/assets/images/assymetric-layout/dk-bg-tiny.webp';
import BgDk from '@/assets/images/assymetric-layout/dk-bg.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/mb-bg-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/mb-bg.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/tb-bg-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/tb-bg.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { BgLoaderImg } from '@/lib/types/shared';
import { WellnessTip } from '@/types/model';
import { cn } from '@/utils/cn';
import { Head } from '@inertiajs/react';
import { ComponentChildren } from 'preact';
import { FC } from 'react-dom/src';
import css from './WellnessTipLayout.module.scss';
import HeroSection from './partials/HeroSection/HeroSection';
import IntroSection from './partials/IntroSection/IntroSection';
import WellnessTipSection from './partials/LinkSection/LinkSection';

export type WellnessTipLayout = {
    headTitle: string;
    heroHeading: string;
    heroDescription: string;
    heroFgImg: BgLoaderImg;
    heroDecor: ComponentChildren;
    introHeading?: string;
    introIntros?: string[];
    wellnessTips: WellnessTip[];
    children?: ComponentChildren;
};

const WellnessTipLayout: FC<WellnessTipLayout> = ({
    headTitle,
    heroHeading,
    heroDescription,
    heroFgImg,
    heroDecor,
    introHeading,
    introIntros,
    wellnessTips,
    children,
}) => {
    return (
        <AppLayout extendedFooter={true}>
            <Head title={headTitle} />
            <BgLoader
                prtClass={cn(css.bgLoader, 'full-bleed')}
                dk={BgDk}
                dkTiny={BgDkTiny}
                tb={BgTb}
                tbTiny={BgTbTiny}
                mb={BgMb}
                mbTiny={BgMbTiny}
            />
            <HeroSection
                heading={heroHeading}
                description={heroDescription}
                fgImg={heroFgImg}
                decorImg={heroDecor}
            />
            {introHeading && introIntros && (
                <IntroSection
                    heading={introHeading}
                    intros={introIntros}
                />
            )}
            <WellnessTipSection />
            {children}
        </AppLayout>
    );
};

export default WellnessTipLayout;
