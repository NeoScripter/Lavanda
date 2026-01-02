import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { ComponentChild } from 'preact';
import { FC, useState } from 'preact/compat';
import { InterativeItemsProvider } from './InteractiveItemsContext';
import css from './InteractiveLayout.module.scss';
import ItemsDisplay from './partials/ItemsDisplay';

const InteractiveLayout: FC<
    NodeProps<{ btnLabels: string[]; components: (() => ComponentChild)[] }>
> = ({ className, btnLabels, components, children }) => {
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
            <InterativeItemsProvider>
                <article class={cn(css.content, 'full-bleed-parent')}>
                    {components[activeIdx]?.()}
                </article>

                <ItemsDisplay>{children}</ItemsDisplay>
            </InterativeItemsProvider>
        </div>
    );
};

export default InteractiveLayout;
