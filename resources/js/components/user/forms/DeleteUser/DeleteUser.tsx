import { cn } from '@/utils/cn';
import { router, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import css from './DeleteUser.module.scss';
import { toast } from 'sonner';

type DeleteUserProps = {
    onCancel: () => void;
};

export default function DeleteUser({ onCancel }: DeleteUserProps) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        destroy(route('user.destroy'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Ваш аккаунт был успешно удален');
                router.flushAll();
            },
        });
    };

    return (
        <form
            onSubmit={handleDelete}
            className={css.deleteForm}
        >
            <div className={css.content}>
                <h2 className={css.title}>Удалить аккаунт?</h2>
                <p className={css.message}>
                    Вы уверены, что хотите удалить свой аккаунт? Это действие
                    необратимо, и все ваши данные будут навсегда удалены.
                </p>
            </div>

            <div className={css.actions}>
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={processing}
                    className={cn(css.cancelBtn)}
                >
                    Отмена
                </button>
                <button
                    type="submit"
                    disabled={processing}
                    className={cn(css.deleteBtn)}
                >
                    {processing && <LoaderCircle className={css.spinner} />}
                    Удалить аккаунт
                </button>
            </div>
        </form>
    );
}
