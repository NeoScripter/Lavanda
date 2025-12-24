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
import RadioInput from '../RadioInput/RadioInput';

const genders = [
    { label: 'Не выбран', value: null },
    { label: 'Мужчина', value: 'male' },
    { label: 'Женщина', value: 'female' },
];

type SignupForm = {
    name: string;
    email: string;
    gender: string | null;
    password: string;
    password_confirmation: string;
};

export default function Signup() {
    const { showLoginModal } = useLoginModal();
    const { showSignupModal } = useSignupModal();
    const { data, setData, post, processing, errors, reset } = useForm<
        Required<SignupForm>
    >({
        name: '',
        email: '',
        gender: null,
        password: '',
        password_confirmation: '',
    });

    const handleClick = () => {
        showSignupModal.value = false;
        showLoginModal.value = true;
    };

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        post(route('signup'), {
            preserveScroll: true,
            onSuccess: () => {
                router.flushAll();
                toast('Добро пожаловать!');
            },
            onFinish: () => reset('password'),
        });
    };

    return (
        <FormLayout
            heading="Регистрация"
            intro="Пожалуйста, введите ваши данные для создания аккаунта"
        >
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="email">Имя</Label>
                    <Input
                        id="name"
                        type="text"
                        required
                        autoFocus
                        tabIndex={1}
                        autoComplete="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.currentTarget.value)}
                        placeholder="Василий Быков"
                    />
                    <InputError message={errors.name} />
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        autoFocus
                        tabIndex={2}
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) =>
                            setData('email', e.currentTarget.value)
                        }
                        placeholder="email@example.com"
                    />
                    <InputError message={errors.email} />
                </div>

                <RadioInput
                    selected={data.gender}
                    setSelected={(value) => setData('gender', value)}
                    options={genders}
                    label="Выберите пол"
                />

                <div>
                    <Label htmlFor="password">Пароль</Label>
                    <PasswordInput
                        id="password"
                        required
                        tabIndex={3}
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) =>
                            setData('password', e.currentTarget.value)
                        }
                        placeholder="Password"
                    />
                    <InputError message={errors.password} />
                </div>

                <div>
                    <Label htmlFor="password_confirmation">
                        Подтвердите пароль
                    </Label>
                    <PasswordInput
                        id="password_confirmation"
                        required
                        tabIndex={4}
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData(
                                'password_confirmation',
                                e.currentTarget.value,
                            )
                        }
                        placeholder="Подтверждение пароля"
                    />
                    <InputError message={errors.password_confirmation} />
                </div>

                <button
                    tabIndex={4}
                    disabled={processing}
                    type="submit"
                    className="primary-btn"
                >
                    {processing && <LoaderCircle />}
                    Регистрация
                </button>
                <div>
                    <span>
                        Уже зарегистрированы?
                        <button
                            onClick={handleClick}
                            type="button"
                        >
                            Войти
                        </button>
                    </span>
                </div>
            </form>
        </FormLayout>
    );
}
