import { NodeProps } from '@/types/nodeProps';
import { FC } from 'preact/compat';
import css from './Step1.module.scss';

import Input from '@/components/user/forms/Input/Input';
import InputError from '@/components/user/forms/InputError/InputError';
import Label from '@/components/user/forms/Label/Label';
import { Signal } from '@preact/signals';
import { TargetedEvent } from 'preact';
import { AnswerType } from '../../Survey';

const Step1: FC<NodeProps<{ answers: Signal<AnswerType[]> }>> = ({
    answers,
}) => {
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
            <div>
                <Label htmlFor="email">Имя</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    tabIndex={1}
                    placeholder="Василий Быков"
                    defaultValue="Ilya"
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
                    required
                    tabIndex={2}
                    placeholder="email@example.com"
                    defaultValue="email@example.com"
                />
                <InputError />
            </div>

            <div>
                <Label htmlFor="birthday">День рождения</Label>
                <Input
                    id="birthday"
                    name="birthday"
                    type="date"
                    tabIndex={3}
                    className={css.birthdayInput}
                    defaultValue="2026-05-27"
                />
                <InputError />
            </div>

            <button
                tabIndex={6}
                type="submit"
                className="primary-btn"
            >
                Сохранить
            </button>
        </form>
    );
};

export default Step1;
