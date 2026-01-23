import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './Paywall.module.scss';

const Paywall: FC<NodeProps> = ({ className }) => {
    return (
        <div className={cn(css.wrapper, className)}>No access, sorry :( </div>
    );
};

export default Paywall;
