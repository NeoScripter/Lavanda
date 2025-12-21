import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { ImageObj, images } from '@/lib/data/experiencePageData';
import { ExperienceItem } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC, useCallback, useRef } from 'preact/compat';
import css from './ItemSection.module.scss';

const ItemSection: FC<NodeProps> = ({ className }) => {
    const prevIdx = useRef<number | null>(null);

    const getRandomImage = useCallback(
        (prev: number | null, length: number) => {
            let idx = Math.floor(Math.random() * length);

            while (idx === prev) {
                idx = Math.floor(Math.random() * length);
            }

            return idx;
        },
        [length],
    );

    const { items } = usePage<{ items: ExperienceItem[] }>().props;
    return (
        <section class={cn(css.wrapper, className)}>
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
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default ItemSection;

const ItemCard: FC<{ item: ExperienceItem; img: ImageObj }> = ({
    item,
    img,
}) => {
    return (
        <li class={css.card}>
            <LazyImage
                prtClass={css.cardOverlay}
                img={img.img}
                tinyImg={img.tinyImg}
                alt={img.alt}
            />
            <h2 class={css.cardHeading}>{item.title}</h2>
            <p class={css.cardDescription}>{item.description}</p>
        </li>
    );
};
