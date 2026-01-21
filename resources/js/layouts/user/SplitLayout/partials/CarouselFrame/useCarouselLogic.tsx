import { useReducer, useRef } from 'preact/hooks';

type CarouselState = {
    isSpinning: boolean;
    selectedIndex: number;
};

type CarouselAction =
    | { type: 'START_SPINNING' }
    | { type: 'STOP_SPINNING' }
    | { type: 'INCREMENT_INDEX' }
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
        case 'SET_SELECTED_INDEX':
            return { ...state, selectedIndex: action.payload };
        case 'RESET':
            return {
                isSpinning: false,
                selectedIndex: 0,
            };
        default:
            return state;
    }
}

export function useCarouselLogic(
    length: number,
    adjustedAnimationDuration: number,
    isMotionEnabled: boolean,
) {
    const [state, dispatch] = useReducer(carouselReducer, {
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
                    dispatch({ type: 'STOP_SPINNING' });
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
                length;
            dispatch({ type: 'SET_SELECTED_INDEX', payload: newIndex });
            dispatch({ type: 'STOP_SPINNING' });
        }
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        ...state,
        startSpinning,
        reset,
    };
}
