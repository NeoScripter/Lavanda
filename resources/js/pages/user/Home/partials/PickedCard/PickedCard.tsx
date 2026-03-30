import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Promo } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './PickedCard.module.scss';

const PickedCard: FC<NodeProps<{ cards: Promo[] }>> = ({
    className,
    cards,
}) => {
    if (cards.length === 0) return null;

    const card = cards[0];

    return (
        <div className={cn(css.root, className)}>
            <div
                key={card.id}
                className={css.cardFrame}
            >
                {' '}
                {card.front_image && (
                    <LazyImage
                        prtClass={css.imgFrame}
                        imgClass={css.image}
                        img={card.front_image.path}
                        tinyImg={card.front_image.tiny_path}
                        alt={card.front_image.alt}
                        isLazy={false}
                    />
                )}
            </div>

            <div className={css.takeaway}>
                <div dangerouslySetInnerHTML={{ __html: card.html }} />
            </div>
        </div>
    );
};

export default PickedCard;
