import { Metaphoric, Promo, Tarot } from '@/types/model';
import { useEffect, useReducer, useRef } from 'preact/hooks';

type RandomCardsState = {
    selectedCards: Tarot[] | Metaphoric[] | Promo[];
    faceDownCards: Tarot[] | Metaphoric[] | Promo[];
    highlightedIdx: number;
    hasStarted: boolean;
    isSpinning: boolean;
};

type RandomCardsAction =
    | { type: 'START_SPINNING' }
    | { type: 'STOP_SPINNING' }
    | { type: 'INCREMENT_INDEX' }
    | { type: 'ADD_SELECTED_CARD'; payload: Tarot | Metaphoric | Promo }
    | { type: 'RESET'; payload: Tarot[] | Metaphoric[] | Promo[] }
    | { type: 'SET_SELECTED_INDEX'; payload: number };

// Reducer
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
                highlightedIdx: 0,
            };
        case 'STOP_SPINNING':
            return { ...state, isSpinning: false };
        case 'INCREMENT_INDEX':
            return {
                ...state,
                highlightedIdx:
                    state.faceDownCards.length > 0
                        ? (state.highlightedIdx + 1) %
                          state.faceDownCards.length
                        : -1,
            };
        case 'ADD_SELECTED_CARD':
            return {
                ...state,
                selectedCards: [...state.selectedCards, action.payload],
                faceDownCards: state.faceDownCards.filter(
                    (card) => card.id !== action.payload.id,
                ),
                highlightedIdx: -1,
            };
        case 'SET_SELECTED_INDEX':
            return { ...state, highlightedIdx: action.payload };
        case 'RESET':
            return {
                faceDownCards: action.payload,
                selectedCards: [],
                hasStarted: false,
                highlightedIdx: -1,
                isSpinning: false,
            };
        default:
            return state;
    }
}

export function useRandomCardsLogic(
    cards: Tarot[]| Metaphoric[] | Promo[],
    cardLimit: number,
    adjustedAnimationDuration: number,
    isMotionEnabled: boolean,
    interactiveItems: any,
    prevInteractiveItems: any,
    randomFactor?: number
) {
    const [state, dispatch] = useReducer(carouselReducer, {
        faceDownCards: cards,
        selectedCards: [],
        hasStarted: false,
        highlightedIdx: -1,
        isSpinning: false,
    });

    const intervalRef = useRef<number | undefined>(undefined);

    const handleNext = () => dispatch({ type: 'INCREMENT_INDEX' });

    const startSpinning = () => {
        if (state.isSpinning) return;
        dispatch({ type: 'START_SPINNING' });

        if (isMotionEnabled) {
            let duration = 50;
            let extraDuration = Math.floor(Math.random() * 10);
            const maxDuration = adjustedAnimationDuration;

            const spin = () => {
                if (duration >= maxDuration) {
                    if (intervalRef.current) {
                        clearTimeout(intervalRef.current);
                    }
                    setTimeout(
                        () => document.dispatchEvent(new Event('spinningEnd')),
                        1000,
                    );
                } else {
                    handleNext();
                    duration = Math.min(
                        maxDuration,
                        duration + 5 + extraDuration,
                    );
                    intervalRef.current = setTimeout(spin, duration);
                }
            };

            spin();
        } else {
            const factor = randomFactor != null ? randomFactor : 8;
            const newIndex =
                Math.floor(state.highlightedIdx + 15 + Math.random() * factor) %
                state.faceDownCards.length;
            dispatch({ type: 'SET_SELECTED_INDEX', payload: newIndex });
            setTimeout(
                () => document.dispatchEvent(new Event('spinningEnd')),
                1000,
            );
        }
    };

    const handleSpinEnd = () => {
        clearInterval(intervalRef.current);
        dispatch({ type: 'STOP_SPINNING' });

        const selectedTarot =
            cards[
                state.highlightedIdx %
                    (cards.length - state.selectedCards.length)
            ];
        dispatch({ type: 'ADD_SELECTED_CARD', payload: selectedTarot });

        const newTarots = [...state.selectedCards, selectedTarot];
        if (newTarots.length === cardLimit) {
            interactiveItems.value = newTarots;
        }
    };

    const reset = () => {
        prevInteractiveItems.value = [...interactiveItems.value];
        interactiveItems.value = [];
        dispatch({ type: 'RESET', payload: cards });
    };

    useEffect(() => {
        document.addEventListener('spinningEnd', handleSpinEnd);
        return () => document.removeEventListener('spinningEnd', handleSpinEnd);
    }, [state.highlightedIdx, state.selectedCards.length]);

    return {
        ...state,
        startSpinning,
        reset,
        hasStarted: state.selectedCards.length > 0 || state.hasStarted,
        hasEnded: cardLimit === state.selectedCards.length,
        faceDownCardLength: cards.length - state.selectedCards.length,
    };
}
