import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-preact';
import { FC } from 'preact/compat';
import css from './IntroSquareCard.module.scss';

const IntroSquareCard: FC<
    NodeProps<{
        heading: string;
        img: string;
        alt: string;
        tinyImg: string;
        content: string;
        url: string;
    }>
> = ({ className, children, heading, content, url, tinyImg, alt, img }) => {
    return (
        <section class={cn(css.wrapper, className)}>
            <LazyImage
                alt={alt}
                img={img}
                tinyImg={tinyImg}
                prtClass={css.imageWrapper}
                imgClass={css.image}
            />

            <div class={css.content}>
                <h3>{heading}</h3>
                <p dangerouslySetInnerHTML={{__html: content}}/>

                <Link
                    href={url}
                    prefetch
                    class={cn(css.link, "secondary-btn")}
                >
                    Узнать больше
                    <ArrowRight />
                </Link>
            </div>

            {children}
        </section>
    );
};

export default IntroSquareCard;
