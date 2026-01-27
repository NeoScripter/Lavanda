import { cn } from '@/utils/cn';
import { JSX } from 'preact/jsx-runtime';

type LabelProps = JSX.LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ class: className, ...props }: LabelProps) => (
    <label
        data-slot="label"
        class={cn(
            'text-sm leading-none font-medium text-foreground/50 select-none group-focus-within:text-foreground group-hover:text-foreground group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 xl:text-base',
            className,
        )}
        {...props}
    />
);

export default Label;
