import BurgerMenu from '@/components/user/nav/BurgerMenu/BurgerMenu';
import Logo from '@/components/user/ui/Logo/Logo';
import { useClickOutside } from '@/hooks/useClickOutside';
import useElementHeight from '@/hooks/useElementHeight';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useLoginModal } from '@/providers/LoginContext';
import { Auth } from '@/types/auth';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { router, usePage } from '@inertiajs/react';
import { CircleUser } from 'lucide-preact';
import { FC, useEffect } from 'preact/compat';
import Nav from '../Nav/Nav';
import css from './AppHeader.module.scss';

const AppHeader: FC<NodeProps> = ({ className }) => {
    const {
        auth: { user },
    } = usePage<{ auth: Auth }>().props;
    const { showLoginModal } = useLoginModal();
    const { show: showMenu, setShow: setShowMenu } = useClickOutside([
        '#header',
    ]);

    const isDesktop = useMediaQuery('(min-width: 1110px)');
    const isMobile = useMediaQuery('(max-width: 569px)');

    useEscapeKey(() => setShowMenu(false));

    const { actualHeight, ref } = useElementHeight();

    const toggleMenu = () => setShowMenu((p) => !p);

    useEffect(() => {
        if (!isMobile) {
            document.documentElement.style.overflowY = 'auto';
            return;
        }

        if (showMenu) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
        return () => {
            document.documentElement.style.overflowY = 'auto';
        };
    }, [isMobile, showMenu]);

    const handleLoginClick = () => {
        if (user != null) {
            router.visit(route('account'));
        } else {
            showLoginModal.value = true;
        }
    };

    return (
        <header
            id="header"
            class={cn(css.wrapper, showMenu && css.shadow, className)}
            style={{ '--height': `${actualHeight.value}px` }}
            ref={ref}
        >
            <div class={css.topBar}>
                <Logo />

                <BurgerMenu
                    show={showMenu}
                    onClick={toggleMenu}
                    aria-label={showMenu ? 'Закрыть меню' : 'Открыть меню'}
                    aria-expanded={showMenu}
                    className={css.burger}
                />

                {isDesktop && <Nav className={cn(css.dkNav)} />}

                <div class={css.loginBtnWrapper}>
                    <button
                        onClick={handleLoginClick}
                        class={cn(css.loginBtn, 'primary-btn')}
                    >
                        <CircleUser />
                        {!user ? 'Войти' : user.name}
                    </button>
                </div>
            </div>

            {!isDesktop && (
                <Nav
                    className={cn(css.mbNav, {
                        [css.navOpen]: showMenu,
                        [css.navClosed]: !showMenu,
                    })}
                />
            )}
        </header>
    );
};

export default AppHeader;
