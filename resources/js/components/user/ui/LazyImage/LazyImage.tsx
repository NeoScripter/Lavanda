import { cn } from '@/utils/cn';
import { useCallback, useState } from 'preact/hooks';
import css from './LazyImage.module.scss';

type LazyImageProps = {
    prtClass?: string;
    imgClass?: string;
    img: string;
    alt?: string;
    tinyImg: string;
    isLazy?: boolean;
};

export default function LazyImage({
    prtClass = '',
    imgClass = '',
    img,
    alt = '',
    tinyImg,
    isLazy = true,
}: LazyImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    const imgRef = useCallback((el: HTMLImageElement | null) => {
        if (el?.complete) setIsLoading(false);
    }, []);

    return (
        <figure
            role="img"
            style={{ '--tiny-src': `url(${tinyImg})` }}
            class={cn(css.wrapper, isLoading && css.wrapperLoading, prtClass)}
            {...(alt === '' && { 'aria-hidden': 'true' })}
        >
            <img
                ref={imgRef}
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                    console.error('Image failed to load:', img, e);
                    setIsLoading(false);
                }}
                src={img}
                alt={alt}
                loading={isLazy ? 'lazy' : undefined}
                class={cn(css.image, isLoading && css.imageLoading, imgClass)}
                aria-hidden={isLoading}
            />

            {isLoading && (
                <div
                    aria-hidden="true"
                    class={css.skeleton}
                />
            )}
        </figure>
    );
}
