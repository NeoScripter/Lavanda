import { cn } from '@/utils/cn';
import { ComponentChildren } from 'preact';
import { useId } from 'preact/hooks';
import css from './Checkbox.module.scss';

type CheckboxProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    labelClassName?: string;
    checkboxClassName?: string;
    children: ComponentChildren;
    error?: string;
    name?: string;
    disabled?: boolean;
};

export default function Checkbox({
    checked,
    onChange,
    labelClassName,
    checkboxClassName,
    children,
    error,
    name,
    disabled = false,
}: CheckboxProps) {
    const id = useId();

    const handleChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        onChange(target.checked);
    };

    return (
        <div className={css.checkboxWrapper}>
            <label
                htmlFor={id}
                className={css.checkboxContainer}
            >
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    className={cn(css.checkboxInput, checkboxClassName)}
                />
                <span className={css.checkboxCustom}>
                    <svg
                        className={css.checkmark}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 6L9 17L4 12"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <div className={cn(css.checkboxLabel, labelClassName)}>
                    {children}
                </div>
            </label>
            {error && <div className={css.checkboxError}>{error}</div>}
        </div>
    );
}
