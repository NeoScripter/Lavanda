import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { range } from '@/utils/range';
import { FC } from 'preact/compat';
import PatternCell from '../PatternCell/PatternCell';
import css from './Interpretation.module.scss';
import { binaryMaskFor } from '../../pageData';

const Interpretation: FC<NodeProps> = ({ className }) => {
    const digit = 32;
    return (
        <article class={cn(css.wrapper, className)}>
            <div class={css.patternFrame}>
                <div className={css.pattern}>
                    {range(1, 6).reverse().map((idx) => (
                        <PatternCell
                            key={idx}
                            pattern={binaryMaskFor[idx] & digit}
                            className={css.patternLine}
                        />
                    ))}
                </div>
                <p className={css.patternNum}>27</p>
            </div>
            <p>
                Эта гексаграмма символизирует сознательное уединение. Ваше
                нынешнее состояние подобно состоянию генерала, решающего, когда
                лучше всего начать наступление. Будьте внимательны, отбирайте
                себе в союзники людей с добрыми намерениями, и хотя удача в
                данный момент сопутствует вам, не забывайте о мерах
                предосторожности. Вы получите неожиданное известие, или вас
                посетит нежданный визитер. Настоящее время исполнено для вас
                романтики, что, впрочем, не помешало возникновению разлада с
                близким человеком. Все будущие дела планируйте тщательно и
                рассудительно.
            </p>
        </article>
    );
};

export default Interpretation;
