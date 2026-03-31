import { cn } from '@/utils/cn';
import { useState } from 'preact/hooks';
import css from './BgLoader.module.scss';

type BgLoaderProps = {
    dk: string;
    dkAvif?: string;
    dk2x?: string;
    dkAvif2x?: string;
    dk3x?: string;
    dkAvif3x?: string;
    dkTiny?: string;
    tb: string;
    tbAvif?: string;
    tb2x?: string;
    tbAvif2x?: string;
    tb3x?: string;
    tbAvif3x?: string;
    tbTiny?: string;
    mb: string;
    mbAvif?: string;
    mb2x?: string;
    mbAvif2x?: string;
    mb3x?: string;
    mbAvif3x?: string;
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
    dk2x,
    dk3x,
    dkAvif2x,
    dkAvif3x,
    tb,
    tbAvif,
    tb2x,
    tb3x,
    tbAvif2x,
    tbAvif3x,
    mb,
    mbAvif,
    mb2x,
    mb3x,
    mbAvif2x,
    mbAvif3x,
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
            <picture class={cn(css.picture, isLoading && css.pictureLoading)}>
                {dkAvif && (
                    <source
                        type="image/avif"
                        srcSet={buildSrcSet([
                            [dkAvif, '1x'],
                            [dkAvif2x, '2x'],
                            [dkAvif3x, '3x'],
                        ])}
                        media={`(min-width: ${tabletMinWidth}px)`}
                    />
                )}

                <source
                    srcSet={buildSrcSet([
                        [dk, '1x'],
                        [dk2x, '2x'],
                        [dk3x, '3x'],
                    ])}
                    media={`(min-width: ${tabletMinWidth}px)`}
                />

                {tbAvif && (
                    <source
                        type="image/avif"
                        srcSet={buildSrcSet([
                            [tbAvif, '1x'],
                            [tbAvif2x, '2x'],
                            [tbAvif3x, '3x'],
                        ])}
                        media={`(min-width: ${mbMinWidth}px)`}
                    />
                )}

                <source
                    srcSet={buildSrcSet([
                        [tb, '1x'],
                        [tb2x, '2x'],
                        [tb3x, '3x'],
                    ])}
                    media={`(min-width: ${mbMinWidth}px)`}
                />

                {mbAvif && (
                    <source
                        type="image/avif"
                        srcSet={buildSrcSet([
                            [mbAvif, '1x'],
                            [mbAvif2x, '2x'],
                            [mbAvif3x, '3x'],
                        ])}
                    />
                )}

                <img
                    onLoad={() => setIsLoading(false)}
                    srcSet={buildSrcSet([
                        [mb, '1x'],
                        [mb2x, '2x'],
                        [mb3x, '3x'],
                    ])}
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

const buildSrcSet = (sources: Array<[string | undefined, string]>) =>
    sources
        .filter(([src]) => !!src)
        .map(([src, dpr]) => `${src} ${dpr}`)
        .join(', ');
