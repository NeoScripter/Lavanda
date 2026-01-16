import LenormandKeyManDkTinyWebp from '@/assets/images/cards/lenormand/lenormand-key-man-dk-tiny.webp';
import LenormandKeyManDkWebp from '@/assets/images/cards/lenormand/lenormand-key-man-dk.webp';
import LenormandKeyWomanTinyDkWebp from '@/assets/images/cards/lenormand/lenormand-key-woman-dk-tiny.webp';
import LenormandKeyWomanDkWebp from '@/assets/images/cards/lenormand/lenormand-key-woman-dk.webp';
import { Lenormand } from '@/types/model';
import { useEffect, useReducer, useRef } from 'preact/hooks';

type LenormandCard = Lenormand & {
    isFlipped: boolean;
};

type SurroundingCards = {
    top: LenormandCard | null;
    right: LenormandCard | null;
    bottom: LenormandCard | null;
    left: LenormandCard | null;
};

const manKey: Lenormand = {
    id: 167,
    name: 'ManKey',
    front_image: {
        id: 257,
        path: LenormandKeyManDkWebp,
        tiny_path: LenormandKeyManDkTinyWebp,
        alt: 'Мужской портрет в викторианском стиле: профиль молодого мужчины в классическом костюме с жилетом и галстуком, окружённого ветвями сирени.',
        imageable_id: 222,
        imageable_type: '',
        type: '',
    },
    body: '',
    advice: '',
};

const womanKey: Lenormand = {
    id: 147,
    name: 'WomanKey',
    front_image: {
        id: 267,
        path: LenormandKeyWomanDkWebp,
        tiny_path: LenormandKeyWomanTinyDkWebp,
        alt: 'Женский портрет в викторианском стиле: профиль молодой женщины с собранными волосами, украшенными сиренью, в светлом платье с кружевным воротником и букетом сирени.',
        imageable_id: 232,
        imageable_type: '',
        type: '',
    },
    body: '',
    advice: '',
};

type RandomCardsState = {
    cards: LenormandCard[];
    keyCardIdx: number;
    highlightedIdx: number;
    hasStarted: boolean;
    isSpinning: boolean;
};

type RandomCardsAction =
    | { type: 'START_SPINNING' }
    | { type: 'STOP_SPINNING' }
    | { type: 'FLIP_NEXT_CARD' }
    | { type: 'FLIP_ALL_CARDS' }
    | { type: 'HIGHLIGHT_KEY_CARD' }
    | {
          type: 'RESET';
          payload: { cards: LenormandCard[]; keyCardIdx: number };
      };

// Helper function to get surrounding cards
function getSurroundingCards(
    cards: LenormandCard[],
    keyIdx: number,
    cardsPerRow: number,
): SurroundingCards {
    const totalCards = cards.length;

    // Top card
    const topIdx = keyIdx - cardsPerRow;
    const top = topIdx >= 0 ? cards[topIdx] : null;

    // Bottom card
    const bottomIdx = keyIdx + cardsPerRow;
    const bottom = bottomIdx < totalCards ? cards[bottomIdx] : null;

    // Left card (check if not at leftmost position in row)
    const leftIdx = keyIdx - 1;
    const isLeftmostInRow = keyIdx % cardsPerRow === 0;
    const left = !isLeftmostInRow && leftIdx >= 0 ? cards[leftIdx] : null;

    // Right card (check if not at rightmost position in row)
    const rightIdx = keyIdx + 1;
    const isRightmostInRow = (keyIdx + 1) % cardsPerRow === 0;
    const right =
        !isRightmostInRow && rightIdx < totalCards ? cards[rightIdx] : null;

    return { top, right, bottom, left };
}

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
            };
        case 'STOP_SPINNING':
            return { ...state, isSpinning: false };

        case 'FLIP_NEXT_CARD':
            const firstClosedIdx = state.cards.findIndex(
                (card) => !card.isFlipped,
            );
            if (firstClosedIdx === -1) return state;

            return {
                ...state,
                cards: state.cards.map((card, idx) =>
                    idx === firstClosedIdx
                        ? { ...card, isFlipped: true }
                        : card,
                ),
            };

        case 'FLIP_ALL_CARDS':
            return {
                ...state,
                cards: state.cards.map((card) => ({
                    ...card,
                    isFlipped: true,
                })),
            };

        case 'HIGHLIGHT_KEY_CARD':
            return {
                ...state,
                highlightedIdx: state.keyCardIdx,
                isSpinning: false,
            };

        case 'RESET':
            return {
                cards: action.payload.cards,
                keyCardIdx: action.payload.keyCardIdx,
                hasStarted: false,
                highlightedIdx: -1,
                isSpinning: false,
            };
        default:
            return state;
    }
}

