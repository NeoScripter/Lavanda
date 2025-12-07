import { FC } from "preact/compat";
import { Toaster } from "sonner";
import styles from "../../../css/admin-layout.module.css";
import "../../../css/app.css";
import { cn } from "@/utils/cn";
import { usePage } from "@inertiajs/react";

interface AuthLayoutProps {
    title: string;
    description: string;
    children: preact.ComponentChildren;
    className?: string;
}

export default function AuthLayout({
    title,
    description,
    children,
    className,
    ...props
}: AuthLayoutProps) {
    return (
        <div
            className={cn(
                "bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10",
                styles.layout,
                className,
            )}
            {...props}
        >
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <a
                            href="/"
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                                <AppLogoIcon className="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </a>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium">{title}</h1>
                            <p className="text-muted-foreground text-center text-sm">
                                {description}
                            </p>
                        </div>
                    </div>

                    {children}
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
}

const AppLogoIcon: FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            class={className}
            viewBox="0 0 40 42"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.2 5.63325L8.6 0.855469L0 5.63325V32.1434L16.2 41.1434L32.4 32.1434V23.699L40 19.4767V9.85547L31.4 5.07769L22.8 9.85547V18.2999L17.2 21.411V5.63325ZM38 18.2999L32.4 21.411V15.2545L38 12.1434V18.2999ZM36.9409 10.4439L31.4 13.5221L25.8591 10.4439L31.4 7.36561L36.9409 10.4439ZM24.8 18.2999V12.1434L30.4 15.2545V21.411L24.8 18.2999ZM23.8 20.0323L29.3409 23.1105L16.2 30.411L10.6591 27.3328L23.8 20.0323ZM7.6 27.9212L15.2 32.1434V38.2999L2 30.9666V7.92116L7.6 11.0323V27.9212ZM8.6 9.29991L3.05913 6.22165L8.6 3.14339L14.1409 6.22165L8.6 9.29991ZM30.4 24.8101L17.2 32.1434V38.2999L30.4 30.9666V24.8101ZM9.6 11.0323L15.2 7.92117V22.5221L9.6 25.6333V11.0323Z"
            />
        </svg>
    );
};
