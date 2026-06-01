import { NodeProps } from '@/types/nodeProps';
import { FC, useReducer } from 'preact/compat';
import css from './Step5.module.scss';

import Checkbox from '@/components/user/forms/Checkbox/Checkbox';
import InputError from '@/components/user/forms/InputError/InputError';
import { ValidationError } from '@/lib/types/shared';
import { router } from '@inertiajs/react';
import { useSignal } from '@preact/signals';
import { ArrowLeft, ArrowRight } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import { AnswerType, StepProps } from '../../Survey';

type FormState = {
    policy: boolean;
    consent: boolean;
    acknowledgement: boolean;
};

type FormAction = {
    type: 'SET_CONSENT' | 'SET_POLICY' | 'SET_ACKNOWLEDGEMENT';
    payload: boolean;
};

const initialState: FormState = {
    policy: false,
    consent: false,
    acknowledgement: false,
};

const reducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
        case 'SET_CONSENT':
            return { ...state, consent: action.payload };
        case 'SET_POLICY':
            return { ...state, policy: action.payload };
        case 'SET_ACKNOWLEDGEMENT':
            return { ...state, acknowledgement: action.payload };
        default:
            throw new Error('unexpected action');
    }
};

const Step5: FC<NodeProps<StepProps>> = ({ answers, popState }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const error = useSignal('');

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const reduced: AnswerType = {};

        for (const obj of answers.value) {
            for (const key in obj) {
                reduced[key] = obj[key];
            }
        }

        router.visit(route('survey.store'), {
            method: 'post',
            data: reduced,
            preserveState: true,
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

    const currentStep = answers.value.length + 1;

    return (
        <form onSubmit={submit}>
            <Checkbox
                checked={state.acknowledgement}
                onChange={(checked) =>
                    dispatch({ type: 'SET_ACKNOWLEDGEMENT', payload: checked })
                }
                name="acknowledgement"
            >
                Я согласен(а) получить разбор бесплатно и обязуюсь оставить
                честный отзыв.
            </Checkbox>
            <Checkbox
                checked={state.policy}
                onChange={(checked) =>
                    dispatch({ type: 'SET_POLICY', payload: checked })
                }
                name="policy"
            >
                Даю согласие на{' '}
                <a
                    className={css.legalLink}
                    href={route('legal', 'policy')}
                    target="_blank"
                >
                    {' '}
                    обработку персональных данных
                </a>
            </Checkbox>

            <Checkbox
                checked={state.consent}
                onChange={(checked) =>
                    dispatch({ type: 'SET_CONSENT', payload: checked })
                }
                name="consent"
            >
                Принимаю{' '}
                <a
                    className={css.legalLink}
                    href={route('legal', 'consent')}
                    target="_blank"
                >
                    {' '}
                    политику конфиденциальности
                </a>
            </Checkbox>

            <div data-type="button-wrapper">
                <button
                    data-type="step-button"
                    className="secondary-btn"
                    onClick={popState}
                >
                    <ArrowLeft />
                    шаг {currentStep - 1}
                </button>
                <button
                    type="submit"
                    data-type="step-button"
                    className="primary-btn"
                    disabled={
                        !state.consent ||
                        !state.policy ||
                        !state.acknowledgement
                    }
                >
                    Закончить опрос
                    <ArrowRight />
                </button>
            </div>
            {error.value !== '' && <InputError message={error.value} />}
        </form>
    );
};

export default Step5;
