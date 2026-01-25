import { router, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';

import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { cn } from '@/utils/cn';
import { TargetedEvent } from 'preact';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import RadioInput from '../RadioInput/RadioInput';
import css from './UpdateUser.module.scss';

const genders = [
    { label: 'Не выбран', value: null },
    { label: 'Мужчина', value: 'male' },
    { label: 'Женщина', value: 'female' },
];

type UpdateUserForm = {
    name: string;
    email: string;
    birthday: string;
    gender: string | null;
};

export default function UpdateUser() {
    const { data, setData, post, processing, errors, reset } = useForm<
        Required<UpdateUserForm>
    >({
        name: '',
        email: '',
        birthday: '',
        gender: null,
    });

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        post(route('signup'), {
            preserveScroll: true,
            preserveState: true,

            onSuccess: () => {
                router.flushAll();
            },
        });
    };

    return (
        <FormLayout className={css.formLayout}>
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

                <RadioInput
                    selected={data.gender}
                    setSelected={(value) => setData('gender', value)}
                    options={genders}
                    label="Выберите пол"
                />
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

                <button
                    tabIndex={6}
                    disabled={processing}
                    type="submit"
                    className={cn('primary-btn', css.submitBtn)}
                >
                    {processing && <LoaderCircle />}
                    Сохранить
                </button>
            </form>
        </FormLayout>
    );
}
