import { Button } from "@/components/auth/form/button";
import Checkbox from "@/components/auth/form/checkbox";
import Input from "@/components/auth/form/input";
import InputError from "@/components/auth/form/input-error";
import Label from "@/components/auth/form/label";
import PasswordInput from "@/components/auth/form/password-input";
import useTrans from "@/hooks/useTrans";
import AuthLayout from "@/layouts/auth/AuthLayout";
import { Head, useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-preact";
import { JSX } from "preact/jsx-runtime";

const Login = () => {
    const t = useTrans();

    const form = useForm({
        email: "test@example.com",
        password: "password",
        remember: false,
    });

    function submit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
        e.preventDefault();

        form.post("/login");
    }

    return (
        <AuthLayout
            title={t("Log in to your account")}
            description={t("Enter your email and password below to log in")}
        >
            <Head title="Вход" />
            <form class="flex flex-col gap-6" onSubmit={submit}>
                <div class="grid gap-6">
                    {/* Email */}
                    <div class="grid gap-2">
                        <Label htmlFor="email">{t('Email address')}</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={form.data.email}
                            onInput={(e) =>
                                form.setData(
                                    "email",
                                    (e.target as HTMLInputElement).value,
                                )
                            }
                            placeholder="email@example.com"
                        />
                        <InputError message={form.errors.email || ""} />
                    </div>

                    {/* Password */}
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label htmlFor="password">{t('Password')}</Label>
                        </div>
                        <PasswordInput
                            id="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={form.data.password}
                            onInput={(e) =>
                                form.setData(
                                    "password",
                                    (e.target as HTMLInputElement).value,
                                )
                            }
                            placeholder={t("Password")}
                        />
                        <InputError message={form.errors.password || ""} />
                    </div>

                    {/* Remember me */}
                    <div class="flex items-center space-x-3">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={form.data.remember}
                            onClick={() =>
                                form.setData("remember", !form.data.remember)
                            }
                            tabIndex={3}
                        />
                        <Label htmlFor="remember">{t('Remember me')}</Label>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        class="mt-4 w-full"
                        tabIndex={4}
                        disabled={form.processing}
                    >
                        {form.processing && (
                            <LoaderCircle class="h-4 w-4 animate-spin" />
                        )}
                        {t('Log in')}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Login;
