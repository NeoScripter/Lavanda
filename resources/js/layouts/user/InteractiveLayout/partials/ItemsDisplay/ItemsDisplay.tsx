import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { FC } from 'preact/compat';
import {
    InteractiveItem,
    useInteractiveItems,
} from '../../InteractiveItemsContext';
import css from './ItemsDisplay.module.scss';

const ItemsDisplay: FC<NodeProps> = ({ className, children }) => {
    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    const items =
        interactiveItems.value.length !== 0
            ? interactiveItems.value
            : prevInteractiveItems.value;

    // Don't show the component if the item doesn't have a description
    const noItems =
        items.length === 0 || items[0].id == null || items[0].advice == null;

    return (
        <Transition show={interactiveItems.value.length > 0}>
            <div className={css.transitionWrapper}>
                <div className={css.mainContentWrapper}>
                    {children && <div> {children}</div>}
                    {!noItems && (
                        <ul className={cn(css.wrapper, className)}>
                            {items.map((item) => (
                                <ItemSection
                                    key={item.id}
                                    item={item}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Transition>
    );
};

export default ItemsDisplay;

const ItemSection: FC<{ item: InteractiveItem }> = ({ item }) => {
    const { isLoading } = useInteractiveItems();

    const image = item.front_image;

    return (
        <li className={css.sectionWrapper}>
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

                {isLoading.value ? (
                    <Preloader />
                ) : (
                    <div
                        className={css.sectionHtmlContent}
                        dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                )}
            </div>
            <div className={css.sectionHeading}>
                <h3>{`Совет: ${item.advice}`}</h3>
            </div>
        </li>
    );
};

const Preloader = () => {
    return (
        <div className={css.sectionPreloader}>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae at voluptatem nam vero obcaecati est atque repudiandae
                tempora sint dolore ab nobis rerum ipsa, quae blanditiis! Ullam
                veritatis esse veniam!
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae at voluptatem nam vero obcaecati est atque repudiandae
                tempora sint dolore ab nobis rerum ipsa, quae blanditiis! Ullam
                veritatis esse veniam!
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae at voluptatem nam vero obcaecati est atque repudiandae
                tempora sint dolore ab nobis rerum ipsa, quae blanditiis! Ullam
                veritatis esse veniam!
            </p>
        </div>
    );
};
