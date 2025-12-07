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
            "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
            "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
            className,
        )}
        {...props}
    />
);

export default Input;
