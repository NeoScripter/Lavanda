import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { useAuthModal } from '@/providers/AuthModalContext';
import { Flash } from '@/types/flash';
import pluralRu from '@/utils/pluralRu';
import { router, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { toast } from 'sonner';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import OTPpassword from '../OPTInput';
import css from './VerifyOtp.module.scss';

type LoginForm = {
    code: string;
    email: string;
};

const THROTTLE_DURATION_SEC = 20;

export default function VerifyOtp() {
    const { closeModal } = useAuthModal();
    const { flash } = usePage<{ flash: Flash }>().props;
    const [timeLeft, setTimeLeft] = useState<number>(0);

    const { data, setData, post, processing, errors } = useForm<
        Required<LoginForm>
    >({
        email: flash?.code?.email ?? '',
        code: '',
    });

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => Math.max(0, prev - 1));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const handleResend = () => {
        router.post(
            route('otp.resend'),
            {
                email: data.email,
            },
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
        toast('Новый код был отправлен вам на почту');
        setTimeLeft(THROTTLE_DURATION_SEC);
    };

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        post(route('otp.verify'), {
            preserveScroll: true,
            onSuccess: () => {
                toast('Добро пожаловать!');
                router.flushAll();
                closeModal();
            },
        });
    };

    return (
        <FormLayout
            heading="Подтвердите email"
            intro="Введите 6-значный код, отправленный вам на указанную электронную почту"
        >
            <form
                className={css.wrapper}
                onSubmit={submit}
            >
                <div className={css.otpField}>
                    <Label
                        className={css.otpLabel}
                        htmlFor="code"
                    >
                        6-значный код
                    </Label>

                    <OTPpassword
                        id="code"
                        required
                        autoFocus
                        maxLength={6}
                        tabIndex={1}
                        value={data.code}
                        onChange={(e) => setData('code', e.currentTarget.value)}
                    />
                    <InputError message={errors.code} />
                </div>

                {timeLeft > 0 && (
                    <div className={css.timeNotice}>
                        {`Новый код был отправлен вам на почту. Повторно отправить код вы сможете через ${timeLeft} ${pluralRu(timeLeft, 'секунда', 'секунды', 'секунд')}`}
                    </div>
                )}

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
                            disabled={timeLeft > 0}
                            onClick={handleResend}
                            className={css.resendBtn}
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
