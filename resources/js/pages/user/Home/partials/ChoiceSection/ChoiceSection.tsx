import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './ChoiceSection.module.scss';

const ChoiceSection: FC<NodeProps> = ({ children }) => {
    return (
        <section className={cn('full-bleed', css.wrapper)}>
            <div className={css.root}></div>

            {children}
        </section>
    );
};

export default ChoiceSection;
