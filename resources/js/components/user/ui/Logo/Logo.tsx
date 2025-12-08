import DarkLogo from '@/assets/images/shared/logo-dark.webp';
import WhiteLogo from '@/assets/images/shared/logo-white.webp';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './Logo.module.scss';

const Logo: FC<NodeProps<{ variation?: 'dark' | 'white' }>> = ({
    className,
    variation = 'dark',
}) => {
    return (
        <div class={cn(css.wrapper, className)}>
            <img
                src={variation === 'dark' ? DarkLogo : WhiteLogo}
                alt="Lavanda Space"
                class={css.image}
            />
        </div>
    );
};

export default Logo;
