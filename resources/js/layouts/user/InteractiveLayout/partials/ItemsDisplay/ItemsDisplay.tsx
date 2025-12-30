import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { FC } from 'preact/compat';
import {
    InteractiveItem,
    useInterativeItems,
} from '../../InteractiveItemsContext';
import css from './ItemsDisplay.module.scss';

const ItemsDisplay: FC<NodeProps> = ({ className }) => {
    const { interativeItems, prevInteractiveItems } = useInterativeItems();

    const items =
        interativeItems.value.length !== 0
            ? interativeItems.value
            : prevInteractiveItems.value;

    return (
        <Transition show={interativeItems.value.length > 0}>
            <div className={css.transitionWrapper}>
                <ul className={cn(css.wrapper, className)}>
                    {items.map((item, idx) => (
                        <ItemSection
                            key={item.id}
                            item={item}
                        />
                    ))}
                </ul>
            </div>
        </Transition>
    );
};

export default ItemsDisplay;

const ItemSection: FC<{ item: InteractiveItem }> = ({ item }) => {
    const image = item.front_image;

    return (
        <li className={css.sectionWrapper}>
            <div className={css.sectionHeading}>
                <h3>{item.summary}</h3>
                <p>{item.advice}</p>
            </div>
            <div className={css.sectionContentWrapper}>
                <div className={css.sectionImageWrapper}>
                    {image && (
                        <LazyImage
                            prtClass={css.sectionImageParent}
                            imgClass={css.sectionImage}
                            img={image.path}
                            tinyImg={image.tiny_path}
                            alt={image.alt}
                        />
                    )}

                    <h4 className={css.sectionItemName}>{item.name}</h4>
                </div>

                <div>{item.description}</div>
            </div>
        </li>
    );
};
