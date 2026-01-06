import BgDkTiny from '@/assets/images/assymetric-layout/dk-bg-tiny.webp';
import BgDk from '@/assets/images/assymetric-layout/dk-bg.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/mb-bg-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/mb-bg.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/tb-bg-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/tb-bg.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { BgLoaderImg } from '@/lib/types/shared';
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
    const { items } = usePage<{ items: ExperienceItem[] | undefined }>().props;
    const [showContent, setShowContent] = useState(!hasHeroRevealer);

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
                className={withCards ? css.noMargin : ''}
                fgImg={fgImg}
                handleClick={
                    hasHeroRevealer ? handleShowContentClick : undefined
                }
            />

            <CurrentSlideProvider>
                {showContent &&
                    (withCards && items ? (
                        <ItemsLayout className={css.topOffset}>
                            {children}
                        </ItemsLayout>
                    ) : (
                        showContent && children
                    ))}
            </CurrentSlideProvider>
        </AppLayout>
    );
};

export default BreadCrumbLayout;
