import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ImageObj, images } from '@/lib/data/experiencePageData';
import { ExperienceItem } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { FC, useMemo, useRef, useState } from 'preact/compat';
import css from './ItemSection.module.scss';
import { getRandomImage, splitItemsBySlide } from './helpers';
const SLIDE_DURATION = 400;

const ItemSection: FC<NodeProps> = ({ className, children }) => {
    const { items } = usePage<{ items: ExperienceItem[] }>().props;
    const prevIdx = useRef<number | null>(null);
    const [currentSlideId, setCurrentSlideId] = useState<number | null>(null);
    const [showContent, setShowContent] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1110px)');

    const { startingItems, lastItems } = splitItemsBySlide(
        items,
        currentSlideId,
        isDesktop,
    );

    const handleClick = (id: number) => {
        const isClosing = currentSlideId === id;
        const isChanging = currentSlideId !== null && currentSlideId !== id;

        setShowContent(false);

        if (isClosing) {
            setTimeout(() => setCurrentSlideId(null), SLIDE_DURATION);
            return;
        }

        if (isChanging) {
            setTimeout(() => setCurrentSlideId(null), SLIDE_DURATION);
            setTimeout(() => {
                setCurrentSlideId(id);
                setShowContent(true);
            }, SLIDE_DURATION + 100);
        } else {
            setTimeout(() => {
                setCurrentSlideId(id);
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
                    />
                );
            })}
        </ul>
    );

    return (
        <section
            class={cn(css.wrapper, 'full-bleed-parent full-bleed', className)}
        >
            {renderItemList(startingItems)}

            <Transition show={showContent}>
                <div
                    class={css.articleWrapper}
                    style={{ '--slide-duration': SLIDE_DURATION + 'ms' }}
                >
                    <article class={cn(css.article, 'full-bleed')}>
                        {children}
                        hello world Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Ea cupiditate dolor veritatis rem unde
                        adipisci eveniet odit consequuntur aperiam, debitis non
                        quisquam animi id. Tenetur ab ullam repellendus officia
                        ratione. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Asperiores libero corrupti nam. Ab,
                        iure tenetur. Dolores voluptatum eius modi
                        necessitatibus?
                    </article>
                </div>
            </Transition>

            {lastItems.length > 0 && renderItemList(lastItems)}
        </section>
    );
};

export default ItemSection;

const ItemCard: FC<{
    item: ExperienceItem;
    img: ImageObj;
    onClick: () => void;
}> = ({ item, img, onClick }) => {
    const image = useMemo(() => img, []);

    return (
        <li
            onClick={onClick}
            class={css.card}
        >
            <LazyImage
                prtClass={css.cardOverlay}
                img={image.img}
                tinyImg={image.tinyImg}
                alt={image.alt}
            />
            <h2 class={css.cardHeading}>{item.title}</h2>
            <p class={css.cardDescription}>{item.description}</p>
        </li>
    );
};
