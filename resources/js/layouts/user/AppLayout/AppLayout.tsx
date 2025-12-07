import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import '../../../../scss/app.scss';
import css from './AppLayout.module.scss';
import AppHeader from './partials/AppHeader/AppHeader';

const AppLayout: FC<NodeProps> = ({ className, children }) => {
    return (
        <div class={cn('full-bleed-parent', css.wrapper, className)}>
            <AppHeader />

            {children}
        </div>
    );
};

export default AppLayout;
