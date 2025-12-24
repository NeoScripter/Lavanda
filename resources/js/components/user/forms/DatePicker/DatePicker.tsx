import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './DatePicker.module.scss';

const DatePicker: FC<NodeProps> = ({ className }) => {
    return <div class={cn(css.wrapper, className)}>this is date picker</div>;
};

export default DatePicker;
