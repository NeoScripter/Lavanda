import { Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';

import Google from '@/assets/images/shared/google-logo.webp';
import Banner from '@/components/shared/ui/Banner/Banner';
import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { useAuthModal } from '@/providers/AuthModalContext';
import { TargetedEvent } from 'preact';
import AuthBtn from '../../ui/AuthBtn';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
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
};

export default function Signup() {
    const { showLogin, showOtp } = useAuthModal();

    const { data, setData, post, processing, errors } = useForm<
        Required<SignupForm>
    >({
        name: '',
        email: '',
        birthday: '',
        policy: false,
        consent: false,
        gender: null,
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
                showOtp();
            },
        });
    };

    return (
        <FormLayout heading="Регистрация">
            <Banner className={css.banner}>
                <span>
                    Пройдите экспресс регистрацию за 1 минуту и получите полный
                    доступ ко всем разделам на 24 часа
                </span>
            </Banner>

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
                    <button
                        tabIndex={6}
                        disabled={processing}
                        type="submit"
                        className="primary-btn"
                    >
                        {processing && <LoaderCircle />}
                        Регистрация
                    </button>
                    <AuthBtn
                        className={css.googleAuthBtn}
                        href="/auth/redirect"
                    >
                        <figure aria-hidden="true">
                            <img
                                src={Google}
                                alt=""
                            />
                        </figure>
                        Войти через Google
                    </AuthBtn>
                </div>

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
            </form>
        </FormLayout>
    );
}
