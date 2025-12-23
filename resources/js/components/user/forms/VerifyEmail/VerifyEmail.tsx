import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import { Flash } from '@/types/flash';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './VerifyEmail.module.scss';

const VerifyEmail: FC<NodeProps> = ({ className }) => {
    const { flash } = usePage<{ flash: Flash }>().props;

    return (
        <FormLayout heading="Верификация">
            <div className={cn(css.wrapper, className)}>{flash?.verifyEmail}</div>
        </FormLayout>
    );
};

export default VerifyEmail;
