import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';

import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { useAuthModal } from '@/providers/AuthModalContext';
import { TargetedEvent } from 'preact';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import css from './Login.module.scss';

type LoginForm = {
    email: string;
};

export default function Login() {
    const { showOtp, showSignup } = useAuthModal();

    const { data, setData, post, processing, errors } = useForm<
        Required<LoginForm>
    >({
        email: '',
    });

    const handleClick = () => {
        showSignup();
    };

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        post(route('otp.send'), {
            preserveScroll: true,
            onSuccess: () => {
                showOtp();
            },
        });
    };

    return (
        <FormLayout
            heading="Добро пожаловать!"
            intro="Для доступа ко всем разделам ресурса, пожалуйста, войдите в свой аккаунт."
        >
            <form
                className={css.wrapper}
                onSubmit={submit}
            >
                <div>
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
                    />
                    <InputError message={errors.email} />
                </div>

                <button
                    tabIndex={4}
                    disabled={processing}
                    type="submit"
                    className="primary-btn"
                >
                    {processing && <LoaderCircle />}
                    Войти
                </button>
                <div>
                    <span>
                        Если у вас еще нет личного кабинета, пожалуйста,
                        <button
                            type="button"
                            onClick={handleClick}
                        >
                            {' '}
                            зарегистрируйтесь.
                        </button>
                    </span>
                </div>
            </form>
        </FormLayout>
    );
}
