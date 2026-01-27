import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './Error.module.scss';

const Error: FC<{ onRetry: () => void; error: Error | null }> = ({
    onRetry,
    error,
}) => {
    if (!error) return null;

    return (
        <div className={css.wrapper}>
            <h3 className={css.heading}>
                К сожалению, произошла непредвиденная ошибка
            </h3>
            <button
                className={cn('primary-btn', css.retryBtn)}
                onClick={onRetry}
            >
                Обновить
            </button>
        </div>
    );
};

export default Error;
