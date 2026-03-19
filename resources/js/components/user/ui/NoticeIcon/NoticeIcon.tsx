import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Info } from 'lucide-preact';
import { FC } from 'preact/compat';
import css from './NoticeIcon.module.scss';

const NoticeIcon: FC<NodeProps> = ({ className }) => {
    return (
        <div
            aria-hidden="true"
            className={cn(css.wrapper, className)}
        >
            <Info />
        </div>
    );
};

export default NoticeIcon;
