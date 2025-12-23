import Logo from '@/components/user/ui/Logo/Logo';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './FormLayout.module.scss';

const FormLayout: FC<NodeProps<{ heading?: string; intro?: string }>> = ({
    className,
    children,
    heading,
    intro,
}) => {
    return (
        <div class={cn(css.wrapper, className)}>
            <Logo
                className={css.logo}
                isLink={false}
            />
            {heading && <h2 className={css.title}>{heading}</h2>}

            {intro && <p class={css.notice}>{intro}</p>}

            {children}
        </div>
    );
};

export default FormLayout;
