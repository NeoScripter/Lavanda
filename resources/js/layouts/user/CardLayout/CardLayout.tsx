import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { BgLoaderImg } from '@/lib/types/shared';
import { cn } from '@/utils/cn';
import { Head } from '@inertiajs/react';
import { ComponentChildren } from 'preact';
import { FC } from 'react-dom/src';
import ItemsLayout from '../ItemsLayout';
import css from './CardLayout.module.scss';
import HeroSection from './partials/HeroSection';
import { CurrentSlideProvider } from '../ItemsLayout/CurrentSlideProvider';

export type CardLayoutProps = {
    headTitle: string;
    heroHeading: string;
    heroDescription: string;
    heroFgImg: BgLoaderImg;
    children?: ComponentChildren;
    isHigh?: boolean;
    imgClass?: string;
};

const CardLayout: FC<CardLayoutProps> = ({
    headTitle,
    heroHeading,
    heroDescription,
    heroFgImg,
    children,
    isHigh = false,
    imgClass,
}) => {
    return (
        <AppLayout className={css.layout}>
            <Head title={headTitle} />
            <HeroSection
                heading={heroHeading}
                description={heroDescription}
                fgImg={heroFgImg}
                imgClass={cn(imgClass, isHigh ? css.noShadow : '')}
            />
            <CurrentSlideProvider>
                <ItemsLayout className={cn(isHigh ? css.shifted : '')}>
                    {children}
                </ItemsLayout>
            </CurrentSlideProvider>
        </AppLayout>
    );
};

export default CardLayout;
