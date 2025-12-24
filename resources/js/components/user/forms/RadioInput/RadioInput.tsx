import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import {
    Field,
    Fieldset,
    Label,
    Legend,
    Radio,
    RadioGroup,
} from '@headlessui/react';
import { FC } from 'preact/compat';
import css from './RadioInput.module.scss';

export type OptionType = {
    label: string;
    value: string | null;
};

const RadioInput: FC<
    NodeProps<{
        label: string;
        selected: string | null;
        setSelected: (value: string | null) => void;
        options: OptionType[];
    }>
> = ({ className, label, options, selected, setSelected }) => {
    return (
        <Fieldset className={cn(css.wrapper, className)}>
            <Legend className={css.legend}>{label}</Legend>
            <RadioGroup
                value={selected}
                onChange={setSelected}
                className={css.group}
            >
                {options.map((option) => (
                    <Field
                        key={option.label}
                        className={css.field}
                    >
                        <Label class={css.label}>{option.label}</Label>
                        <Radio
                            value={option.value}
                            class={css.radioBtn}
                        >
                            <span class={css.radioBtnCenter} />
                        </Radio>
                    </Field>
                ))}
            </RadioGroup>
        </Fieldset>
    );
};

export default RadioInput;
