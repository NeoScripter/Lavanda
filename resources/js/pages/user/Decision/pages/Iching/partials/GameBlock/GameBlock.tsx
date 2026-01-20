import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import Coin from '../Coin';
import PatternCell from '../PatternCell/PatternCell';
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
            <PatternCell
                pattern={leftPattern}
                className={css.patternFrame}
            />
            <Coin
                isFlipped={isFlipped}
                delay={coinDelay}
            />
            <PatternCell
                pattern={rightPattern}
                className={css.patternFrame}
            />
        </li>
    );
};

export default GameBlock;
