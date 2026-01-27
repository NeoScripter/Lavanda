import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';

const Monogram: FC<{ firstName: string; className?: string }> = ({
    firstName,
    className,
}) => {
    return (
        <span
            class={cn(
                'flex size-8 shrink-0 items-center justify-center rounded-sm bg-sidebar-accent p-1',
                className,
            )}
        >
            {firstName.slice(0, 1)}
        </span>
    );
};

export default Monogram;
