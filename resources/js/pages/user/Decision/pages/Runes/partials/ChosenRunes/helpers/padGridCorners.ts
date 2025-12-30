import { Rune } from '@/types/model';
import isNearCorner from './isNearCorner';

export default function padGridCorners(
    runes: Rune[],
    rows: number,
    cols: number,
) {
    const totalCells = cols * rows;

    const newRunes = [];
    let runeIndex = 0;

    for (let gridIndex = 0; gridIndex < totalCells; gridIndex++) {
        if (isNearCorner(gridIndex, cols, rows)) {
            newRunes.push(null);
        } else {
            if (runeIndex < runes.length) {
                newRunes.push(runes[runeIndex]);
                runeIndex++;
            }
        }
    }

    return newRunes;
}
