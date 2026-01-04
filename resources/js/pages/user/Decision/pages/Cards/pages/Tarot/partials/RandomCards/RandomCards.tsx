import BackDkTiny from '@/assets/images/cards/tarot/back-dk-tiny.webp';
import BackDk from '@/assets/images/cards/tarot/back-dk.webp';
import Card from '@/components/user/ui/Card';
import CardDeck from '@/components/user/ui/CardDeck/CardDeck';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Tarot } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import css from './RandomCards.module.scss';
import { useRandomCardsLogic } from './useRandomCardLogic';

const ANIMATION_DURATION = 200;

const RandomCards = () => {
    const { cards } = usePage<{ cards: Tarot[] }>().props;

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
        unselectedCards,
        selectedCards,
        highlightedIdx,
        startSpinning,
        reset,
        hasStarted,
        isSpinning,
        hasEnded,
        unselectedCardLength,
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
            <Transition show={!hasStarted}>
                <div className={css.transitionWrapper}>
                    <div>
                        <p class={css.intro}>
                            Карта открывается сама — как знак, который приходит
                            вовремя. Иногда именно случай отражает то, что мы
                            уже чувствуем, но не осознаём.
                        </p>
                        <button
                            onClick={startSpinning}
                            class={cn('primary-btn', css.actionBtn)}
                        >
                            Получить ответ
                        </button>
                    </div>
                </div>
            </Transition>

            <div className={css.rowWrapper}>
                {selectedCards.length > 0 && (
                    <CardDeck
                        key="selectedCards"
                        className={css.selectedCards}
                        size={selectedCards.length}
                    >
                        {selectedCards.map((card, idx) => (
                            <Card
                                key={card.id}
                                card={card}
                                isFlipped={true}
                                backImgPath={BackDk}
                                backImgTinyPath={BackDkTiny}
                            />
                        ))}
                    </CardDeck>
                )}
                <CardDeck
                    key="unselectedCards"
                    className={css.initialCards}
                    size={unselectedCardLength}
                >
                    {unselectedCards.map((card, idx) => (
                        <Card
                            key={card.id}
                            card={card}
                            backImgPath={BackDk}
                            backImgTinyPath={BackDkTiny}
                            isHighlighted={highlightedIdx === idx}
                        />
                    ))}
                </CardDeck>
            </div>

            {hasStarted && (
                <button
                    onClick={handleNextSpinClick}
                    disabled={isSpinning}
                    class={cn('primary-btn', css.nextRuneBtn)}
                >
                    {hasEnded ? 'Попробовать снова' : 'Еще карта'}
                </button>
            )}
        </>
    );
};

export default RandomCards;
