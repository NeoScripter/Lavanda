import styles from "../../../css/admin-layout.module.css";
import Sidebar from "@/components/admin/ui/sidebar";
import { Toaster } from "@/components/shared/ui/sonner";
import { MD } from "@/lib/constants/breakpoints";
import {
    expand,
    hide,
    isHidden,
    isMini,
    minify,
} from "@/signals/sidebar-state";
import { cn } from "@/utils/cn";
import { PanelLeftIcon } from "lucide-preact";
import { ComponentChildren } from "preact";
import { FC } from "preact/compat";
import "../../../css/app.css";

const AdminLayout: FC<{ children: ComponentChildren; title: string }> = ({
    children,
    title,
}) => {
    const handleHeaderClick = () => {
        if (window.innerWidth >= MD) {
            isMini.value ? expand() : minify();
        } else {
            isHidden.value ? expand() : hide();
        }
    };
    return (
        <main
            class={cn(
                "text-sidebar-foreground bg-sidebar h-full [min-height:100svh] text-sm md:flex md:items-start md:p-2",
                styles.layout,
            )}
        >
            <Sidebar>
                <Sidebar.Header />
                <Sidebar.Nav />
                <Sidebar.Footer />
            </Sidebar>

            <div class="bg-background border-muted w-full border shadow-sm md:rounded-lg">
                <header
                    class={
                        "border-muted flex items-center gap-3 border-b px-4 py-4"
                    }
                >
                    <button
                        onClick={handleHeaderClick}
                        class="hover:bg-accent rounded-sm p-1.5 transition-colors duration-200"
                    >
                        <PanelLeftIcon class="size-4" />
                    </button>
                    <span>{title}</span>
                </header>
                {children}
            </div>
            <Toaster position="top-center" />
        </main>
    );
};

export default AdminLayout;
