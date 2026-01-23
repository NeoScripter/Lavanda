import { Link, router, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';

import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { useAuthModal } from '@/providers/AuthModalContext';
import { TargetedEvent } from 'preact';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import PasswordInput from '../PasswordInput/PasswordInput';
import RadioInput from '../RadioInput/RadioInput';
import css from './Signup.module.scss';

const genders = [
    { label: 'Не выбран', value: null },
    { label: 'Мужчина', value: 'male' },
    { label: 'Женщина', value: 'female' },
];

type SignupForm = {
    name: string;
    email: string;
    birthday: string;
    gender: string | null;
    policy: boolean;
    consent: boolean;
    password: string;
    password_confirmation: string;
};

export default function Signup() {
    const { showLogin, closeModal } = useAuthModal();

    const { data, setData, post, processing, errors, reset } = useForm<
        Required<SignupForm>
    >({
        name: '',
        email: '',
        birthday: '',
        policy: false,
        consent: false,
        gender: null,
        password: '',
        password_confirmation: '',
    });

    const handleClick = () => {
        showLogin();
    };

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        post(route('signup'), {
            preserveScroll: true,
            preserveState: true,

            onSuccess: () => {
                router.flushAll();
                closeModal();
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

                <div>
                    <Label htmlFor="birthday">День рождения</Label>
                    <Input
                        id="birthday"
                        type="date"
                        tabIndex={3}
                        value={data.birthday}
                        onChange={(e) =>
                            setData('birthday', e.currentTarget.value)
                        }
                        className={css.birthdayInput}
                    />
                    <InputError message={errors.birthday} />
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
                        tabIndex={4}
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
                        tabIndex={5}
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
                    tabIndex={6}
                    disabled={processing}
                    type="submit"
                    className="primary-btn"
                >
                    {processing && <LoaderCircle />}
                    Регистрация
                </button>

                <Checkbox
                    checked={data.policy}
                    onChange={(checked) => setData('policy', checked)}
                    name="policy"
                    error={errors.policy}
                >
                    Даю согласие на{' '}
                    <Link
                        className={css.legalLink}
                        href={route('legal', 'policy')}
                    >
                        {' '}
                        обработку персональных данных
                    </Link>
                </Checkbox>

                <Checkbox
                    checked={data.consent}
                    onChange={(checked) => setData('consent', checked)}
                    name="consent"
                    error={errors.consent}
                >
                    Принимаю{' '}
                    <Link
                        className={css.legalLink}
                        href={route('legal', 'consent')}
                    >
                        {' '}
                        политику конфиденциальности
                    </Link>
                </Checkbox>

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
