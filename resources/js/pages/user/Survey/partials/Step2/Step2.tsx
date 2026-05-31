import { NodeProps } from '@/types/nodeProps';
import { FC, useState } from 'preact/compat';
import css from './Step2.module.scss';

import RadioInput from '@/components/user/forms/RadioInput';
import { Signal } from '@preact/signals';
import { TargetedEvent } from 'preact';
import { AnswerType } from '../../Survey';
import { tools } from './pageData';

const Step2: FC<NodeProps<{ answers: Signal<AnswerType[]> }>> = ({
    answers,
}) => {
    const [selectedTool, setSelectedTool] = useState<string | null>(null);

    const submit = (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const serialized = Object.fromEntries(formData);

        answers.value = [
            ...answers.value,
            { ...serialized } as Record<string, string>,
        ];
    };

    return (
        <form onSubmit={submit}>
            <RadioInput
                selected={selectedTool}
                setSelected={(value) => setSelectedTool(value)}
                options={tools}
                className={css.radio}
                label="Выбор инструмента"
            />

            <button
                tabIndex={6}
                disabled={selectedTool == null}
                type="submit"
                className="primary-btn"
            >
                Сохранить
            </button>
        </form>
    );
};

export default Step2;
