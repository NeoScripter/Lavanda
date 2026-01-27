import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { cn } from '@/utils/cn';
import { range } from '@/utils/range';
import { useRef } from 'preact/hooks';
import { CarouselImage } from '../../CarouselFrame';
import css from './Carousel.module.scss';
import { useCarouselGeometry } from './useCarouselGeometry';

interface CarouselProps {
    img: CarouselImage;
    numItems: number;
    selectedIndex: number;
}

const Carousel: React.FC<CarouselProps> = ({
    numItems,
    img,
    selectedIndex,
}) => {
    const cellCount = numItems;
    const carouselRef = useRef<HTMLDivElement>(null);

    const { getCarouselStyle, getCellStyle, isCellActive } =
        useCarouselGeometry(carouselRef, cellCount, selectedIndex);

    return (
        <div className={css.scene}>
            <div
                ref={carouselRef}
                className={css.carousel}
                style={getCarouselStyle()}
            >
                {range(0, numItems).map((index) => {
                    const { isCurrentSlide, isSecondSlide } =
                        isCellActive(index);

                    return (
                        <div
                            key={index}
                            className={cn(css.cell, {
                                [css.currentSlide]: isCurrentSlide,
                                [css.secondSlide]: isSecondSlide,
                            })}
                            style={getCellStyle(index)}
                        >
                            <LazyImage
                                prtClass={css.runeWrapper}
                                imgClass={css.runeImg}
                                img={img.path}
                                tinyImg={img.tiny_path}
                                alt={img.alt}
                                isLazy={false}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
