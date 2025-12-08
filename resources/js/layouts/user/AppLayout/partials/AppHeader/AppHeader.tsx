import BurgerMenu from '@/components/user/nav/BurgerMenu/BurgerMenu';
import Logo from '@/components/user/ui/Logo/Logo';
import { useClickOutside } from '@/hooks/useClickOutside';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './AppHeader.module.scss';
import { useEscapeKey } from '@/hooks/useEscapeKey';

const AppHeader: FC<NodeProps> = ({ className }) => {
    const { show: showMenu, setShow: setShowMenu } = useClickOutside([
        '#header',
    ]);

    useEscapeKey(() => setShowMenu(false));

    const toggleMenu = () => setShowMenu((p) => !p);

    return (
        <header
            id="header"
            class={cn(css.wrapper, className)}
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
            </div>
            <div></div>
        </header>
    );
};

export default AppHeader;
