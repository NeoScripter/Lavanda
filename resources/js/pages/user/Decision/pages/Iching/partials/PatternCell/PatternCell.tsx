import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './PatternCell.module.scss';

const PatternCell: FC<{ pattern: number; className?: string }> = ({
    pattern,
    className,
}) => {
    return (
        <div
            className={cn(
                css.patternFrame,
                {
                    [css.patternFrameSplit]: pattern === 0,
                    [css.patternFrameHidden]: pattern === -1,
                },
                className,
            )}
        >
            <PatternSvg />
            <PatternSvg />
        </div>
    );
};

export default PatternCell;

const PatternSvg = () => {
    return (
        <svg
            width="300"
            height="5"
        >
            <line
                x1="0"
                y1="2.5"
                x2="300"
                y2="2.5"
                stroke="white"
                stroke-linecap="round"
            />
        </svg>
    );
};
