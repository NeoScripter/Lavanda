import { cn } from '@/utils/cn';
import { useState } from 'preact/hooks';
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

    return (
        <figure
            role="img"
            class={cn(css.wrapper, prtClass)}
            {...(alt === '' && { 'aria-hidden': 'true' })}
        >
            <img
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                    console.error('Image failed to load:', img, e);
                    setIsLoading(false);
                }}
                src={img}
                alt={alt}
                loading={isLazy ? 'lazy' : undefined}
                class={cn(css.image, isLoading && css.loading, imgClass)}
                aria-hidden={isLoading}
            />
            {isLoading && (
                <div
                    role="status"
                    aria-label="Фото загружается"
                    class={css.loader}
                >
                    <div
                        aria-hidden="true"
                        class={css.pulse}
                    ></div>
                    <img
                        aria-hidden={!isLoading}
                        src={tinyImg}
                        alt={alt}
                        class={css.placeholder}
                    />
                </div>
            )}
        </figure>
    );
}
