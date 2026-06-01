import { cn } from '@/utils/cn';
import { ComponentProps } from 'preact';
import css from './TextArea.module.scss';

export default function TextArea({
    className,
    ...props
}: ComponentProps<'textarea'>) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(css.textarea, className)}
            {...props}
        />
    );
}
