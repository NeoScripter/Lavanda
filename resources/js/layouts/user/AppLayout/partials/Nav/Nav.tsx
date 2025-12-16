import { navLinks, NavLinkType } from '@/lib/data/navLinks';
import { useLoginModal } from '@/providers/LoginContext';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { ChevronDown, UserCircle } from 'lucide-preact';
import { FC } from 'preact/compat';
import css from './Nav.module.scss';

const Nav: FC<NodeProps> = ({ className }) => {
    const { showLoginModal } = useLoginModal();

    return (
        <nav
            id="navigation"
            class={cn(css.nav, className)}
        >
            <button
                onClick={() => (showLoginModal.value = true)}
                class={css.loginBtn}
            >
                <UserCircle stroke-width={2} />
                Войти
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
    return (
        <li>
            {navLink.type === 'link' ? (
                <Link
                    prefetch
                    class={css.plainNavLink}
                    href={navLink.href}
                >
                    {navLink.label}
                </Link>
            ) : (
                <Popover>
                    {({ open }) => (
                        <>
                            <PopoverButton class={css.popoverBtn}>
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
                                        class={css.popoverLink}
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
