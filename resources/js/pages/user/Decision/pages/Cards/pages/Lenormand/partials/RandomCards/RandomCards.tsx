import BackDkTiny from '@/assets/images/cards/lenormand/lenormand-back-dk-tiny.webp';
import BackDk from '@/assets/images/cards/lenormand/lenormand-back-dk.webp';
import ArrowHint from '@/components/user/ui/ArrowHint';
import Card from '@/components/user/ui/Card';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { LenormandCard } from '../../constants/lenormandCardData';
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
            <Transition show={!hasStarted}>
                <div className={css.transitionWrapper}>
                    <div>
                        <p class={css.intro}>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
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
