import { useRef, useState } from 'preact/compat';
import css from './Carousel.module.scss';

interface CarouselProps {
    items?: React.ReactNode[];
    cellWidth?: number;
    cellHeight?: number;
}

const Carousel: React.FC<CarouselProps> = ({
    items = Array.from({ length: 42 }, (_, i) => i + 1),
    cellWidth = 190,
    cellHeight = 120,
}) => {
    const [cellCount, setCellCount] = useState(Math.min(9, items.length));
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isHorizontal, setIsHorizontal] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Calculate carousel geometry
    const theta = 360 / cellCount;
    const cellSize = isHorizontal ? cellWidth : cellHeight;
    const radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
    const rotateFn = isHorizontal ? 'rotateY' : 'rotateX';

    const getCarouselStyle = () => {
        const angle = theta * selectedIndex * -1;
        return {
            transform: `translateZ(${-radius}px) ${rotateFn}(${angle}deg)`,
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
            transform: `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`,
            opacity: 1,
            background: getCellColor(index),
        };
    };

    const getCellColor = (index: number) => {
        const hue = (index % 9) * 40;
        return `hsla(${hue}, 100%, 50%, 0.8)`;
    };

    const handlePrevious = () => setSelectedIndex((prev) => prev - 1);
    const handleNext = () => setSelectedIndex((prev) => prev + 1);

    const handleCellCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value);
        setCellCount(newCount);
        if (selectedIndex >= newCount) {
            setSelectedIndex(0);
        }
    };

    return (
        <div className={css.container}>
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
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className={css.controls}>
                <p>
                    <label className={css.label}>
                        Cells: {cellCount}
                        <input
                            type="range"
                            min="3"
                            max={items.length}
                            value={cellCount}
                            onChange={handleCellCountChange}
                            className={css.slider}
                        />
                    </label>
                </p>

                <div className={css.buttons}>
                    <button
                        onClick={handlePrevious}
                        className={css.button}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className={css.button}
                    >
                        Next
                    </button>
                </div>

                <div className={css.orientation}>
                    <strong>Orientation:</strong>
                    <label className={css.radioLabel}>
                        <input
                            type="radio"
                            name="orientation"
                            value="horizontal"
                            checked={isHorizontal}
                            onChange={() => setIsHorizontal(true)}
                        />
                        Horizontal
                    </label>
                    <label className={css.radioLabel}>
                        <input
                            type="radio"
                            name="orientation"
                            value="vertical"
                            checked={!isHorizontal}
                            onChange={() => setIsHorizontal(false)}
                        />
                        Vertical
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
