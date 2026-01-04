import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './CardDeck.module.scss';

const CardDeck: FC<NodeProps<{ size: number }>> = ({
    className,
    size = 1,
    children,
}) => {
    return (
        <ul
            className={cn(css.wrapper, className)}
            style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
        >
            {children}
        </ul>
    );
};

export default CardDeck;
