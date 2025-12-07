import SidebarLink from "@/components/admin/nav/sidebar-link";
import { hide } from "@/signals/sidebar-state";
import { cn } from "@/utils/cn";
import { LogOut, Settings } from "lucide-preact";
import { FC } from "preact/compat";
import Monogram from "./monogram";
import { router, usePage } from "@inertiajs/react";
import { User } from "@/lib/types";
import useTrans from "@/hooks/useTrans";

const AccountMenu: FC<{ id: string; name: string; show: boolean }> = ({
    id,
    name,
    show,
}) => {
    const {
        auth: { user },
    } = usePage<{ auth: { user: User } }>().props;

    const handleLogOut = async (e: Event) => {
        e.preventDefault();

        router.post(route("logout"));
    };
    const t = useTrans();

    return (
        <div
            id={id}
            class={cn(
                "bg-background border-muted divide-muted absolute bottom-13 left-0 z-10 [width:max(100%,14rem)] origin-bottom-right divide-y-1 border shadow-sm transition-[opacity,scale] md:rounded-lg",
                {
                    "pointer-events-none scale-90 opacity-0": !show,
                    "scale-100": show,
                },
            )}
        >
            <ul class="divide-muted divide-y-1">
                <li class="flex items-center gap-3 px-3 py-2">
                    <Monogram firstName={name} />
                    <div>
                        <div class="text-sm font-semibold">{name}</div>
                        <div class="text-muted-foreground text-xs">
                            {user?.email}
                        </div>
                    </div>
                </li>

                <SidebarLink
                    onClick={hide}
                    url="/settings/profile"
                    icon={Settings}
                    label={t("Settings")}
                    collapses={false}
                />
                <SidebarLink
                    onClick={handleLogOut}
                    url="/logout"
                    icon={LogOut}
                    label={t("Log out")}
                    collapses={false}
                />
            </ul>
        </div>
    );
};

export default AccountMenu;
