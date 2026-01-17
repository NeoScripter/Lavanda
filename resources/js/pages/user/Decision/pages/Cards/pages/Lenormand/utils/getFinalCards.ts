import { LenormandCard } from '../constants/lenormandCardData';
import isKeyCard from './isKeyCard';

export default function getFinalCards(cards: LenormandCard[], cols: number) {
    const keyCardIdx = cards.findIndex(
        (card) => card != null && isKeyCard(card.id),
    );
    if (keyCardIdx === -1) {
        throw new Error('Key card is not present among given cards');
    }
    cards = cards
        .filter((c) => c != null)
        .map((card) => {
            return { ...card, isFlipped: true };
        });

    const result: (LenormandCard | null)[] = [];
    const keyCardCol = getCardCol(keyCardIdx, cols);
    const keyCardRow = getCardRow(keyCardIdx, cols);
    const lastRow = getCardRow(cards.length - 1, cols);

    // Top-left corner
    result.push(null);

    // Card on top
    if (keyCardRow > 1) {
        result.push(cards[keyCardIdx - cols]);
    } else {
        result.push(null);
    }

    // Top-right corner
    result.push(null);

    // Card on the left
    if (keyCardCol > 1) {
        result.push(cards[keyCardIdx - 1]);
    } else {
        result.push(null);
    }

    // Key card in the center
    result.push(cards[keyCardIdx]);

    // Card on the right
    if (keyCardCol < cols) {
        result.push(cards[keyCardIdx + 1]);
    } else {
        result.push(null);
    }

    // Bottom-left corner
    result.push(null);

    // Card below
    if (keyCardRow < lastRow) {
        result.push(cards[keyCardIdx + cols]);
    } else {
        result.push(null);
    }

    // Bottom-right corner
    result.push(null);

    return result;
}

function getCardCol(idx: number, cols: number): number {
    return (idx % cols) + 1;
}

function getCardRow(idx: number, cols: number): number {
    return Math.floor(idx / cols) + 1;
}
