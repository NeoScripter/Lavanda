import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Rune } from '@/types/model';
import { useRef, useState } from 'preact/compat';
import css from './Carousel.module.scss';

interface CarouselProps {
    items: Rune[];
    cellWidth?: number;
    cellHeight?: number;
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    cellWidth = 150,
    cellHeight = 120,
}) => {
    const cellCount = items.length;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Calculate carousel geometry
    const theta = 360 / cellCount;
    const radius = Math.round(cellWidth / 2 / Math.tan(Math.PI / cellCount));

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
            width: `${cellWidth}px`,
            height: `${cellHeight}px`,
            lineHeight: `${cellHeight - 4}px`,
            transform: `rotateY(${cellAngle}deg) translateZ(${radius}px)`,
            opacity: 1,
        };
    };

    const handlePrevious = () => setSelectedIndex((prev) => prev - 1);
    const handleNext = () => setSelectedIndex((prev) => prev + 1);

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
                        className={css.cell}
                        style={getCellStyle(index)}
                    >
                        {item.front_image && (
                            <LazyImage
                                prtClass={css.runeWrapper}
                                imgClass={css.runeImg}
                                img={item.front_image.path}
                                tinyImg={item.front_image.tiny_path}
                                alt={item.front_image.alt}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className={css.btnWrapper}>
                <button onClick={handleNext}>next</button>
            </div>
        </div>
    );
};

export default Carousel;
