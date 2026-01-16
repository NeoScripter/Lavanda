import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { ComponentChild } from 'preact';
import { FC, useState } from 'preact/compat';
import {
    InteractiveItemsProvider,
    useInteractiveItems,
} from './InteractiveItemsContext';
import css from './InteractiveLayout.module.scss';
import ItemsDisplay from './partials/ItemsDisplay';

const InteractiveLayout: FC<
    NodeProps<{ btnLabels: string[]; components: (() => ComponentChild)[] }>
> = ({ className, btnLabels, components, children }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const hasNav = components.length > 1;

    return (
        <div className={cn(css.wrapper, className)}>
            {hasNav && (
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
            )}
            <InteractiveItemsProvider>
                <InteractiveLayoutContent
                    hasNav={hasNav}
                    components={components}
                    activeIdx={activeIdx}
                />

                <ItemsDisplay>{children}</ItemsDisplay>
            </InteractiveItemsProvider>
        </div>
    );
};

export default InteractiveLayout;

const InteractiveLayoutContent: FC<{
    hasNav: boolean;
    components: (() => ComponentChild)[];
    activeIdx: number;
}> = ({ hasNav, components, activeIdx }) => {
    const { interactiveItems } = useInteractiveItems();

    const isReadingOpen = interactiveItems.value.length > 0;

    return (
        <article
            class={cn(css.content, 'full-bleed-parent', {
                [css.roundedTop]: !hasNav,
                [css.roundedBottom]: !isReadingOpen,
                [css.flatBottomCorners]: isReadingOpen,
            })}
        >
            {components[activeIdx]?.()}
        </article>
    );
};
