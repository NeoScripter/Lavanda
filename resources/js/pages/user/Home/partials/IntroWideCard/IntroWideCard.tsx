import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-preact';
import { FC } from 'preact/compat';
import css from './IntroWideCard.module.scss';

const IntroWideCard: FC<
    NodeProps<{
        heading: string;
        content: string;
        url: string;
        dk: string;
        dkTiny: string;
        tb: string;
        tbTiny: string;
        mb: string;
        mbTiny: string;
        alt: string;
    }>
> = ({
    className,
    children,
    heading,
    content,
    url,
    dk,
    dkTiny,
    tb,
    tbTiny,
    mb,
    mbTiny,
    alt,
}) => {
    return (
        <section class={cn(css.wrapper, className)}>
            <BgLoader
                alt={alt}
                dk={dk}
                dkTiny={dkTiny}
                tb={tb}
                mb={mb}
                tbTiny={tbTiny}
                mbTiny={mbTiny}
                prtClass={css.imageWrapper}
                imgClass={css.image}
            />

            <div class={css.content}>
                <h3>{heading}</h3>
                <p dangerouslySetInnerHTML={{ __html: content }} />

                <Link
                    href={url}
                    prefetch
                    class="secondary-btn"
                >
                    Узнать больше
                    <ArrowRight />
                </Link>
            </div>

            {children}
        </section>
    );
};

export default IntroWideCard;
