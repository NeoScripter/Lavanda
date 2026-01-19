import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './GameBlock.module.scss';
import Coin from '../Coin';

const GameBlock: FC<NodeProps> = ({ className }) => {
    return (
        <li className={cn(css.wrapper, className)}>
            <PatternCell digit={1} />
            <Coin />
            <PatternCell digit={1} />
        </li>
    );
};

export default GameBlock;

const PatternCell: FC<{ digit: number }> = ({ digit }) => {
    return (
        <div className={css.patternFrame}>
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
