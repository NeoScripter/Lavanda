import { cn } from '@/utils/cn';
import { JSX } from 'preact/compat';
import css from './Toggle.module.scss';

type ToggleProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    id?: string;
    ariaLabel?: string;
};

export default function Toggle({
    checked,
    onChange,
    className,
    id = 'toggle',
    ariaLabel = 'Toggle',
}: ToggleProps) {
    const handleChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
        onChange(e.currentTarget.checked);
    };

    return (
        <div className={cn(css.toggle, className)}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                aria-label={ariaLabel}
                aria-checked={checked}
                role="switch"
                className={css.input}
            />
            <label
                htmlFor={id}
                className={css.label}
                aria-hidden="true"
            />
        </div>
    );
}
