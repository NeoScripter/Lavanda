import { cn } from '@/utils/cn';
import { ComponentProps } from 'preact';
import css from './OTPpassword.module.scss';

export default function OTPpassword({
    className,
    type,
    ...props
}: ComponentProps<'input'>) {
    return (
        <input
            data-slot="input"
            type="text"
            inputmode="numeric"
            title="Введите 6-значный код"
            pattern="[0-9]{6}"
            placeholder="000000"
            className={cn(css.input, className)}
            {...props}
        />
    );
}
