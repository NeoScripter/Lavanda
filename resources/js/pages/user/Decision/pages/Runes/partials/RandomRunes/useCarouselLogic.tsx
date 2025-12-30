import { Rune } from '@/types/model';
import { useEffect, useReducer, useRef } from 'preact/hooks';

type CarouselState = {
    selectedRunes: Rune[];
    isSpinning: boolean;
    selectedIndex: number;
};

type CarouselAction =
    | { type: 'START_SPINNING' }
    | { type: 'STOP_SPINNING' }
    | { type: 'INCREMENT_INDEX' }
    | { type: 'ADD_SELECTED_RUNE'; payload: Rune }
    | { type: 'RESET' }
    | { type: 'SET_SELECTED_INDEX'; payload: number };

// Reducer
function carouselReducer(
    state: CarouselState,
    action: CarouselAction,
): CarouselState {
    switch (action.type) {
        case 'START_SPINNING':
            return { ...state, isSpinning: true };
        case 'STOP_SPINNING':
            return { ...state, isSpinning: false };
        case 'INCREMENT_INDEX':
            return { ...state, selectedIndex: state.selectedIndex + 1 };
        case 'ADD_SELECTED_RUNE':
            return {
                ...state,
                selectedRunes: [...state.selectedRunes, action.payload],
            };
        case 'SET_SELECTED_INDEX':
            return { ...state, selectedIndex: action.payload };
        case 'RESET':
            return {
                selectedRunes: [],
                isSpinning: false,
                selectedIndex: 0,
            };
        default:
            return state;
    }
}

export function useCarouselLogic(
    runes: Rune[],
    runeLimit: number,
    adjustedAnimationDuration: number,
    isMotionEnabled: boolean,
    interativeItems: any,
    prevInteractiveItems: any,
) {
    const [state, dispatch] = useReducer(carouselReducer, {
        selectedRunes: [],
        isSpinning: false,
        selectedIndex: 0,
    });

    const intervalRef = useRef<number | undefined>(undefined);

    const handleNext = () => dispatch({ type: 'INCREMENT_INDEX' });

    const startSpinning = () => {
        if (state.isSpinning) return;
        dispatch({ type: 'START_SPINNING' });

        if (isMotionEnabled) {
            let duration = 50;
            let extraDuration = Math.floor(Math.random() * 20);
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
                        duration + 30 + extraDuration,
                    );
                    intervalRef.current = setTimeout(spin, duration);
                }
            };

            spin();
        } else {
            const newIndex =
                Math.floor(state.selectedIndex + 6 + Math.random() * 8) %
                runes.length;
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

        const selectedRune = runes[state.selectedIndex % runes.length];
        dispatch({ type: 'ADD_SELECTED_RUNE', payload: selectedRune });

        const newRunes = [...state.selectedRunes, selectedRune];
        if (newRunes.length === runeLimit) {
            interativeItems.value = newRunes;
        }
    };

    const reset = () => {
        prevInteractiveItems.value = [...interativeItems.value];
        interativeItems.value = [];
        dispatch({ type: 'RESET' });
    };

    useEffect(() => {
        document.addEventListener('spinningEnd', handleSpinEnd);
        return () => document.removeEventListener('spinningEnd', handleSpinEnd);
    }, [state.selectedIndex, state.selectedRunes.length]);

    return {
        ...state,
        startSpinning,
        reset,
        hasStarted: state.selectedRunes.length > 0 || state.isSpinning,
        hasEnded: runeLimit === state.selectedRunes.length,
    };
}
