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
