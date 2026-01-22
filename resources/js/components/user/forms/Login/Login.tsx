import { router, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';

import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { useLoginModal } from '@/providers/LoginContext';
import { useSignupModal } from '@/providers/SignupContext';
import { TargetedEvent } from 'preact';
import { toast } from 'sonner';
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
    const { setShowLoginModal } = useLoginModal();
    const { setShowSignupModal } = useSignupModal();

    const { data, setData, post, processing, errors, reset } = useForm<
        Required<LoginForm>
    >({
        email: '',
        password: '',
    });

    const handleClick = () => {
        setShowSignupModal(true);
        setShowLoginModal(false);
    };

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        post(route('login'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                router.flushAll();
                setShowLoginModal(false);
                toast('Добро пожаловать!');
            },
            onFinish: () => reset('password'),
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

                <div>
                    <Label htmlFor="password">Пароль</Label>
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
                    />
                    <InputError message={errors.password} />
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
