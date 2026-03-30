import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './InfoCard.module.scss';

const InfoCard: FC<NodeProps<{ card: unknown }>> = ({ className, card }) => {
    return <li className={cn(css.root, className)}></li>;
};

export default InfoCard;
