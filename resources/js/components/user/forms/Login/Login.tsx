import { Link, router, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';

import { cn } from '@/utils/cn';
import { TargetedEvent } from 'preact';
import { toast } from 'sonner';
import Logo from '../../ui/Logo/Logo';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import PasswordInput from '../PasswordInput/PasswordInput';
import css from './Login.module.scss';

type LoginForm = {
    email: string;
    password: string;
};

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm<
        Required<LoginForm>
    >({
        email: '',
        password: '',
    });

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        post(route('login'), {
            preserveScroll: true,
            onSuccess: () => {
                router.flushAll();
                toast('Добро пожаловать!');
            },
            onFinish: () => reset('password'),
        });
    };

    return (
        <div class={css.wrapper}>
            <Logo className={css.logo} />
            <h2 className={css.title}>Добро пожаловать!</h2>

            <p class={css.notice}>
                Для доступа ко всем разделам ресурса, пожалуйста, войдите в свой
                аккаунт.
            </p>

            <form
                className={css.form}
                onSubmit={submit}
            >
                <div class={css.fieldset}>
                    <Label
                        className="sr-only"
                        htmlFor="email"
                    >
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        autoFocus
                        tabIndex={1}
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) =>
                            setData('email', e.currentTarget.value)
                        }
                        placeholder="email@example.com"
                        className={css.input}
                    />
                    <InputError message={errors.email} />
                </div>

                <div class={css.fieldset}>
                    <Label
                        className="sr-only"
                        htmlFor="password"
                    >
                        Пароль
                    </Label>
                    <PasswordInput
                        id="password"
                        required
                        tabIndex={2}
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) =>
                            setData('password', e.currentTarget.value)
                        }
                        placeholder="Password"
                        className={css.input}
                    />
                    <InputError message={errors.password} />
                </div>

                <button
                    tabIndex={4}
                    disabled={processing}
                    type="submit"
                    class={cn('primary-btn', css.submitBtn)}
                >
                    {processing && <LoaderCircle className={css.loader} />}
                    Войти
                </button>
                <div class={css.signupPrompt}>
                    <span>
                        Если у вас еще нет личного кабинета, пожалуйста,
                        <Link
                            type="button"
                            class={css.signupLink}
                        >
                            {' '}
                            оформите подписку.
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}
