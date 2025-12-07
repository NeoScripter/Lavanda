import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './AppHeader.module.scss';

const AppHeader: FC<NodeProps> = ({ className }) => {
    return (
        <header class={cn('', css.wrapper, className)}>
            this is app header
            <h1>This is tet</h1>
            <h2>This is tet</h2>
            <button class="primary-btn">this is a button </button>
        </header>
    );
};

export default AppHeader;
