import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { createPortal, FC } from 'preact/compat';
import '../../../../scss/app.scss';
import css from './AppLayout.module.scss';
import AppFooter from './partials/AppFooter/AppFooter';
import AppHeader from './partials/AppHeader/AppHeader';

const AppLayout: FC<NodeProps> = ({ className, children }) => {
    return (
        <div class={cn('full-bleed-parent', css.wrapper, className)}>
            {createPortal(
                <AppHeader />,
                document.getElementById('portal-container')!,
            )}

            {children}

            <AppFooter />
        </div>
    );
};

export default AppLayout;
