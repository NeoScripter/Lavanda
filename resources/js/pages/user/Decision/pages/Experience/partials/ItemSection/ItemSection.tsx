import { ExperienceItem } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './ItemSection.module.scss';

const ItemSection: FC<NodeProps> = ({ className }) => {
    const { items } = usePage<{ items: ExperienceItem[] }>().props;
    return (
        <section class={cn(css.wrapper, className)}>
            <ul class={css.items}>
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
        </section>
    );
};

export default ItemSection;

const ItemCard: FC<{ item: ExperienceItem }> = ({ item }) => {
    return (
        <li class={css.card}>
            <h2 class={css.cardHeading}>{item.title}</h2>
            <p class={css.cardDescription}>{item.description}</p>
        </li>
    );
};
