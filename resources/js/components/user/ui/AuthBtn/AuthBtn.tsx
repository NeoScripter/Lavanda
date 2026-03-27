import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { AnchorHTMLAttributes } from 'preact';
import { FC } from 'preact/compat';
import css from './AuthBtn.module.scss';

const AuthBtn: FC<NodeProps & AnchorHTMLAttributes> = ({
    href,
    className,
    children,
}) => {
    return (
        <a
            href={href}
            className={cn(css.wrapper, className)}
        >
            {children}
        </a>
    );
};

export default AuthBtn;
