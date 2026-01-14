import { cn } from '@/utils/cn';
import { useState } from 'preact/hooks';
import css from './BgLoader.module.scss';

type BgLoaderProps = {
    dk: string;
    dkAvif?: string;
    tb: string;
    dkTiny?: string;
    mb: string;
    mbAvif?: string;
    tbTiny?: string;
    tbAvif?: string;
    mbTiny?: string;
    prtClass?: string;
    imgClass?: string;
    alt?: string;
    mbMinWidth?: number;
    tabletMinWidth?: number;
};

export default function BgLoader({
    dk,
    dkAvif,
    tb,
    tbAvif,
    mb,
    mbAvif,
    dkTiny,
    tbTiny,
    mbTiny,
    prtClass,
    imgClass,
    alt = '',
    mbMinWidth = 550,
    tabletMinWidth = 1110,
}: BgLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    const tinyDesktop = dkTiny || dk,
        tinyTablet = tbTiny || tb,
        tinyMobile = mbTiny || mb;

    return (
        <div
            {...(alt === '' && { 'aria-hidden': 'true' })}
            class={cn(css.wrapper, prtClass)}
        >
            {/* Main high-quality images */}
            <picture
                class={cn(css.picture, isLoading && css.pictureLoading)}
            >
                {dkAvif && (
                    <source
                        type="image/avif"
                        srcSet={dkAvif}
                        media={`(min-width: ${tabletMinWidth}px)`}
                    />
                )}
                <source
                    srcSet={dk}
                    media={`(min-width: ${tabletMinWidth}px)`}
                />
                {tbAvif && (
                    <source
                        type="image/avif"
                        srcSet={tbAvif}
                        media={`(min-width: ${mbMinWidth}px)`}
                    />
                )}
                <source
                    srcSet={tb}
                    media={`(min-width: ${mbMinWidth}px)`}
                />
                {mbAvif && <source type="image/avif" srcSet={mbAvif} />}
                <img
                    onLoad={() => setIsLoading(false)}
                    src={mb}
                    alt={alt}
                    loading="lazy"
                    class={cn(css.image, imgClass)}
                />
            </picture>

            <div
                role="status"
                aria-label="Фото загружается"
                class={cn(
                    css.loadingOverlay,
                    !isLoading && css.loadingOverlayHidden,
                )}
            >
                <div
                    {...(alt === '' && { 'aria-hidden': 'true' })}
                    class={cn(isLoading && css.skeleton)}
                ></div>

                <picture
                    aria-hidden="true"
                    class={cn(css.picture, imgClass)}
                >
                    <source
                        srcSet={tinyDesktop}
                        media={`(min-width: ${tabletMinWidth}px)`}
                    />
                    <source
                        srcSet={tinyTablet}
                        media={`(min-width: ${mbMinWidth}px)`}
                    />

                    <img
                        onLoad={() => setIsLoading(false)}
                        src={tinyMobile}
                        alt={alt}
                        class={cn(css.image, imgClass)}
                    />
                </picture>
            </div>
        </div>
    );
}
