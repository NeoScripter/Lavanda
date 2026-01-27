import Sidebar from '@/components/admin/ui/sidebar';
import { Toaster } from '@/components/shared/ui/sonner';
import { MD } from '@/lib/constants/breakpoints';
import {
    expand,
    hide,
    isHidden,
    isMini,
    minify,
} from '@/signals/sidebar-state';
import { cn } from '@/utils/cn';
import { PanelLeftIcon } from 'lucide-preact';
import { ComponentChildren } from 'preact';
import { FC } from 'preact/compat';
import styles from '../../../css/admin-layout.module.css';
import '../../../css/app.css';

const AdminLayout: FC<{ children: ComponentChildren; title: string }> = ({
    children,
    title,
}) => {
    const handleHeaderClick = () => {
        if (window.innerWidth >= MD) {
            isMini.value ? expand() : minify();
        } else {
            isHidden.value ? expand() : hide();
        }
    };
    return (
        <main
            class={cn(
                'h-full [min-height:100svh] bg-sidebar text-sm text-sidebar-foreground md:flex md:items-start md:p-2',
                styles.layout,
            )}
        >
            <Sidebar>
                <Sidebar.Header />
                <Sidebar.Nav />
                <Sidebar.Footer />
            </Sidebar>

            <div class="w-full border border-muted bg-background shadow-sm md:rounded-lg">
                <header
                    class={
                        'flex items-center gap-3 border-b border-muted px-4 py-4'
                    }
                >
                    <button
                        onClick={handleHeaderClick}
                        class="rounded-sm p-1.5 transition-colors duration-200 hover:bg-accent"
                    >
                        <PanelLeftIcon class="size-4" />
                    </button>
                    <span>{title}</span>
                </header>
                {children}
            </div>
            <Toaster position="top-center" />
        </main>
    );
};

export default AdminLayout;
