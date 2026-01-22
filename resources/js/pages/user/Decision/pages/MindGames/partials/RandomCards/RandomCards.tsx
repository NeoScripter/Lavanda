import BackDkTiny from '@/assets/images/cards/mind-games/back-dk-tiny.webp';
import BackDk from '@/assets/images/cards/mind-games/back-dk.webp';
import Card from '@/components/user/ui/Card';
import CardDeck from '@/components/user/ui/CardDeck/CardDeck';
import InteractiveSlidingIntro from '@/components/user/ui/InteractiveSlidingIntro';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Metaphoric } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { useRandomCardsLogic } from '../../../Cards/hooks/useRandomCardLogic';
import PickedCards from '../PickedCards/PickedCards';
import css from './RandomCards.module.scss';

const ANIMATION_DURATION = 400;

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
        scrollRef,
    } = useRandomCardsLogic(
        cards,
        runeLimit,
        adjustedAnimationDuration,
        isMotionEnabled,
        interactiveItems,
        prevInteractiveItems,
        60,
    );

    return (
        <div ref={scrollRef}>
            <InteractiveSlidingIntro
                handleClick={startSpinning}
                hasStarted={hasStarted}
                text="Самая первая фраза, которая буквально «бросится вам в глаза» – это и будет совет. Опишите (желательно проговорить вслух или записать), что вы увидели и почувствовали о своем запросе. Сделайте выводы."
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
        </div>
    );
};

export default RandomCards;
