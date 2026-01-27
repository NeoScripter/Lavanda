import { cn } from '@/utils/cn';
import { ComponentProps } from 'preact';
import { useState } from 'preact/hooks';
import ShowInputBtn from './partials/ShowInputBtn/ShowInputBtn';
import css from './PasswordInput.module.scss';

export default function PasswordInput({
    className,
    ...props
}: ComponentProps<'input'>) {
    const [showInput, setShowInput] = useState(false);

    return (
        <div className={cn(css.input, className)}>
            <input
                type={showInput ? 'text' : 'password'}
                data-slot="input"
                className={css.field}
                {...props}
            />
            <ShowInputBtn
                showInput={showInput}
                onClick={() => setShowInput((o) => !o)}
            />
        </div>
    );
}
