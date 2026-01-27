import DarkLogo from '@/assets/images/shared/logo-dark.webp';
import WhiteLogo from '@/assets/images/shared/logo-white.webp';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './Logo.module.scss';

const Logo: FC<
    NodeProps<{ variation?: 'dark' | 'white'; isLink?: boolean }>
> = ({ className, variation = 'dark', isLink = true }) => {
    const LogoIcon = () => (
        <img
            src={variation === 'dark' ? DarkLogo : WhiteLogo}
            alt="Lavanda Kim"
            class={css.image}
        />
    );

    return isLink ? (
        <Link
            href={route('home')}
            prefetch
            class={cn(css.wrapper, className)}
        >
            <LogoIcon />
        </Link>
    ) : (
        <div class={cn(css.wrapper, className)}>
            {' '}
            <LogoIcon />
        </div>
    );
};

export default Logo;
