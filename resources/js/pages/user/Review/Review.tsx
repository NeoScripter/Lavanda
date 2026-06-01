import '../../../../scss/app.scss';
import css from './Review.module.scss';

import Banner from '@/components/shared/ui/Banner/Banner';
import InputError from '@/components/user/forms/InputError/InputError';
import Label from '@/components/user/forms/Label/Label';
import TextArea from '@/components/user/forms/TextArea/TextArea';
import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { ValidationError } from '@/lib/types/shared';
import { router } from '@inertiajs/react';
import { useSignal } from '@preact/signals';
import { TargetedEvent } from 'preact';
import { useReducer } from 'preact/hooks';
import { toast } from 'sonner';

export type AnswerType = Record<string, string>;

type FormState = {
    description: string;
};

type FormAction = {
    type: 'SET_DESCRIPTION';
    payload: string;
};

const initialState: FormState = {
    description: '',
};

const reducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload };
        default:
            throw new Error('unexpected action');
    }
};

const Review = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const error = useSignal('');
    const loading = useSignal(false);

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        loading.value = true;

        router.visit(route('review.store'), {
            method: 'post',
            data: state,
            preserveState: true,
            onSuccess: () => {
                loading.value = false;
                toast('Спасибо за ваш отзыв!');
            },
            onError: (err: ValidationError) => {
                console.error(err);

                for (const key in err) {
                    error.value = err[key];
                    break;
                }

                window.scrollTo({
                    top: 1000,
                    behavior: 'smooth',
                });
            },
        });
    };

    return (
        <div className={css.root}>
            <FormLayout
                heading="Отзыв"
                className={css.wrapper}
            >
                <Banner className={css.banner}>
                    <span>
                        Оставьте свой отзыв об использовании ресурса Лаванды
                    </span>
                </Banner>

                <form onSubmit={submit}>
                    <div>
                        <Label htmlFor="email">
                            Напишите пожалуйста текст отзыва, отметив, что вам
                            понравилось и что можно было бы улучшить.
                        </Label>
                        <TextArea
                            id="description"
                            name="description"
                            required
                            value={state.description}
                            onInput={(e) =>
                                dispatch({
                                    type: 'SET_DESCRIPTION',
                                    payload: e.target.value,
                                })
                            }
                            tabIndex={1}
                            placeholder="Мое впечатление о ресурсе..."
                            rows={15}
                        />
                        <InputError />
                    </div>

                    <button
                        type="submit"
                        className="primary-btn"
                    >
                        Отправить
                    </button>
                </form>
                {error.value !== '' && <InputError message={error.value} />}
            </FormLayout>
        </div>
    );
};

export default Review;
