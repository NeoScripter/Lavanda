import { Tarot } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './PickedCards.module.scss';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';

const PickedCards: FC<NodeProps<{ cards: Tarot[] }>> = ({
    className,
    cards,
}) => {
    if (cards.length === 0) return null;

    return (
        <div className={cn(css.pickedCards, 'full-bleed', className)}>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className={css.cardImageWrapper}
                >
                    {' '}
                    {card.front_image && (
                        <LazyImage
                            prtClass={css.cardWrapper}
                            imgClass={css.cardImg}
                            img={card.front_image.path}
                            tinyImg={card.front_image.tiny_path}
                            alt={card.front_image.alt}
                            isLazy={false}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default PickedCards;
