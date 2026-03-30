import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './ChoiceSection.module.scss';

const ChoiceSection: FC<NodeProps> = ({ children }) => {
    return (
        <section className={cn('full-bleed', css.wrapper)}>
            <div className={css.root}>
                <h2 className={css.heading}>
                    Одной подсказки иногда мало, чтобы увидеть всю картину. Мы
                    открыли для вас все залы сайта на 24 часа.
                </h2>

                <p className={css.highlight}></p>
                <p className={css.footnote}>«Кошачий оракул» всегда открыт для вас.</p>
            </div>

            {children}
        </section>
    );
};

export default ChoiceSection;
