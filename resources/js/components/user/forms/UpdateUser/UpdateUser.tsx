import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { cn } from '@/utils/cn';
import { router, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import { toast } from 'sonner';
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

type User = {
    id: number;
    name: string;
    email: string;
    birthday: string | null;
    gender: 'male' | 'female' | null;
};

type PageProps = {
    auth: {
        user: User;
    };
};

export default function UpdateUser() {
    const { auth } = usePage<PageProps>().props;
    const user = auth.user;

    const { data, setData, post, isDirty, processing, errors } = useForm<
        Required<UpdateUserForm>
    >({
        name: user.name || '',
        email: user.email || '',
        birthday: user.birthday || '',
        gender: user.gender || null,
    });

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        if (!isDirty) return;

        post(route('user.update'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                router.flushAll();
                toast.success('Профайл успешно обновлен!');
            },
        });
    };

    return (
        <FormLayout className={css.formLayout}>
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="name">Имя</Label>
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
                    disabled={processing || !isDirty}
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
