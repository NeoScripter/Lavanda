import { Rune } from '@/types/model';
import { useReducer } from 'preact/hooks';
import useFetchRuneCategories from '../../../useFetchRuneCategories';

// Types
type RuneSelectionState = {
    selectedRunes: Rune[];
};

type RuneSelectionAction =
    | { type: 'SELECT_RUNE'; payload: Rune }
    | { type: 'RESET' };

// Reducer
function runeSelectionReducer(
    state: RuneSelectionState,
    action: RuneSelectionAction,
): RuneSelectionState {
    switch (action.type) {
        case 'SELECT_RUNE':
            // Prevent duplicates
            if (state.selectedRunes.includes(action.payload)) {
                return state;
            }
            return {
                selectedRunes: [...state.selectedRunes, action.payload],
            };
        case 'RESET':
            return { selectedRunes: [] };
        default:
            return state;
    }
}

// Custom hook
export function useRuneSelection(
    runeLimit: number,
    interactiveItems: any,
    prevInteractiveItems: any,
    selectedCategory: string,
) {
    const [state, dispatch] = useReducer(runeSelectionReducer, {
        selectedRunes: [],
    });

    const hasEnded = state.selectedRunes.length === runeLimit;

    useFetchRuneCategories({ selectedCategory, runeLimit });

    const handleSelectRune = (rune: Rune) => {
        if (hasEnded) return;

        dispatch({ type: 'SELECT_RUNE', payload: rune });

        // Check if we've reached the limit after this selection
        const updatedRunes = [...state.selectedRunes, rune];
        if (updatedRunes.length === runeLimit) {
            interactiveItems.value = [...updatedRunes];
        }
    };

    const handleRestart = () => {
        prevInteractiveItems.value = [...interactiveItems.value];
        interactiveItems.value = [];
        dispatch({ type: 'RESET' });
    };

    return {
        selectedRunes: state.selectedRunes,
        hasEnded,
        handleSelectRune,
        handleRestart,
    };
}
