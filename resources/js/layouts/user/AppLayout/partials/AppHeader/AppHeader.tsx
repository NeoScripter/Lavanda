import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './AppHeader.module.scss';

const AppHeader: FC<NodeProps> = ({ className }) => {
    return (
        <header class={cn(css.wrapper, className)}>
            {/* this is header */}
        </header>
    );
};

export default AppHeader;
