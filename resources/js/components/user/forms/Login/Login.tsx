import { router, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';

import { TargetedEvent } from 'preact';
import { toast } from 'sonner';
import css from './Login.module.scss';
import Label from '../Label/Label';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import PasswordInput from '../PasswordInput/PasswordInput';

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
        <div class={ css.wrapper }>
            <h2 className={ css.title }>Вход</h2>

            <form className={ css.form } onSubmit={submit}>
                <div class={css.layout}>
                    <div class={css.fieldset}>
                        <Label htmlFor="email">Email</Label>
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
                            className={ css.input }
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div>
                        <Label className="sr-only" htmlFor="password">
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
                            className={ css.input }
                        />
                        <InputError message={errors.password} />
                    </div>

                    <button
                        tabIndex={4}
                        disabled={processing}
                        type="submit"
                        class="secondary-btn submit"
                    >
                        {processing && (
                            <LoaderCircle className={ css.loader } />
                        )}
                        Войти
                    </button>
                </div>
                <div class={ css.signupPrompt }>
                    Еще не зарегистрированы?
                    <button
                        type="button"
                        class={ css.signupLink }
                    >
                        Регистрация
                    </button>
                </div>
            </form>
        </div>
    );
}
