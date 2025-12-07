import { appearance, prefersDark } from "@/signals/appearance";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster({ ...props }: ToasterProps) {
    const theme =
        appearance.value !== "system"
            ? appearance.value
            : prefersDark()
              ? "dark"
              : "light";

    return (
        <Sonner
            theme={theme}
            className="toaster group"
            style={{
                "--normal-bg": "var(--popover)",
                "--normal-text": "var(--popover-foreground)",
                "--normal-border": "var(--border)",
            }}
            {...props}
        />
    );
}
