import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'preact';
import css from './InputError.module.scss';

export default function InputError({
    message,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p
            {...props}
            className={cn(css.inputError, className)}
        >
            {message}
        </p>
    ) : null;
}
