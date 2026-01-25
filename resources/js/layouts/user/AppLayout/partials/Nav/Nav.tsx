import { navLinks, NavLinkType } from '@/lib/data/navLinks';
import { Auth } from '@/types/auth';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import isCurrentPage from '@/utils/isCurrentPage';
import shortenUserName from '@/utils/shortenUserName';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, UserCircle } from 'lucide-preact';
import { FC } from 'preact/compat';
import css from './Nav.module.scss';

const Nav: FC<NodeProps<{ handleRouterClick: () => void }>> = ({
    className,
    handleRouterClick,
}) => {
    const {
        auth: { user },
    } = usePage<{ auth: Auth }>().props;

    return (
        <nav
            id="navigation"
            class={cn(css.nav, className)}
        >
            <button
                onClick={handleRouterClick}
                class={css.loginBtn}
            >
                <UserCircle stroke-width={2} />
                {!user ? 'Войти' : shortenUserName(user.name)}
            </button>

            <ul class={css.navLinks}>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        navLink={link}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Nav;

const NavLink: FC<{ navLink: NavLinkType }> = ({ navLink }) => {
    const currentPageUrl = usePage().url;
    const isCurrent = isCurrentPage(currentPageUrl, navLink);

    return (
        <li className={css.navLinkWrapper}>
            {navLink.type === 'link' ? (
                <Link
                    prefetch
                    class={cn(css.plainNavLink, isCurrent && css.currentPage)}
                    href={navLink.href}
                    aria-current={isCurrent ? 'page' : undefined}
                >
                    {navLink.label}
                </Link>
            ) : (
                <Popover>
                    {({ open }) => (
                        <>
                            <PopoverButton
                                class={cn(
                                    css.popoverBtn,
                                    isCurrent && css.currentPage,
                                )}
                            >
                                {navLink.label}
                                <ChevronDown
                                    class={cn(
                                        css.chevron,
                                        open && css.chevronFlipped,
                                    )}
                                    stroke-width={2.5}
                                />
                            </PopoverButton>
                            <PopoverPanel
                                anchor="bottom"
                                transition
                                className={cn(css.popoverPanel)}
                            >
                                {navLink.links.map((link) => (
                                    <Link
                                        prefetch
                                        key={link.id}
                                        href={link.href}
                                        class={cn(
                                            css.popoverLink,
                                            // isCurrent && css.currentPage,
                                        )}
                                        // aria-current={
                                        //     isCurrent ? 'page' : undefined
                                        // }
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </PopoverPanel>
                        </>
                    )}
                </Popover>
            )}
        </li>
    );
};
