import { cn } from "@/utils/cn";
import { JSX } from "preact/jsx-runtime";

type LinkProps = JSX.IntrinsicElements["a"];

const TextLink = ({ class: className = "", children, ...props }: LinkProps) => (
    <a
        class={cn(
            "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
            className,
        )}
        {...props}
    >
        {children}
    </a>
);

export default TextLink;
