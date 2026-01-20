import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import Coin from '../Coin';
import css from './GameBlock.module.scss';

const GameBlock: FC<
    NodeProps<{
        leftPattern: number;
        rightPattern: number;
        isFlipped: boolean;
        coinDelay: number;
    }>
> = ({ className, leftPattern, rightPattern, isFlipped, coinDelay }) => {
    return (
        <li className={cn(css.wrapper, className)}>
            <PatternCell pattern={leftPattern} />
            <Coin
                isFlipped={isFlipped}
                delay={coinDelay}
            />
            <PatternCell pattern={rightPattern} />
        </li>
    );
};

export default GameBlock;

const PatternCell: FC<{ pattern: number }> = ({ pattern }) => {
    return (
        <div
            className={cn(css.patternFrame, {
                [css.patternFrameSplit]: pattern === 0,
                [css.patternFrameHidden]: pattern === -1,
            })}
        >
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
                    stroke-width="5"
                    stroke-linecap="round"
                />
            </svg>
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
                    stroke-width="5"
                    stroke-linecap="round"
                />
            </svg>
        </div>
    );
};
