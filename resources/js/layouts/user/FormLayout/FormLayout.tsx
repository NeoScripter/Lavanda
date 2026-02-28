import Logo from '@/components/user/ui/Logo/Logo';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC, memo } from 'preact/compat';
import css from './FormLayout.module.scss';

const MemoLogo = memo(Logo);

const FormLayout: FC<NodeProps<{ heading?: string; intro?: string }>> = ({
    className,
    children,
    heading,
    intro,
}) => {
    return (
        <div class={cn(css.wrapper, className)}>
            <MemoLogo
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
