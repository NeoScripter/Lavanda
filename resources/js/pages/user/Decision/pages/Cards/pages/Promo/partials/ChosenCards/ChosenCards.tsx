import BackDkTiny from '@/assets/images/cards/tarot/back-dk-tiny.webp';
import BackDk from '@/assets/images/cards/tarot/back-dk.webp';
import ArrowHint from '@/components/user/ui/ArrowHint';
import Card from '@/components/user/ui/Card';
import CardGrid from '@/components/user/ui/CardGrid/CardGrid';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Promo } from '@/types/model';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import PickedCards from '../PickedCards/PickedCards';
import css from './ChosenCards.module.scss';
import { useChosenCardLogic } from './useChosenCardLogic';

const ChosenCards = () => {
    const { cards } = usePage<{ cards: Promo[] }>().props;
    const { currentSlideId } = useCurrentSlideId();
    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    const cardLimit = currentSlideId.value ?? 1;

    const {
        selectedCards,
        hasEnded,
        handleSelectCard,
        handleRestart,
    } = useChosenCardLogic(
        cardLimit,
        cards,
        interactiveItems,
        prevInteractiveItems,
    );

    return (
        <>
            <Transition show={selectedCards.length !== cardLimit}>
                <div className={css.transitionWrapper}>
                    <div>
                        <p className={css.intro}>
                            Вы сами выбираете карту, которая откликается
                            сердцем. Этот способ помогает довериться интуиции и
                            увидеть собственный внутренний ответ.
                        </p>
                    </div>
                </div>
            </Transition>

            {hasEnded && <PickedCards
                cards={selectedCards}
                className={css.pickedCards}
            />}

            {!hasEnded && (
                <CardGrid>
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            shouldHover={true}
                            isFlipped={selectedCards.includes(card)}
                            isHighlighted={selectedCards.includes(card)}
                            backImgPath={BackDk}
                            backImgTinyPath={BackDkTiny}
                            onClick={() => handleSelectCard(card)}
                        />
                    ))}
                </CardGrid>
            )}

            {hasEnded && (
                <button
                    onClick={handleRestart}
                    className={cn('primary-btn', css.nextCardBtn)}
                >
                    Попробовать снова
                </button>
            )}

            <ArrowHint show={hasEnded} />
        </>
    );
};

export default ChosenCards;
