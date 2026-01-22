import BackDkTiny from '@/assets/images/cards/metaphoric/back-dk-tiny.webp';
import BackDk from '@/assets/images/cards/metaphoric/back-dk.webp';
import ArrowHint from '@/components/user/ui/ArrowHint';
import Card from '@/components/user/ui/Card';
import CardDeck from '@/components/user/ui/CardDeck/CardDeck';
import InteractiveSlidingIntro from '@/components/user/ui/InteractiveSlidingIntro/InteractiveSlidingIntro';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Metaphoric } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { useRandomCardsLogic } from '../../../../hooks/useRandomCardLogic';
import PickedCards from '../PickedCards/PickedCards';
import css from './RandomCards.module.scss';

const ANIMATION_DURATION = 200;

const RandomCards = () => {
    const { cards } = usePage<{ cards: Metaphoric[] }>().props;

    const isMotionEnabled = checkMotionPreferences();

    const { currentSlideId } = useCurrentSlideId();
    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    const adjustedAnimationDuration = isMotionEnabled ? ANIMATION_DURATION : 0;
    const runeLimit = currentSlideId.value ?? 1;

    const handleNextSpinClick = () => {
        if (hasEnded) {
            reset();
        } else {
            startSpinning();
        }
    };

    const {
        faceDownCards,
        selectedCards,
        highlightedIdx,
        startSpinning,
        reset,
        hasStarted,
        isSpinning,
        hasEnded,
        faceDownCardLength,
    } = useRandomCardsLogic(
        cards,
        runeLimit,
        adjustedAnimationDuration,
        isMotionEnabled,
        interactiveItems,
        prevInteractiveItems,
    );

    return (
        <>
            <InteractiveSlidingIntro
                hasStarted={hasStarted}
                text={
                    'Карта открывается сама — как знак, который приходит вовремя. Иногда именно случай отражает то, что мы уже чувствуем, но не осознаём.'
                }
                handleClick={startSpinning}
            />

            <PickedCards
                cards={selectedCards}
                className={css.pickedCards}
            />
            {!hasEnded && (
                <CardDeck
                    key="faceDownCards"
                    className={css.initialCards}
                    size={faceDownCardLength}
                >
                    {faceDownCards.map((card, idx) => (
                        <Card
                            key={card.id}
                            card={card}
                            backImgPath={BackDk}
                            backImgTinyPath={BackDkTiny}
                            hasHighlightedState={highlightedIdx === idx}
                        />
                    ))}
                </CardDeck>
            )}

            {hasEnded && (
                <button
                    onClick={handleNextSpinClick}
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
