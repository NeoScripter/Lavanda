import BackgroundDkTiny from '@/assets/images/random-runes/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/random-runes/background-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Image } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './CarouselFrame.module.scss';
import Carousel from './partials/Carousel';

export type CarouselImage = Pick<Image, 'path' | 'tiny_path' | 'alt'>;

const CarouselFrame: FC<
    NodeProps<{
        numItems: number;
        img: CarouselImage;
        selectedIndex: number;
        animationDuration: number;
    }>
> = ({ className, numItems, img, selectedIndex, animationDuration }) => {
    return (
        <div class={cn(css.carouselContainer, className)}>
            <LazyImage
                prtClass={css.bgParent}
                imgClass={css.bgImage}
                img={BackgroundDk}
                tinyImg={BackgroundDkTiny}
            />

            <div
                style={{
                    '--animation-duration': animationDuration + 'ms',
                }}
                class={css.carousel}
            >
                <Carousel
                    numItems={numItems}
                    img={img}
                    selectedIndex={selectedIndex}
                />
            </div>
        </div>
    );
};

export default CarouselFrame;
