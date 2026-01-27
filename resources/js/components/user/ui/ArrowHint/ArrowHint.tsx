import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { MoveDown } from 'lucide-preact';
import { FC } from 'preact/compat';
import css from './ArrowHint.module.scss';

const ArrowHint: FC<NodeProps<{ show: boolean }>> = ({ className, show }) => {
    if (!show) return null;

    return (
        <div className={cn(css.arrowHint, className)}>
            Расшифровка
            <MoveDown className={css.arrowHintIcon} />
        </div>
    );
};

export default ArrowHint;
