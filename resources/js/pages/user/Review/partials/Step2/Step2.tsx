import { NodeProps } from '@/types/nodeProps';
import { FC, useState } from 'preact/compat';
import css from './Step2.module.scss';

import RadioInput from '@/components/user/forms/RadioInput';
import { ArrowLeft, ArrowRight } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import { StepProps } from '../../Review';
import { tools } from './pageData';

const Step2: FC<NodeProps<StepProps>> = ({ answers, popState, poped, pushState }) => {
    const [selectedTool, setSelectedTool] = useState<string | null>(poped.value?.tool ?? null);

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        if (selectedTool == null) {
            return;
        }

        pushState({ tool: selectedTool });
    };

    const currentStep = answers.value.length + 1;

    return (
        <form onSubmit={submit}>
            <RadioInput
                selected={selectedTool}
                setSelected={(value) => setSelectedTool(value)}
                options={tools}
                className={css.radio}
                label="Выбор инструмента"
            />

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
                    disabled={selectedTool == null}
                >
                    шаг {currentStep + 1}
                    <ArrowRight />
                </button>
            </div>
        </form>
    );
};

export default Step2;
