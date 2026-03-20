import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Info } from 'lucide-preact';
import { FC } from 'preact/compat';
import css from './Banner.module.scss';

const Banner: FC<NodeProps> = ({ className, children }) => {
    return (
        <div class={cn(css.wrapper, className)}>
            <div
                aria-hidden="true"
                className={css.icon}
            >
                <Info />
            </div>
            {children}
        </div>
    );
};

export default Banner;
