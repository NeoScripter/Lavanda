import { ComponentProps } from 'preact';
import css from './Label.module.scss';
import { cn } from '@/utils/cn';

function Label({ className, ...props }: ComponentProps<'label'>) {
    return (
        <label
            data-slot="label"
            className={cn(css.label, className)}
            {...props}
        />
    );
}

export default Label;
