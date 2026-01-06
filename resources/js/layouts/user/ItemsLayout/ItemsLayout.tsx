import ErrorBoundary from '@/components/shared/layout/ErrorBoundary';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ExperienceItem } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { FC, useMemo, useRef, useState } from 'preact/compat';
import { useCurrentSlideId } from './CurrentSlideProvider';
import css from './ItemsLayout.module.scss';
import { getRandomImage, splitItemsBySlide } from './helpers';
import { ImageObj, images } from './images';
import Error from '@/components/shared/layout/Error/Error';
const SLIDE_DURATION = 400;

const ItemsLayout: FC<NodeProps> = ({ className, children }) => {
    const { items } = usePage<{ items: ExperienceItem[] }>().props;
    const prevIdx = useRef<number | null>(null);
    const { currentSlideId } = useCurrentSlideId();
    const [showContent, setShowContent] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1110px)');

    const { startingItems, lastItems } = splitItemsBySlide(
        items,
        currentSlideId.value,
        isDesktop,
    );

    const handleClick = (id: number) => {
        const isClosing = currentSlideId.value === id;
        const isChanging =
            currentSlideId.value !== null && currentSlideId.value !== id;

        setShowContent(false);

        if (isClosing) {
            setTimeout(() => (currentSlideId.value = null), SLIDE_DURATION);
            return;
        }

        if (isChanging) {
            setTimeout(() => (currentSlideId.value = null), SLIDE_DURATION);
            setTimeout(() => {
                currentSlideId.value = id;
                setShowContent(true);
            }, SLIDE_DURATION + 100);
        } else {
            setTimeout(() => {
                currentSlideId.value = id;
                setShowContent(true);
            }, SLIDE_DURATION);
        }
    };

    const renderItemList = (items: ExperienceItem[]) => (
        <ul class={css.items}>
            {items.map((item) => {
                prevIdx.current = getRandomImage(
                    prevIdx.current,
                    images.length,
                );

                return (
                    <ItemCard
                        img={images[prevIdx.current]}
                        key={item.id}
                        item={item}
                        onClick={() => handleClick(item.id)}
                        selected={currentSlideId.value === item.id}
                    />
                );
            })}
        </ul>
    );

    return (
        <ErrorBoundary fallback={Error}>
            <section
                class={cn(
                    css.wrapper,
                    'full-bleed-parent full-bleed',
                    className,
                )}
            >
                {renderItemList(startingItems)}

                <Transition show={showContent}>
                    <div
                        class={cn(css.articleWrapper, 'full-bleed')}
                        style={{ '--slide-duration': SLIDE_DURATION + 'ms' }}
                    >
                        <article class={cn(css.article, 'full-bleed')}>
                            {children}
                        </article>
                    </div>
                </Transition>

                {lastItems.length > 0 && renderItemList(lastItems)}
            </section>
        </ErrorBoundary>
    );
};

export default ItemsLayout;

const ItemCard: FC<{
    item: ExperienceItem;
    img: ImageObj;
    onClick: () => void;
    selected?: boolean;
}> = ({ item, img, onClick, selected = false }) => {
    const image = useMemo(() => img, []);

    return (
        <li class={cn(css.card, selected && css.selectedCard)}>
            <button
                onClick={onClick}
                type="button"
                className={css.cardBtn}
            ></button>

            <LazyImage
                prtClass={css.cardOverlay}
                img={image.img}
                tinyImg={image.tinyImg}
                alt={image.alt}
            />
            <div className={css.cardTextWrapper}>
                <h2 class={css.cardHeading}>{item.title}</h2>
                <p class={css.cardDescription}>{item.description}</p>
            </div>
        </li>
    );
};
