import { cn } from '@/utils/cn';
import { Eye, EyeOff } from 'lucide-preact';
import { useState } from 'preact/hooks';
import { JSX } from 'preact/jsx-runtime';

type InputProps = JSX.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = ({ class: className, ...props }: InputProps) => {
    const [type, setType] = useState('password');

    const toggleType = () => {
        setType((p) => (p === 'text' ? 'password' : 'text'));
    };

    return (
        <div class={cn('relative h-9', className)}>
            <input
                type={type}
                data-slot="input"
                class={cn(
                    'border-input selection:bg-primary selection:text-primary-foreground file:text-foreground placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                    'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
                )}
                {...props}
            />

            <button type="button" onClick={toggleType}>
                {type === 'text' ? (
                    <Eye class="absolute top-1/2 right-4 size-4 -translate-y-1/2" />
                ) : (
                    <EyeOff class="absolute top-1/2 right-4 size-4 -translate-y-1/2" />
                )}
            </button>
        </div>
    );
};

export default PasswordInput;
