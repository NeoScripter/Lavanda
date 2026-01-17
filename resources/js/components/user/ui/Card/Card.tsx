import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { LenormandCard } from '@/pages/user/Decision/pages/Cards/pages/Lenormand/constants/lenormandCardData';
import { Tarot } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './Card.module.scss';

type CardType = Tarot | LenormandCard;
type VariantType = 'floating' | 'static';
type ImageType = 'front' | 'back';

const Card: FC<
    NodeProps<{
        card: CardType;
        variant?: VariantType;
        isFlipped?: boolean;
        onClick?: () => void;
        hasHoverState?: boolean;
        hasHighlightedState?: boolean;
        backImgPath: string;
        backImgTinyPath: string;
    }>
> = ({
    className,
    variant = 'floating',
    card,
    isFlipped = false,
    onClick,
    hasHoverState,
    hasHighlightedState,
    backImgPath,
    backImgTinyPath,
}) => {
    if (!card) {
        return null;
    }

    return (
        <li
            className={cn(
                css.wrapper,
                hasHoverState && css.hoveredCard,
                hasHighlightedState && css.highlightedCard,
                className,
            )}
        >
            <article className={cn(css.cardFrame)}>
                <CardImage
                    type="back"
                    path={backImgPath}
                    tinyPath={backImgTinyPath}
                    alt="Рубашка карты"
                    isFlipped={isFlipped}
                    className={
                        variant === 'floating'
                            ? css.imageFrameFloating
                            : css.imageFrameStatic
                    }
                />
                {card.front_image && (
                    <CardImage
                        isFlipped={isFlipped}
                        type="front"
                        path={card.front_image.path}
                        tinyPath={card.front_image.tiny_path}
                        alt={card.front_image.alt}
                        className={css.imageFrameFloating}
                    />
                )}
            </article>
            <CardBtn
                isFlipped={isFlipped}
                onClick={onClick}
            />
        </li>
    );
};

export default Card;

const CardImage: FC<{
    type: ImageType;
    path: string;
    tinyPath: string;
    alt: string;
    className?: string;
    isFlipped: boolean;
}> = ({ type, path, tinyPath, alt, isFlipped, className }) => {
    return (
        <LazyImage
            prtClass={cn(
                css.imageFrame,
                {
                    [css.frontImageFrame]: type === 'front',
                    [css.backImageFrame]: type === 'back',
                    [css.frontImageFrameFlipped]: type === 'front' && isFlipped,
                    [css.backImageFrameFlipped]: type === 'back' && isFlipped,
                },
                className,
            )}
            img={path}
            tinyImg={tinyPath}
            alt={alt}
        />
    );
};

const CardBtn: FC<{ isFlipped?: boolean; onClick?: () => void }> = ({
    isFlipped,
    onClick,
}) => {
    if (isFlipped || onClick == null) return null;

    return (
        <button
            onClick={onClick}
            type="button"
            className={css.cardBtn}
        ></button>
    );
};
