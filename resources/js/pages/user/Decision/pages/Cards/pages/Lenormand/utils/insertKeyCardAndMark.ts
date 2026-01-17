import {
    LenormandCard,
    manKey,
    womanKey,
} from '../constants/lenormandCardData';

export default function insertKeyCardAndMark(
    currentSlideId: number,
    initialCards: Omit<LenormandCard, 'isFlipped'>[],
) {
    const keyCard = currentSlideId === 1 ? manKey : womanKey;
    const randomIdx = Math.floor(Math.random() * initialCards.length);
    const completeCards = [
        ...initialCards.slice(0, randomIdx),
        keyCard,
        ...initialCards.slice(randomIdx),
    ];

    const assembledCards: LenormandCard[] = completeCards.map((card) => {
        return { ...card, isFlipped: false };
    });

    return assembledCards;
}
