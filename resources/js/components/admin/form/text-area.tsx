import { cn } from '@/utils/cn';
import { JSX } from 'preact/jsx-runtime';

type TextAreaProps = JSX.InputHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ class: className, ...props }: TextAreaProps) => (
    <textarea
        data-slot="input"
        class={cn(
            'border-foreground/30 selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground flex min-h-30 w-full min-w-0 resize-none border-b bg-transparent py-1 text-sm shadow-xs transition-[color,box-shadow,border] outline-none placeholder:opacity-40 xl:text-base',
            'focus-visible:border-foreground focus-visible:border-b-1.5',
            'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
            className,
        )}
        {...props}
    />
);

export default TextArea;
