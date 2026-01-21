import BackgroundDkTinyWebp from '@/assets/images/splitlayout/background-dk-tiny.webp';
import BackgroundDkAvif from '@/assets/images/splitlayout/background-dk.avif';
import BackgroundDkWebp from '@/assets/images/splitlayout/background-dk.webp';
import BackgroundMbTinyWebp from '@/assets/images/splitlayout/background-mb-tiny.webp';
import BackgroundMbAvif from '@/assets/images/splitlayout/background-mb.avif';
import BackgroundMbWebp from '@/assets/images/splitlayout/background-mb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import BreadCrumbs from '@/components/user/ui/BreadCrumbs';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { ComponentChild } from 'preact';
import { FC } from 'preact/compat';
import css from './SplitLayout.module.scss';

const SplitLayout: FC<
    NodeProps<{
        left: ComponentChild;
        right: ComponentChild;
        leftClassName?: string;
        rightClassName?: string;
    }>
> = ({ left, right, leftClassName, rightClassName, className }) => {
    return (
        <AppLayout
            variation="white"
            className={cn(css.layout, className)}
        >
            <section className={cn(css.wrapper, 'full-bleed')}>
                <article className={cn(css.leftColumn, leftClassName)}>
                    <BgLoader
                        prtClass={css.background}
                        dk={BackgroundDkWebp}
                        dkAvif={BackgroundDkAvif}
                        tb={BackgroundDkWebp}
                        tbAvif={BackgroundDkAvif}
                        mb={BackgroundMbWebp}
                        mbAvif={BackgroundMbAvif}
                        dkTiny={BackgroundDkTinyWebp}
                        tbTiny={BackgroundDkTinyWebp}
                        mbTiny={BackgroundMbTinyWebp}
                    />
                    <BreadCrumbs className={css.breadcrumbs} />
                    <div>{left}</div>
                </article>
                <article className={cn(css.rightColumn, rightClassName)}>
                    {right}
                </article>
            </section>
        </AppLayout>
    );
};

export default SplitLayout;
