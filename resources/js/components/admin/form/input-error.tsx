import { cn } from '@/utils/cn';
import { JSX } from 'preact/jsx-runtime';

interface InputErrorProps extends JSX.HTMLAttributes<HTMLParagraphElement> {
    message?: string;
}

const InputError = ({
    message,
    class: className = '',
    ...props
}: InputErrorProps) => {
    if (!message) return null;

    return (
        <p
            {...props}
            class={cn('text-xs xl:text-sm font-medium text-red-600 dark:text-red-400', className)}
        >
            {message}
        </p>
    );
};

export default InputError;
