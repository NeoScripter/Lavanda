import BackDkTiny from '@/assets/images/cards/tarot/back-dk-tiny.webp';
import BackDk from '@/assets/images/cards/tarot/back-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Tarot } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './Card.module.scss';

type CardType = Tarot;

const Card: FC<
    NodeProps<{ card: CardType; isFlipped?: boolean; onClick: () => void }>
> = ({ className, card, isFlipped, onClick }) => {
    return (
        <li className={cn(css.wrapper, className)}>
            {!isFlipped && (
                <button
                    onClick={onClick}
                    type="button"
                    className={css.cardBtn}
                ></button>
            )}
            <article className={cn(css.cardWrapper, isFlipped && css.flipped)}>
                <LazyImage
                    prtClass={cn(css.sharedImgWrapper, css.backImgWrapper)}
                    imgClass={cn(css.sharedImg, css.backImg)}
                    img={BackDk}
                    tinyImg={BackDkTiny}
                />
                {card.front_image && (
                    <LazyImage
                        prtClass={cn(css.sharedImgWrapper, css.frontImgWrapper)}
                        imgClass={cn(css.sharedImg, css.frontImg)}
                        img={card.front_image.path}
                        tinyImg={card.front_image.tiny_path}
                        alt={card.front_image.alt}
                    />
                )}
            </article>
        </li>
    );
};

export default Card;
