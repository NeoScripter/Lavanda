import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { useAuthModal } from '@/providers/AuthModalContext';
import { Flash } from '@/types/flash';
import { router, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import { useState } from 'preact/hooks';
import { toast } from 'sonner';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import OTPpassword from '../OPTInput';
import css from './VerifyOtp.module.scss';

type LoginForm = {
    code: string;
    email: string;
};

export default function VerifyOtp() {
    const { closeModal } = useAuthModal();
    const { flash } = usePage<{ flash: Flash }>().props;
    const [codeResent, setCodeResent] = useState(false);

    const { data, setData, post, processing, errors } = useForm<
        Required<LoginForm>
    >({
        email: flash?.code?.email ?? '',
        code: '',
    });

    const handleClick = () => {
        router.post(route('otp.resend'), {
            preserveScroll: true,
            preserveState: true,
            data: {
                email: data.email,
            },
        });
        toast('Новый код был отправлен вам на почту');
        setCodeResent(true);
    };

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        post(route('otp.verify'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast('Добро пожаловать!');
                router.flushAll();
                closeModal();
            },
        });
    };

    const intro = codeResent
        ? 'Новый код был отправлен вам на почту'
        : 'Введите 6-значный код, отправленный вам на указанную электронную почту';

    return (
        <FormLayout
            heading="Подтвеждение емаила"
            intro={intro}
        >
            <form
                className={css.wrapper}
                onSubmit={submit}
            >
                <div>
                    <Label htmlFor="code">6-значный код</Label>

                    <OTPpassword
                        id="code"
                        required
                        autoFocus
                        tabIndex={1}
                        value={data.code}
                        onChange={(e) => setData('code', e.currentTarget.value)}
                    />
                    <InputError message={errors.code} />
                </div>

                <button
                    tabIndex={4}
                    disabled={processing}
                    type="submit"
                    className="primary-btn"
                >
                    {processing && <LoaderCircle />}
                    Подтвердить
                </button>
                <div>
                    <span>
                        Не пришел код?
                        <button
                            type="button"
                            onClick={handleClick}
                        >
                            {' '}
                            отправить повторно
                        </button>
                    </span>
                </div>
            </form>
        </FormLayout>
    );
}
