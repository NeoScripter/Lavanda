import { NodeProps } from '@/types/nodeProps';
import { FC, useState } from 'preact/compat';
import css from './Step3.module.scss';

import RadioInput from '@/components/user/forms/RadioInput';
import { ArrowLeft, ArrowRight } from 'lucide-preact';
import { TargetedEvent } from 'preact';
import { StepProps } from '../../Survey';
import { spheres } from './pageData';

const Step3: FC<NodeProps<StepProps>> = ({ answers, popState, pushState, poped }) => {
    const [selectedSphere, setSelectedSphere] = useState<string | null>(poped.value?.sphere ?? null);

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        if (selectedSphere == null) {
            return;
        }

        pushState({ sphere: selectedSphere });
    };

    const currentStep = answers.value.length + 1;

    return (
        <form onSubmit={submit}>
            <RadioInput
                selected={selectedSphere}
                setSelected={(value) => setSelectedSphere(value)}
                options={spheres}
                className={css.radio}
                label="Выберите сферу, которая волнует сейчас больше всего"
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
                    disabled={selectedSphere == null}
                >
                    шаг {currentStep + 1}
                    <ArrowRight />
                </button>
            </div>
        </form>
    );
};

export default Step3;
