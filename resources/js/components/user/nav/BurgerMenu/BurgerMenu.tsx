import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './BurgerMenu.module.scss';

const BurgerMenu: FC<{
    onClick: () => void;
    show: boolean;
    className?: string;
}> = ({ onClick, show, className }) => {
    return (
        <button
            onClick={onClick}
            id="burger-menu"
            class={cn(css.wrapper, className, { open: show })}
        >
            <svg
                class={css.icon}
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    class={cn(
                        css.line,
                        show
                            ? cn(css.burgerOpen, css.lineTopOpen)
                            : cn(css.burgerClose, css.lineTop),
                    )}
                    d="M0 18h36"
                />
                <path
                    class={cn(css.lineMiddle, show && css.hidden)}
                    d="M0 18h36"
                />
                <path
                    class={cn(
                        css.line,
                        show
                            ? cn(css.lineBottomOpen, css.burgerOpen)
                            : cn(css.burgerClose, css.lineBottom),
                    )}
                    d="M0 18h36"
                />
            </svg>
        </button>
    );
};

export default BurgerMenu;
