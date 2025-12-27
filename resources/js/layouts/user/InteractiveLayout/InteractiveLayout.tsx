import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { ComponentChild } from 'preact';
import { FC, useState } from 'preact/compat';
import css from './InteractiveLayout.module.scss';

const InteractiveLayout: FC<
    NodeProps<{ btnLabels: string[]; components: ComponentChild[] }>
> = ({ className, btnLabels, components }) => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <div className={cn(css.wrapper, className)}>
            <nav class={css.nav}>
                {btnLabels.map((label, idx) => (
                    <button
                        onClick={() => setActiveIdx(idx)}
                        key={idx}
                        class={cn(
                            css.sectionBtn,
                            activeIdx === idx && css.sectionBtnActive,
                        )}
                    >
                        {label}
                    </button>
                ))}
            </nav>
            <article class={css.content}>{components[activeIdx]}</article>
        </div>
    );
};

export default InteractiveLayout;
