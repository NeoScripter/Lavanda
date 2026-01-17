import BackDkTiny from '@/assets/images/cards/lenormand/lenormand-back-dk-tiny.webp';
import BackDk from '@/assets/images/cards/lenormand/lenormand-back-dk.webp';
import ArrowHint from '@/components/user/ui/ArrowHint';
import Card from '@/components/user/ui/Card';
import InteractiveSlidingIntro from '@/components/user/ui/InteractiveSlidingIntro/InteractiveSlidingIntro';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { introText, LenormandCard } from '../../constants/lenormandCardData';
import { useLenormandLogic } from '../../hooks/useLenormandLogic';
import isKeyCard from '../../utils/isKeyCard';
import css from './RandomCards.module.scss';

const RandomCards = () => {
    const { cards: initialCards } = usePage<{
        cards: Omit<LenormandCard, 'isFlipped'>[];
    }>().props;

    const isDesktop = useMediaQuery('(min-width: 1110px)');
    const isMotionEnabled = checkMotionPreferences();

    const { currentSlideId } = useCurrentSlideId();
    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    const {
        hasEnded,
        hasStarted,
        isSpinning,
        reset,
        startSpinning,
        cards,
        allFlipped,
        scrollRef,
    } = useLenormandLogic(
        currentSlideId.value || 1,
        initialCards,
        isDesktop ? 8 : 5,
        isMotionEnabled,
        interactiveItems,
        prevInteractiveItems,
    );

    return (
        <>
            <InteractiveSlidingIntro
                hasStarted={hasStarted}
                text={introText}
                handleClick={startSpinning}
            />

            <ul
                ref={scrollRef}
                className={cn(css.cardGrid, {
                    [css.expandedGrid]: !allFlipped,
                    [css.finalGrid]: allFlipped,
                })}
            >
                {cards.map((card) => {
                    return card ? (
                        <Card
                            variant="static"
                            key={card.id}
                            card={card}
                            backImgPath={BackDk}
                            backImgTinyPath={BackDkTiny}
                            className={cn(
                                isKeyCard(card.id) &&
                                    card.isFlipped &&
                                    css.highlightedCard,
                            )}
                            isFlipped={card.isFlipped}
                        />
                    ) : (
                        <div />
                    );
                })}
            </ul>

            {hasEnded && (
                <button
                    onClick={reset}
                    disabled={isSpinning}
                    class={cn('primary-btn', css.nextRuneBtn)}
                >
                    Попробовать снова
                </button>
            )}

            <ArrowHint show={hasEnded} />
        </>
    );
};

export default RandomCards;
