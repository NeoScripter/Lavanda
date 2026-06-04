import { NodeProps } from '@/types/nodeProps';
import { FC, useReducer } from 'preact/compat';
import css from './Step1.module.scss';

import Input from '@/components/user/forms/Input/Input';
import InputError from '@/components/user/forms/InputError/InputError';
import Label from '@/components/user/forms/Label/Label';
import RadioInput from '@/components/user/forms/RadioInput';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import { StepProps } from '../../Survey';

const genders = [
    { label: 'Мужчина', value: 'Мужчина' },
    { label: 'Женщина', value: 'Женщина' },
];

type FormState = {
    name: string;
    email: string;
    birthday: string;
    gender: string;
};

type FormAction = {
    type: 'SET_NAME' | 'SET_EMAIL' | 'SET_BIRTHDAY' | 'SET_GENDER';
    payload: string;
};

const initialState: FormState = {
    name: '',
    email: '',
    birthday: '',
    gender: 'Женщина',
};

const reducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_BIRTHDAY':
            return { ...state, birthday: action.payload };
        case 'SET_GENDER':
            return { ...state, gender: action.payload };
        default:
            throw new Error('unexpected action');
    }
};

const Step1: FC<NodeProps<StepProps>> = ({ answers, poped, pushState }) => {
    const [state, dispatch] = useReducer(
        reducer,
        (poped.value as FormState) ?? initialState,
    );

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        pushState(state);
    };

    const currentStep = answers.value.length + 1;

    return (
        <form onSubmit={submit}>
            <div>
                <Label htmlFor="email">Как к тебе обращаться</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    onInput={(e) =>
                        dispatch({ type: 'SET_NAME', payload: e.target.value })
                    }
                    value={state.name}
                    required
                    tabIndex={1}
                    placeholder="Василий Быков"
                />
                <InputError />
            </div>

            <div>
                <Label htmlFor="email">
                    Email (на него будет отправлен результат)
                </Label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    onInput={(e) =>
                        dispatch({ type: 'SET_EMAIL', payload: e.target.value })
                    }
                    value={state.email}
                    required
                    tabIndex={2}
                    placeholder="email@example.com"
                />
                <InputError />
            </div>

            <RadioInput
                selected={state.gender}
                setSelected={(value) =>
                    dispatch({ type: 'SET_GENDER', payload: value as string })
                }
                options={genders}
                label="Выбери пол"
            />

            <div>
                <Label htmlFor="birthday">Твоя дата рождения</Label>
                <Input
                    id="birthday"
                    name="birthday"
                    type="date"
                    tabIndex={3}
                    className={css.birthdayInput}
                    onInput={(e) =>
                        dispatch({
                            type: 'SET_BIRTHDAY',
                            payload: e.target.value,
                        })
                    }
                    value={state.birthday}
                />
                <InputError />
            </div>

            <div data-type="button-wrapper">
                <button
                    type="submit"
                    data-type="step-button"
                    className={cn(css.nextBtn, 'primary-btn')}
                    disabled={
                        state.name === '' ||
                        state.email === '' ||
                        state.birthday === ''
                    }
                >
                    шаг {currentStep + 1}
                    <ArrowRight />
                </button>
            </div>
        </form>
    );
};

export default Step1;
