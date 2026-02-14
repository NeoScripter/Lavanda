import { Iching } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { range } from '@/utils/range';
import { usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import { binaryMaskFor } from '../../pageData';
import PatternCell from '../PatternCell/PatternCell';
import css from './Interpretation.module.scss';

const Interpretation: FC<NodeProps> = ({ className }) => {
    const { iching } = usePage<{ iching: Iching }>().props;

    if (!iching) {
        return null;
    }

    return (
        <article class={cn(css.wrapper, className)}>
            <div class={css.patternFrame}>
                <div className={css.pattern}>
                    {range(1, 6)
                        .reverse()
                        .map((idx) => (
                            <PatternCell
                                key={idx}
                                pattern={binaryMaskFor[idx] & iching.bitmask}
                                className={css.patternLine}
                            />
                        ))}
                </div>
                <p className={css.patternNum}>{iching.number}</p>
            </div>
            <p
                className={css.patternDescription}
                dangerouslySetInnerHTML={{ __html: iching.description }}
            />
        </article>
    );
};

export default Interpretation;
