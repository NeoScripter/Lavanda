import { cn } from "@/utils/cn";
import { JSX } from "preact/jsx-runtime";

type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
    type?: string;
};

const Input = ({ class: className, type = "text", ...props }: InputProps) => (
    <input
        type={type}
        data-slot="input"
        class={cn(
            "flex h-9 xl:text-base w-full placeholder:opacity-40 min-w-0 border-b border-foreground/30 bg-transparent py-1 text-sm shadow-xs transition-[color,box-shadow,border] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground",
            "focus-visible:border-foreground focus-visible:border-b-1.5",
            "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
            className,
        )}
        {...props}
    />
);

export default Input;
