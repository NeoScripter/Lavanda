import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { FC, useState } from 'preact/compat';
import css from './OTPpassword.module.scss';

const OTPpassword: FC<NodeProps> = ({ className }) => {
    const [value, setValue] = useState('');

    return (
        <div class={cn(css.wrapper, className)}>
            <div class={css.label}>
                Введите код
            </div>

            <InputOTP
                value={value}
                onChange={(value) => setValue(value)}
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
            >
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
        </div>
    );
};

export default OTPpassword;
