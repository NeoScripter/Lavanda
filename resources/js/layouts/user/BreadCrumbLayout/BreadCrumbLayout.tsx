import BgDkTiny from '@/assets/images/assymetric-layout/dk-bg-tiny.webp';
import BgDk from '@/assets/images/assymetric-layout/dk-bg.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/mb-bg-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/mb-bg.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/tb-bg-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/tb-bg.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { BgLoaderImg } from '@/lib/types/shared';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Head, usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import AppLayout from '../AppLayout/AppLayout';
import ItemsLayout from '../ItemsLayout';
import { CurrentSlideProvider } from '../ItemsLayout/CurrentSlideProvider';
import css from './BreadCrumbLayout.module.scss';
import HeroSection from './partials/HeroSection';
import { ExperienceItem } from '@/types/model';

const BreadCrumbLayout: FC<
    NodeProps<{
        heading: string;
        intro: string;
        imgClass?: string;
        withCards: boolean;
        fgImg?: BgLoaderImg;
    }>
> = ({ className, children, fgImg, heading, intro, imgClass, withCards }) => {
    const { items } = usePage<{ items: ExperienceItem[] | undefined }>().props;
    return (
        <AppLayout
            variation="white"
            className={cn(css.layout, className)}
        >
            <Head title="Руны" />
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
            />

            {withCards && items ? (
                <CurrentSlideProvider>
                    <ItemsLayout className={css.topOffset}>
                        {children}
                    </ItemsLayout>
                </CurrentSlideProvider>
            ) : (
                children
            )}
        </AppLayout>
    );
};

export default BreadCrumbLayout;
