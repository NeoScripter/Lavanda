import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';

const Monogram: FC<{ firstName: string; className?: string }> = ({ firstName, className }) => {
    return (
        <span class={cn('bg-sidebar-accent flex size-8 shrink-0 items-center justify-center rounded-sm p-1', className)}>
            {firstName.slice(0, 1)}
        </span>
    );
};

export default Monogram;
