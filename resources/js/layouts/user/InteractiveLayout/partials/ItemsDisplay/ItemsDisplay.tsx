import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import {
    InteractiveItem,
    useInterativeItems,
} from '../../InteractiveItemsContext';
import css from './ItemsDisplay.module.scss';

const ItemsDisplay: FC<NodeProps> = ({ className }) => {
    const { interativeItems } = useInterativeItems();

    if (interativeItems.value.length === 0) return null;

    return (
        <ul className={cn(css.wrapper, className)}>
            {interativeItems.value.map((item, idx) => (
                <ItemSection
                    key={item.id}
                    item={item}
                />
            ))}
        </ul>
    );
};

export default ItemsDisplay;

const ItemSection: FC<{ item: InteractiveItem }> = ({ item }) => {
    const image = item.front_image;

    return (
        <li className={css.sectionWrapper}>
            <h3 className={css.sectionHeading}>{item.summary}</h3>
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
