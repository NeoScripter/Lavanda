import { useEffect, useReducer, useRef } from 'preact/hooks';
import { LenormandCard } from '../constants/lenormandCardData';
import getFinalCards from '../utils/getFinalCards';
import insertKeyCardAndMark from '../utils/insertKeyCardAndMark';
import isKeyCard from '../utils/isKeyCard';

const ANIMATION_DURATION = 200;

type RandomCardsState = {
    cards: LenormandCard[];
    hasStarted: boolean;
    allFlipped: boolean;
    hasEnded: boolean;
    isSpinning: boolean;
};

type RandomCardsAction =
    | { type: 'START_SPINNING' }
    | { type: 'STOP_SPINNING'; payload: LenormandCard[] }
    | { type: 'FLIP_NEXT_CARD' }
    | { type: 'FLIP_ALL_CARDS' }
    | { type: 'SHOW_SELECTED' }
    | {
          type: 'RESET';
          payload: LenormandCard[];
      };

function carouselReducer(
    state: RandomCardsState,
    action: RandomCardsAction,
): RandomCardsState {
    switch (action.type) {
        case 'START_SPINNING':
            return {
                ...state,
                hasStarted: true,
                isSpinning: true,
            };
        case 'STOP_SPINNING':
            return {
                ...state,
                isSpinning: false,
                cards: action.payload,
                allFlipped: true,
                hasEnded: true,
            };

        case 'FLIP_NEXT_CARD':
            const firstClosedIdx = state.cards.findIndex(
                (card) => card != null && !card.isFlipped,
            );
            if (firstClosedIdx === -1) return state;

            return {
                ...state,
                cards: state.cards
                    .filter((card) => card != null)
                    .map((card, idx) =>
                        idx === firstClosedIdx
                            ? { ...card, isFlipped: true }
                            : card,
                    ),
            };

        case 'FLIP_ALL_CARDS':
            return {
                ...state,
                cards: state.cards
                    .filter((card) => card != null)
                    .map((card) => ({
                        ...card,
                        isFlipped: true,
                    })),
                allFlipped: true,
            };

        case 'RESET':
            return {
                cards: action.payload,
                hasStarted: false,
                allFlipped: false,
                hasEnded: false,
                isSpinning: false,
            };
        default:
            return state;
    }
}

export function useLenormandLogic(
    currentSlideId: number,
    initialCards: Omit<LenormandCard, 'isFlipped'>[],
    cardsPerRow: number,
    isMotionEnabled: boolean,
    interactiveItems: any,
    prevInteractiveItems: any,
) {
    const [state, dispatch] = useReducer(carouselReducer, {
        cards: insertKeyCardAndMark(currentSlideId, initialCards),
        hasStarted: false,
        hasEnded: false,
        allFlipped: false,
        isSpinning: false,
    });

    const intervalRef = useRef<number | undefined>(undefined);
    const scrollContainerRef = useRef<HTMLUListElement>(null);

    const startSpinning = () => {
        if (state.isSpinning) return;
        dispatch({ type: 'START_SPINNING' });

        setTimeout(() => {
            scrollContainerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }, 600);

        if (isMotionEnabled) {
            let flippedCount = 0;
            const totalCards = state.cards.filter(
                (card) => card != null,
            ).length;

            const flipNext = () => {
                if (flippedCount >= totalCards) {
                    setTimeout(() => {
                        document.dispatchEvent(new Event('spinningEnd'));
                    }, 1500);
                    return;
                }

                dispatch({ type: 'FLIP_NEXT_CARD' });
                flippedCount++;
                intervalRef.current = setTimeout(flipNext, ANIMATION_DURATION);
            };

            flipNext();
        } else {
            setTimeout(() => {
                dispatch({ type: 'FLIP_ALL_CARDS' });
                document.dispatchEvent(new Event('spinningEnd'));
            }, 500);
        }
    };

    const reset = () => {
        clearTimeout(intervalRef.current);
        prevInteractiveItems.value = [...interactiveItems.value];
        interactiveItems.value = [];

        dispatch({
            type: 'RESET',
            payload: insertKeyCardAndMark(currentSlideId, initialCards),
        });
    };

    useEffect(() => {
        const handleSpinEnd = () => {
            clearInterval(intervalRef.current);
            const finalCards = getFinalCards(state.cards, cardsPerRow);
            dispatch({ type: 'STOP_SPINNING', payload: finalCards });

            scrollContainerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            const surroundingCards = finalCards.filter(
                (card) => card != null && !isKeyCard(card.id),
            );

            interactiveItems.value = surroundingCards;
            prevInteractiveItems.value = surroundingCards;
        };

        document.addEventListener('spinningEnd', handleSpinEnd);
        return () => document.removeEventListener('spinningEnd', handleSpinEnd);
    }, [state.cards, cardsPerRow, scrollContainerRef.current]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearTimeout(intervalRef.current);
            }
        };
    }, []);

    return {
        ...state,
        startSpinning,
        reset,
        scrollRef: scrollContainerRef,
    };
}
