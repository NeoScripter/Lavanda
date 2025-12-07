import { cn } from "@/utils/cn";
import { CheckIcon } from "lucide-preact";
import { JSX } from "preact/jsx-runtime";

type CheckboxProps = Omit<JSX.IntrinsicElements["input"], "type"> & {
    checked?: boolean;
};

const Checkbox = ({ class: className, checked, ...props }: CheckboxProps) => (
    <label
        class={cn(
            "relative inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input shadow-xs transition-shadow outline-none",
            "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
            "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
            "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
            checked && "border-primary bg-primary text-primary-foreground",
            className,
        )}
    >
        <input
            type="checkbox"
            class="peer sr-only"
            checked={checked}
            {...props}
        />
        <span class="flex items-center justify-center text-current transition-none">
            {checked && <CheckIcon class="size-3.5" />}
        </span>
    </label>
);

export default Checkbox;
