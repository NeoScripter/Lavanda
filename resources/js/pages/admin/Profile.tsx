import HeadingSmall from "@/components/admin/ui/heading-small";
import { Button } from "@/components/auth/form/button";
import Input from "@/components/auth/form/input";
import InputError from "@/components/auth/form/input-error";
import Label from "@/components/auth/form/label";
import useTrans from "@/hooks/useTrans";
import AdminLayout from "@/layouts/admin/AdminLayout";
import SettingsLayout from "@/layouts/admin/SettingsLayout";
import { User } from "@/lib/types";
import { Head, useForm, usePage } from "@inertiajs/react";
import { JSX } from "preact/jsx-runtime";
import { toast } from "sonner";

export default function Profile({ status }: { status?: string }) {
    const {
        auth: { user },
    } = usePage<{ auth: { user: User } }>().props;

    const t = useTrans();

    const form = useForm({
        name: user?.name || "",
        email: user?.email || "",
    });

    async function submit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
        e.preventDefault();

        form.patch("/settings/profile", {
            onSuccess: () => {
                toast.success(
                    t("Profile updated successfully"),
                );
            },
            onError: () => {
                toast.error(t("Failed to update profile"));
            },
        });
    }

    return (
        <AdminLayout title={t("Profile settings")}>
            <Head title={t("Изменение данных пользователя")} />
            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title={t("Profile information")}
                        description={t("Update your name and email address")}
                    />

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">{t("Name")}</Label>

                            <Input
                                id="name"
                                class="mt-1 block w-full"
                                value={form.data.name}
                                required
                                autoComplete="name"
                                placeholder={t("Full name")}
                                onInput={(e) =>
                                    form.setData(
                                        "name",
                                        (e.target as HTMLInputElement).value,
                                    )
                                }
                            />

                            <InputError
                                className="mt-2"
                                message={form.errors.name || ""}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">{t("Email address")}</Label>

                            <Input
                                id="email"
                                type="email"
                                class="mt-1 block w-full"
                                value={form.data.email}
                                required
                                autoComplete="username"
                                placeholder={t("Email address")}
                                onInput={(e) =>
                                    form.setData(
                                        "email",
                                        (e.target as HTMLInputElement).value,
                                    )
                                }
                            />

                            <InputError
                                className="mt-2"
                                message={form.errors.email || ""}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={form.processing}>{t("Save")}</Button>

                            {form.recentlySuccessful && (
                                <p className="text-sm text-neutral-600">
                                    {t("Saved")}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </SettingsLayout>
        </AdminLayout>
    );
}
