import BackDkTinyWebp from '@/assets/images/cards/promo/back-dk-tiny.webp';
import BackDk2xWebp from '@/assets/images/cards/promo/back-dk2x.webp';
import Card from '@/components/user/ui/Card';
import CardDeck from '@/components/user/ui/CardDeck/CardDeck';
import { useRandomCardsLogic } from '@/pages/user/Decision/pages/Cards/hooks/useRandomCardLogic';
import { Promo } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { signal } from '@preact/signals';
import PickedCard from '../PickedCard/PickedCard';
import css from './PromoCards.module.scss';

const ANIMATION_DURATION = 200;

const PromoCards = () => {
    const { cards } = usePage<{ cards: Promo[] }>().props;
    const interactiveItems = signal([]);

    const isMotionEnabled = checkMotionPreferences();

    const adjustedAnimationDuration = isMotionEnabled ? ANIMATION_DURATION : 0;
    const cardLimit = 1;

    const {
        faceDownCards,
        selectedCards,
        highlightedIdx,
        startSpinning,
        reset,
        hasStarted,
        isSpinning,
        hasEnded,
    } = useRandomCardsLogic(
        cards,
        cardLimit,
        adjustedAnimationDuration,
        isMotionEnabled,
        interactiveItems,
        [],
    );

    return (
        <>
            <PickedCard cards={selectedCards} />
            {!hasEnded && (
                <CardDeck
                    key="faceDownCards"
                    className={css.initialCards}
                    size={faceDownCards.length}
                >
                    {faceDownCards.map((card, idx) => (
                        <Card
                            key={card.id}
                            card={card}
                            backImgPath={BackDk2xWebp}
                            backImgTinyPath={BackDkTinyWebp}
                            hasHighlightedState={highlightedIdx === idx}
                        />
                    ))}
                </CardDeck>
            )}

            {!hasStarted && (
                <div class={cn(css.btnWrapper)}>
                    <button
                        className="primary-btn"
                        onClick={startSpinning}
                    >
                        Открыть карту
                    </button>
                    <p>Бесплатно. Без регистрации</p>
                </div>
            )}
        </>
    );
};

export default PromoCards;
