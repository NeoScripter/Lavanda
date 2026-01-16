import BackDkTiny from '@/assets/images/cards/lenormand/lenormand-back-dk-tiny.webp';
import BackDk from '@/assets/images/cards/lenormand/lenormand-back-dk.webp';
import ArrowHint from '@/components/user/ui/ArrowHint';
import Card from '@/components/user/ui/Card';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Lenormand } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { useLenormandLogic } from '../../hooks/useLenormandLogic';
import css from './RandomCards.module.scss';
// import LenormandKeyManDkTinyWebp from "@/assets/images/cards/lenormand/lenormand-key-man-dk-tiny.webp";
// import LenormandKeyManDkAvif from "@/assets/images/cards/lenormand/lenormand-key-man-dk.avif";
// import LenormandKeyManDkWebp from "@/assets/images/cards/lenormand/lenormand-key-man-dk.webp";
// import LenormandKeyWomanDkTinyWebp from "@/assets/images/cards/lenormand/lenormand-key-woman-dk-tiny.webp";
// import LenormandKeyWomanDkAvif from "@/assets/images/cards/lenormand/lenormand-key-woman-dk.avif";
// import LenormandKeyWomanDkWebp from "@/assets/images/cards/lenormand/lenormand-key-woman-dk.webp";

const ANIMATION_DURATION = 200;

const RandomCards = () => {
    const { cards: initialCards } = usePage<{ cards: Lenormand[] }>().props;

    const isMotionEnabled = checkMotionPreferences();

    const { currentSlideId } = useCurrentSlideId();
    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    const adjustedAnimationDuration = isMotionEnabled ? ANIMATION_DURATION : 0;

    const { hasEnded, hasStarted, isSpinning, reset, startSpinning, cards } =
        useLenormandLogic(
            initialCards,
            adjustedAnimationDuration,
            isMotionEnabled,
            interactiveItems,
            prevInteractiveItems,
        );

    const handleNextSpinClick = () => {
        if (hasEnded) {
            reset();
        } else {
            startSpinning();
        }
    };

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

            <ul className={cn(css.cardGrid)}>
                {cards.map((card, idx) => (
                    <Card
                        key={card.id}
                        card={card}
                        backImgPath={BackDk}
                        backImgTinyPath={BackDkTiny}
                        className={css.lenormandCard}
                        // isHighlighted={highlightedIdx === idx}
                    />
                ))}
            </ul>

            {hasStarted && (
                <button
                    onClick={handleNextSpinClick}
                    disabled={isSpinning}
                    class={cn('primary-btn', css.nextRuneBtn)}
                >
                    {hasEnded ? 'Попробовать снова' : `Начать`}
                </button>
            )}

            <ArrowHint show={hasEnded} />
        </>
    );
};

export default RandomCards;
