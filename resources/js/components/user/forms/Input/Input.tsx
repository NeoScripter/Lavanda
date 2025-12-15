import { cn } from '@/utils/cn';
import { ComponentProps } from 'preact';
import css from './Input.module.scss';

export default function Input({
    className,
    type,
    ...props
}: ComponentProps<'input'>) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(css.input, className)}
            {...props}
        />
    );
}
