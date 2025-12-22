import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { BgLoaderImg } from '@/lib/types/shared';
import { Head } from '@inertiajs/react';
import { ComponentChildren } from 'preact';
import { FC } from 'react-dom/src';
import css from './CardLayout.module.scss';
import { CurrentSlideProvider } from './CurrentSlideProvider';
import HeroSection from './partials/HeroSection';
import ItemSection from './partials/ItemSection';
import { cn } from '@/utils/cn';

export type CardLayoutProps = {
    headTitle: string;
    heroHeading: string;
    heroDescription: string;
    heroFgImg: BgLoaderImg;
    children?: ComponentChildren;
    isHigh?: boolean;
};

const CardLayout: FC<CardLayoutProps> = ({
    headTitle,
    heroHeading,
    heroDescription,
    heroFgImg,
    children,
    isHigh = false
}) => {
    return (
        <AppLayout className={css.layout}>
            <Head title={headTitle} />
            <HeroSection
                heading={heroHeading}
                description={heroDescription}
                fgImg={heroFgImg}
                imgClass={cn(isHigh ? css.noShadow : '')}
            />
            <CurrentSlideProvider>
                <ItemSection className={cn(isHigh ? css.shifted : '')}>{children}</ItemSection>
            </CurrentSlideProvider>
        </AppLayout>
    );
};

export default CardLayout;
