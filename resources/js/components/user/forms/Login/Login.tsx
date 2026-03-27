import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';

import Banner from '@/components/shared/ui/Banner/Banner';
import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { useAuthModal } from '@/providers/AuthModalContext';
import { cn } from '@/utils/cn';
import { TargetedEvent } from 'preact';
import AuthBtn from '../../ui/AuthBtn';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import Google from '@/assets/images/shared/google-logo.webp'
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
            preserveState: true,
            onSuccess: () => {
                showOtp();
            },
        });
    };

    return (
        <FormLayout
            heading="Добро пожаловать!"
            intro="Для доступа ко всем разделам ресурса, пожалуйста, войдите."
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
                    <button
                        tabIndex={4}
                        disabled={processing}
                        type="submit"
                        className="primary-btn"
                    >
                        {processing && <LoaderCircle />}
                        Войти
                    </button>

                    <AuthBtn
                        className={css.googleAuthBtn}
                        href="/auth/redirect"
                    >
                        <figure aria-hidden="true">
                            <img src={Google} alt="" />
                        </figure>
                        Войти через Google
                    </AuthBtn>
                </div>

                <Banner className={css.banner}>
                    <span>
                        Впервые на сайте? Пройдите
                        <button
                            type="button"
                            onClick={handleClick}
                        >
                            экспресс регистрацию
                        </button>{' '}
                        за 1 минуту и получите полный доступ ко всем разделам на
                        24 часа
                    </span>

                    <button
                        type="button"
                        onClick={handleClick}
                        class={cn('secondary-btn', css.signupBtn)}
                    >
                        Зарегистрироваться
                    </button>
                </Banner>
            </form>
        </FormLayout>
    );
}
