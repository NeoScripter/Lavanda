import { MatchSet } from '@/types/model';
import { LenormandCard } from '../constants/lenormandCardData';

export default function matchCombos(
    cards: LenormandCard[],
    combos: MatchSet[],
): MatchSet[] {
    const cardIds = new Set(
        cards.filter((card) => card !== null).map((card) => card.id),
    );

    return combos.filter(({ ids }) => ids.every((id) => cardIds.has(id)));
}
