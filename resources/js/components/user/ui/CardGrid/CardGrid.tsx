import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './CardGrid.module.scss';

const CardGrid: FC<NodeProps> = ({ className, children }) => {
    return <ul className={cn(css.wrapper, className)}>{children}</ul>;
};

export default CardGrid;