export function useLenormandLogic(
    currentSlideId: number,
    initialCards: Lenormand[],
    cardsPerRow: number,
    adjustedAnimationDuration: number,
    isMotionEnabled: boolean,
    interactiveItems: any,
    prevInteractiveItems: any,
) {
    const keyCard = currentSlideId === 1 ? manKey : womanKey;
    const randomIdx = Math.floor(Math.random() * initialCards.length);
    const completeCards = [
        ...initialCards.slice(0, randomIdx),
        keyCard,
        ...initialCards.slice(randomIdx),
    ];

    const markedCards: LenormandCard[] = completeCards.map((card) => {
        return { ...card, isFlipped: false };
    });

    const [state, dispatch] = useReducer(carouselReducer, {
        cards: markedCards,
        keyCardIdx: randomIdx,
        hasStarted: false,
        highlightedIdx: -1,
        isSpinning: false,
    });

    const intervalRef = useRef<number | undefined>(undefined);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const startSpinning = () => {
        if (state.isSpinning) return;
        dispatch({ type: 'START_SPINNING' });

        if (isMotionEnabled) {
            // Flip cards one at a time with constant delay
            const delay = 100;

            const flipNext = () => {
                const hasUnflipped = state.cards.some(
                    (card) => !card.isFlipped,
                );

                if (!hasUnflipped) {
                    setTimeout(() => {
                        dispatch({ type: 'HIGHLIGHT_KEY_CARD' });
                        scrollContainerRef.current?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        });
                    }, 500);
                    return;
                }

                dispatch({ type: 'FLIP_NEXT_CARD' });
                intervalRef.current = setTimeout(flipNext, delay);
            };

            flipNext();
        } else {
            // Motion disabled: flip all cards immediately
            dispatch({ type: 'FLIP_ALL_CARDS' });
            setTimeout(() => {
                dispatch({ type: 'HIGHLIGHT_KEY_CARD' });
                scrollContainerRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }, 500);
        }
    };

    const reset = () => {
        clearTimeout(intervalRef.current);
        prevInteractiveItems.value = [...interactiveItems.value];
        interactiveItems.value = [];

        const newRandomIdx = Math.floor(Math.random() * initialCards.length);
        const newCompleteCards = [
            ...initialCards.slice(0, newRandomIdx),
            keyCard,
            ...initialCards.slice(newRandomIdx),
        ];

        const newMarkedCards: LenormandCard[] = newCompleteCards.map(
            (card) => ({
                ...card,
                isFlipped: false,
            }),
        );

        dispatch({
            type: 'RESET',
            payload: {
                cards: newMarkedCards,
                keyCardIdx: newRandomIdx,
            },
        });
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearTimeout(intervalRef.current);
            }
        };
    }, []);

    const allFlipped = state.cards.every((card) => card.isFlipped);
    const hasEnded = allFlipped && state.highlightedIdx !== -1;

    // Get surrounding cards of the key card
    const surroundingCards = getSurroundingCards(
        state.cards,
        state.keyCardIdx,
        cardsPerRow,
    );

    return {
        cards: state.cards,
        keyCardIdx: state.keyCardIdx,
        highlightedIdx: state.highlightedIdx,
        surroundingCards,
        isSpinning: state.isSpinning,
        startSpinning,
        reset,
        hasStarted: state.hasStarted,
        hasEnded,
        scrollRef: scrollContainerRef,
    };
}
