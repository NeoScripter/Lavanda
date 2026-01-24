import BgDkTiny from '@/assets/images/assymetric-layout/dk-bg-tiny.webp';
import BgDk from '@/assets/images/assymetric-layout/dk-bg.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/mb-bg-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/mb-bg.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/tb-bg-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/tb-bg.webp';
import Error from '@/components/shared/layout/Error/Error';
import ErrorBoundary from '@/components/shared/layout/ErrorBoundary';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { BgLoaderImg } from '@/lib/types/shared';
import { Auth } from '@/types/auth';
import { ExperienceItem } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC, useState } from 'preact/compat';
import AppLayout from '../AppLayout/AppLayout';
import ItemsLayout from '../ItemsLayout';
import { CurrentSlideProvider } from '../ItemsLayout/CurrentSlideProvider';
import css from './BreadCrumbLayout.module.scss';
import HeroSection from './partials/HeroSection';

const BreadCrumbLayout: FC<
    NodeProps<{
        heading: string;
        intro: string;
        imgClass?: string;
        withCards: boolean;
        fgImg?: BgLoaderImg;
        hasHeroRevealer?: boolean;
    }>
> = ({
    className,
    children,
    fgImg,
    heading,
    intro,
    imgClass,
    withCards,
    hasHeroRevealer,
}) => {
    const { items, auth } = usePage<{
        items: ExperienceItem[] | undefined;
        auth: Auth;
    }>().props;
    const [showContent, setShowContent] = useState(!hasHeroRevealer);
    const isMember = auth.hasPremiumAccess;

    const handleShowContentClick = () => {
        setShowContent(true);
    };

    return (
        <AppLayout
            variation="white"
            className={cn(css.layout, className)}
        >
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
                heading={heading}
                intro={intro}
                imgClass={imgClass}
                className={withCards || hasHeroRevealer ? css.noMargin : ''}
                fgImg={fgImg}
                handleClick={
                    hasHeroRevealer ? handleShowContentClick : undefined
                }
            />

            <ErrorBoundary fallback={Error}>
                <CurrentSlideProvider>
                    {showContent && (
                        <ContentWrapper
                            withCards={withCards && !!items}
                            isMember={isMember}
                        >
                            {children}
                        </ContentWrapper>
                    )}
                </CurrentSlideProvider>
            </ErrorBoundary>
        </AppLayout>
    );
};

export default BreadCrumbLayout;

type ContentWrapperProps = {
    withCards: boolean;
    isMember: boolean;
    children: preact.ComponentChildren;
};

const ContentWrapper: FC<ContentWrapperProps> = ({
    withCards,
    isMember,
    children,
}) => {
    if (withCards) {
        return <ItemsLayout className={css.topOffset}>{children}</ItemsLayout>;
    }

    return <div className={cn(!isMember && css.paywallFrame)}>{children}</div>;
};
