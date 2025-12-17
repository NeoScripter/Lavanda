import BgDkTiny from '@/assets/images/assymetric-layout/dk-bg-tiny.webp';
import BgDk from '@/assets/images/assymetric-layout/dk-bg.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/mb-bg-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/mb-bg.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/tb-bg-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/tb-bg.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { BgLoaderImg } from '@/lib/types/shared';
import { cn } from '@/utils/cn';
import { Head } from '@inertiajs/react';
import { ComponentChildren } from 'preact';
import { FC } from 'react-dom/src';
import css from './AssymetricLayout.module.scss';
import HeroSection from './partials/HeroSection/HeroSection';
import IntroSection from './partials/IntroSection/IntroSection';
import LinkSection, {
    AssymetricSectionLink,
} from './partials/LinkSection/LinkSection';

export type AssymetricLayoutProps = {
    headTitle: string;
    heroHeading: string;
    heroDescription: string;
    heroFgImg: BgLoaderImg;
    heroDecor: ComponentChildren;
    introHeading: string;
    introIntros: string[];
    sectionLinks: AssymetricSectionLink[];
    children?: ComponentChildren;
};

const AssymetricLayout: FC<AssymetricLayoutProps> = ({
    headTitle,
    heroHeading,
    heroDescription,
    heroFgImg,
    heroDecor,
    introHeading,
    introIntros,
    sectionLinks,
    children,
}) => {
    return (
        <AppLayout>
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
            <IntroSection
                heading={introHeading}
                intros={introIntros}
            />
            <LinkSection links={sectionLinks} />
            {children}
        </AppLayout>
    );
};

export default AssymetricLayout;
