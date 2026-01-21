import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import BreadCrumbs from '@/components/user/ui/BreadCrumbs';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { ComponentChild } from 'preact';
import { FC } from 'preact/compat';
import css from './SplitLayout.module.scss';

export type BgLoaderImage = {
    dk: string;
    dkAvif: string;
    tb: string;
    tbAvif: string;
    mb: string;
    mbAvif: string;
    dkTiny: string;
    tbTiny: string;
    mbTiny: string;
};

export type LeftContent = {
    heading: ComponentChild;
    intro: string;
    btns?: ComponentChild;
};

const SplitLayout: FC<
    NodeProps<{
        left: LeftContent;
        right: ComponentChild;
        leftClassName?: string;
        rightClassName?: string;
        bgImage: BgLoaderImage;
    }>
> = ({ bgImage, left, right, leftClassName, rightClassName, className }) => {
    return (
        <AppLayout
            variation="white"
            className={cn(css.layout, className)}
        >
            <section className={cn(css.wrapper, 'full-bleed')}>
                <article className={cn(css.leftColumn, leftClassName)}>
                    <BgLoader
                        prtClass={css.background}
                        dk={bgImage.dk}
                        dkAvif={bgImage.dkAvif}
                        tb={bgImage.tb}
                        tbAvif={bgImage.tbAvif}
                        mb={bgImage.mb}
                        mbAvif={bgImage.mbAvif}
                        dkTiny={bgImage.dkTiny}
                        tbTiny={bgImage.tbTiny}
                        mbTiny={bgImage.mbTiny}
                    />
                    <BreadCrumbs className={css.breadcrumbs} />
                    <div>
                        <h1>{left.heading}</h1>
                        <div
                            className={css.intro}
                            dangerouslySetInnerHTML={{ __html: left.intro }}
                        />
                        {left.btns && (
                            <div className={css.actionBtns}>{left.btns}</div>
                        )}
                    </div>
                </article>
                <article className={cn(css.rightColumn, rightClassName)}>
                    {right}
                </article>
            </section>
        </AppLayout>
    );
};

export default SplitLayout;
