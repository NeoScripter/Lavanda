import { isMini } from '@/signals/sidebar-state';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { LucideIcon } from 'lucide-preact';
import { FC } from 'preact/compat';

const SidebarLink: FC<{ icon: LucideIcon; label: string; url: string; className?: string; collapses?: boolean; onClick?: (e: Event) => void }> = ({
    icon: Icon,
    label,
    url,
    className,
    collapses = true,
    onClick,
}) => {
    // const { path } = useLocation();
    // const active = path.startsWith(url);
    const active = false;

    return (
        <li>
            <Link
                onClick={onClick}
                href={url}
                class={cn(
                    'active:bg-sidebar-accent hover:bg-sidebar-accent ease my-0.5 flex items-center rounded-sm transition-colors duration-200',
                    active && 'bg-sidebar-accent',
                    {
                        'mx-auto w-fit items-center justify-center p-2': isMini.value && collapses,
                        'mx-1 gap-2 px-3 py-2': !isMini.value || !collapses,
                    },
                    className,
                )}
            >
                <Icon class="size-4 shrink-0" />
                <span
                    class={cn(
                        'ease overflow-x-clip whitespace-nowrap transition-[max-width] duration-300',
                        !isMini.value || !collapses ? 'max-w-64' : 'max-w-0',
                    )}
                >
                    {label}
                </span>
            </Link>
        </li>
    );
};

export default SidebarLink;
