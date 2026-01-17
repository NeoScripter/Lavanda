import { manKey, womanKey } from '../constants/lenormandCardData';

export default function isKeyCard(cardId: number) {
    return [manKey.id, womanKey.id].includes(cardId);
}
