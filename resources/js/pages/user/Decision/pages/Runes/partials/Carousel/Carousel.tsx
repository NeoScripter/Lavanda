import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Rune } from '@/types/model';
import { cn } from '@/utils/cn';
import css from './Carousel.module.scss';
import { useRef } from 'preact/hooks';
import { useCarouselGeometry } from './useCarouselGeometry';

interface CarouselProps {
    items: Rune[];
    selectedIndex: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, selectedIndex }) => {
    const cellCount = items.length;
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
                {items.map((item, index) => {
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
                            {item.front_image && (
                                <LazyImage
                                    prtClass={css.runeWrapper}
                                    imgClass={css.runeImg}
                                    img={item.front_image.path}
                                    tinyImg={item.front_image.tiny_path}
                                    alt={item.front_image.alt}
                                    isLazy={false}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
