import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Rune } from '@/types/model';
import { cn } from '@/utils/cn';
import { useEffect, useMemo, useRef, useState } from 'preact/compat';
import css from './Carousel.module.scss';

interface CarouselProps {
    items: Rune[];
    selectedIndex: number;
}

const THROTTLE_DELAY = 75;

const Carousel: React.FC<CarouselProps> = ({ items, selectedIndex }) => {
    const cellCount = items.length;
    const carouselRef = useRef<HTMLDivElement>(null);
    const throttleRef = useRef<number>(0);
    const [elementSize, setElementSize] = useState(107);
    const isTablet = useMediaQuery('(min-width: 550px)');
    const isLaptop = useMediaQuery('(min-width: 1110px)');
    const isDesktop = useMediaQuery('(min-width: 1650px)');

    const config = useMemo(() => {
        if (isDesktop) return { baseSize: 145, refWidth: 825, itemGap: 1.65 };
        if (isLaptop) return { baseSize: 107, refWidth: 652, itemGap: 1.6 };
        if (isTablet) return { baseSize: 107, refWidth: 713, itemGap: 1.45 };
        return { baseSize: 50, refWidth: 334, itemGap: 1.5 };
    }, [isDesktop, isLaptop, isTablet]);

    useEffect(() => {
        const calculateSize = () => {
            const now = Date.now();
            if (!carouselRef.current || now - throttleRef.current <= THROTTLE_DELAY) return;

            throttleRef.current = now;
            const actualWidth = carouselRef.current.offsetWidth;
            const scaledSize =
                (actualWidth / config.refWidth) * config.baseSize;
            setElementSize(scaledSize);
        };

        calculateSize();
        window.addEventListener('resize', calculateSize);
        return () => window.removeEventListener('resize', calculateSize);
    }, [config]);

    const theta = 360 / cellCount;
    const radius = Math.round(
        elementSize / config.itemGap / Math.tan(Math.PI / cellCount),
    );

    const getCarouselStyle = () => {
        const angle = theta * selectedIndex * -1;
        return {
            transform: `translateZ(${-radius}px) rotateY(${angle}deg)`,
        };
    };

    const getCellStyle = (index: number) => {
        if (index >= cellCount) {
            return {
                transform: 'none',
                opacity: 0,
            };
        }

        const cellAngle = theta * index;
        return {
            width: `${elementSize}px`,
            transform: `rotateY(${cellAngle}deg) translateZ(${radius}px)`,
            opacity: 1,
        };
    };

    return (
        <div className={css.scene}>
            <div
                ref={carouselRef}
                className={css.carousel}
                style={getCarouselStyle()}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={cn(css.cell, {
                            [css.currentSlide]:
                                selectedIndex % cellCount === index,
                            [css.secondSlide]:
                                (selectedIndex + 1) % cellCount === index ||
                                (selectedIndex - 1 + cellCount) % cellCount ===
                                    index,
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
                ))}
            </div>
        </div>
    );
};

export default Carousel;
