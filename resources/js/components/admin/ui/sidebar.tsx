import SidebarLink from '@/components/admin/nav/sidebar-link';
import AppLogo from '@/components/admin/ui/app-logo';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import useTrans from '@/hooks/useTrans';
import { User } from '@/lib/types';
import { hide, isHidden, isMini, isWide } from '@/signals/sidebar-state';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { ChevronsUpDown, LayoutGrid } from 'lucide-preact';
import { ComponentChildren } from 'preact';
import { useId } from 'preact/hooks';
import AccountMenu from './account-menu';
import Monogram from './monogram';

function Sidebar({ children }: { children: ComponentChildren }) {
    const id = useId();

    const handleClick = (e: MouseEvent) => {
        const el = e.target as HTMLElement | null;
        if (!el || el.id !== id) return;

        hide();
    };

    return (
        <div
            id={id}
            onClick={handleClick}
            class={cn(
                'fixed inset-0 z-20 bg-black/75 transition-all md:static md:w-full md:shrink-0 md:self-stretch md:bg-sidebar',
                {
                    'pointer-events-none bg-transparent': isHidden.value,
                    'transition-colors md:max-w-62': isWide.value,
                    'md:max-w-14': isMini.value,
                },
            )}
        >
            <aside
                class={cn(
                    'inset-y-0 left-0 flex min-h-full w-full max-w-72 flex-col bg-sidebar px-3 py-2 transition-all md:fixed md:max-w-62',
                    {
                        '-translate-x-full': isHidden.value,
                        'translate-x-0 md:max-w-62': isWide.value,
                        'md:max-w-16': isMini.value,
                    },
                )}
            >
                {children}
            </aside>
        </div>
    );
}

export default Sidebar;

const SidebarHeader = () => {
    const t = useTrans();

    return (
        <header
            class={cn('flex items-center', {
                'm-2 gap-4': !isMini.value,
                'mx-auto my-2': isMini.value,
            })}
        >
            <div
                class={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-sm bg-sidebar-primary text-sidebar-primary-foreground',
                )}
            >
                <AppLogo />
            </div>
            <div
                class={cn(
                    'ease overflow-x-clip font-medium whitespace-nowrap transition-[max-width] duration-300',
                    !isMini.value ? 'max-w-64' : 'max-w-0',
                )}
            >
                {t('Admin panel')}
            </div>
        </header>
    );
};

const SidebarNav = () => {
    const t = useTrans();

    return (
        <div>
            {!isMini.value && (
                <div class="mx-2 pt-4 pb-1.5 text-xs text-sidebar-foreground/70">
                    {t('Platform')}
                </div>
            )}

            <ul class="text-sidebar-accent-foreground/70">
                <SidebarLink
                    url="/dashboard"
                    icon={LayoutGrid}
                    label={t('Dashboard')}
                />
                <SidebarLink
                    url="/dashboard"
                    icon={LayoutGrid}
                    label={t('Home')}
                />
            </ul>
        </div>
    );
};

const SidebarFooter = () => {
    const id = useId();
    const menuId = `${id}-menu`,
        btnId = `${id}-btn`;
    const { show, setShow } = useClickOutside([`#${menuId}`, `#${btnId}`]);
    const {
        auth: { user },
    } = usePage<{ auth: { user: User } }>().props;

    useEscapeKey(() => setShow(false));

    const handleShowClick = () => {
        setShow((o) => !o);
    };

    return (
        <footer class="relative mt-auto mb-2">
            <AccountMenu
                id={menuId}
                name={user?.name || ''}
                show={show}
            />

            <button
                id={btnId}
                onClick={handleShowClick}
                class={cn(
                    'ease flex items-center gap-2 rounded-sm text-sidebar-foreground transition-all duration-200 hover:bg-sidebar-accent active:bg-sidebar-accent',
                    {
                        'w-full px-3 py-2': isWide.value,
                        'w-fit': isMini.value,
                    },
                )}
            >
                <Monogram firstName={user?.name || ''} />

                {isWide.value && (
                    <>
                        <span>{user?.name || ''}</span>
                        <ChevronsUpDown class="ml-auto size-4" />
                    </>
                )}
            </button>
        </footer>
    );
};

Sidebar.Header = SidebarHeader;
Sidebar.Nav = SidebarNav;
Sidebar.Footer = SidebarFooter;
