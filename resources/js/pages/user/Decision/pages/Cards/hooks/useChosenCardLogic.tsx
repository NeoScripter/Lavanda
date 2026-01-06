import { Metaphoric, Promo, Tarot } from '@/types/model';
import { useReducer } from 'preact/hooks';

// Types
type CardSelectionState = {
    selectedCards: Tarot[] | Metaphoric[] | Promo[];
    faceDownCards: Tarot[] | Metaphoric[] | Promo[];
};

type CardSelectionAction =
    | { type: 'SELECT_CARD'; payload: Tarot | Metaphoric | Promo }
    | { type: 'RESET'; payload: Tarot[] | Metaphoric[] | Promo[] };

// Reducer
function cardSelectionReducer(
    state: CardSelectionState,
    action: CardSelectionAction,
): CardSelectionState {
    switch (action.type) {
        case 'SELECT_CARD':
            if (state.selectedCards.includes(action.payload)) {
                return state;
            }
            return {
                selectedCards: [...state.selectedCards, action.payload],
                faceDownCards: state.faceDownCards.filter(
                    (card) => card.id !== action.payload.id,
                ),
            };
        case 'RESET':
            return { selectedCards: [], faceDownCards: action.payload };
        default:
            return state;
    }
}

export function useChosenCardLogic(
    cardLimit: number,
    initialCards: Tarot[] | Metaphoric[] | Promo[],
    interactiveItems: any,
    prevInteractiveItems: any,
) {
    const [state, dispatch] = useReducer(cardSelectionReducer, {
        selectedCards: [],
        faceDownCards: initialCards,
    });

    const hasEnded = state.selectedCards.length === cardLimit;

    const handleSelectCard = (card: Tarot | Metaphoric | Promo) => {
        if (hasEnded) return;

        dispatch({ type: 'SELECT_CARD', payload: card });

        const updatedCards = [...state.selectedCards, card];
        if (updatedCards.length === cardLimit) {
            interactiveItems.value = [...updatedCards];
        }
    };

    const handleRestart = () => {
        prevInteractiveItems.value = [...interactiveItems.value];
        interactiveItems.value = [];
        dispatch({ type: 'RESET', payload: initialCards });
    };

    return {
        ...state,
        hasEnded,
        handleSelectCard,
        handleRestart,
    };
}
