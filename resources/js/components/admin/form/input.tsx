import { cn } from '@/utils/cn';
import { JSX } from 'preact/jsx-runtime';

type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
    type?: string;
};

const Input = ({ class: className, type = 'text', ...props }: InputProps) => (
    <input
        type={type}
        data-slot="input"
        class={cn(
            'flex h-9 w-full min-w-0 border-b border-foreground/30 bg-transparent py-1 text-sm shadow-xs transition-[color,box-shadow,border] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground placeholder:opacity-40 xl:text-base',
            'focus-visible:border-b-1.5 focus-visible:border-foreground',
            'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
            className,
        )}
        {...props}
    />
);

export default Input;
