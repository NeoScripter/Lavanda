import { NodeProps } from '@/types/nodeProps';
import { FC, useReducer } from 'preact/compat';

import InputError from '@/components/user/forms/InputError/InputError';
import Label from '@/components/user/forms/Label/Label';
import TextArea from '@/components/user/forms/TextArea/TextArea';
import { ArrowLeft, ArrowRight } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import { StepProps } from '../../Survey';

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

const Step4: FC<NodeProps<StepProps>> = ({
    answers,
    popState,
    poped,
    pushState,
}) => {
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
                <Label htmlFor="email">
                    Опишите свою ситуацию подробнее. Чем больше деталей, тем
                    точнее будет разбор.
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
                    placeholder="Моя ситуация заключается в том, что..."
                    defaultValue=""
                    rows={15}
                />
                <InputError />
            </div>

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
                    disabled={state.description === ''}
                >
                    шаг {currentStep + 1}
                    <ArrowRight />
                </button>
            </div>
        </form>
    );
};

export default Step4;
