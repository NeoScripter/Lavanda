import BurgerMenu from '@/components/user/nav/BurgerMenu/BurgerMenu';
import Logo from '@/components/user/ui/Logo/Logo';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useLoginModal } from '@/providers/LoginContext';
import { Auth } from '@/types/auth';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { router, usePage } from '@inertiajs/react';
import { CircleUser } from 'lucide-preact';
import { FC } from 'preact/compat';
import Nav from '../Nav/Nav';
import css from './AppHeader.module.scss';

const AppHeader: FC<NodeProps> = ({ className }) => {
    const { show: showMenu, setShow: setShowMenu } = useClickOutside([
        '#header',
    ]);

    const {
        auth: { user },
    } = usePage<{ auth: Auth }>().props;
    const { showLoginModal } = useLoginModal();

    const isDesktop = useMediaQuery('(min-width: 1110px)');

    useEscapeKey(() => setShowMenu(false));

    const toggleMenu = () => setShowMenu((p) => !p);

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
