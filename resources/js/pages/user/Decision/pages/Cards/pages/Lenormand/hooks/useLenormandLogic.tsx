import {Lenormand} from '@/types/model';
import { useEffect, useReducer, useRef } from 'preact/hooks';

type RandomCardsState = {
    selectedCards: Lenormand[];
    cards: Lenormand[];
    highlightedIdx: number;
    hasStarted: boolean;
    isSpinning: boolean;
};

type RandomCardsAction =
    | { type: 'START_SPINNING' }
    | { type: 'STOP_SPINNING' }
    | { type: 'INCREMENT_INDEX' }
    | { type: 'ADD_SELECTED_CARD'; payload: Lenormand }
    | { type: 'RESET'; payload: Lenormand[] }
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
                    state.cards.length > 0
                        ? (state.highlightedIdx + 1) %
                          state.cards.length
                        : -1,
            };
        case 'ADD_SELECTED_CARD':
            return {
                ...state,
                selectedCards: [...state.selectedCards, action.payload],
                cards: state.cards.filter(
                    (card) => card.id !== action.payload.id,
                ),
                highlightedIdx: -1,
            };
        case 'SET_SELECTED_INDEX':
            return { ...state, highlightedIdx: action.payload };
        case 'RESET':
            return {
                cards: action.payload,
                selectedCards: [],
                hasStarted: false,
                highlightedIdx: -1,
                isSpinning: false,
            };
        default:
            return state;
    }
}

export function useLenormandLogic(
    initialCards: Lenormand[],
    adjustedAnimationDuration: number,
    isMotionEnabled: boolean,
    interactiveItems: any,
    prevInteractiveItems: any,
) {
    const [state, dispatch] = useReducer(carouselReducer, {
        cards: initialCards,
        selectedCards: [],
        hasStarted: false,
        highlightedIdx: -1,
        isSpinning: false,
    });

    const intervalRef = useRef<number | undefined>(undefined);
    const scrollConainerRef = useRef<HTMLDivElement>(null);

    const handleNext = () => dispatch({ type: 'INCREMENT_INDEX' });

    const startSpinning = () => {
        if (state.isSpinning) return;
        dispatch({ type: 'START_SPINNING' });
    };

    const handleSpinEnd = () => {
        clearInterval(intervalRef.current);
        dispatch({ type: 'STOP_SPINNING' });


        if (scrollConainerRef.current != null) {
            scrollConainerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    const reset = () => {
        prevInteractiveItems.value = [...interactiveItems.value];
        interactiveItems.value = [];
        dispatch({ type: 'RESET', payload: initialCards });
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
        hasEnded: false,
        scrollRef: scrollConainerRef,
    };
}
