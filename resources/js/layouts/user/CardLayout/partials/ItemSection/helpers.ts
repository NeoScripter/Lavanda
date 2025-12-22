import { ExperienceItem } from '@/types/model';

export const splitItemsBySlide = (
    items: ExperienceItem[],
    currentSlideId: number | null,
    isDesktop: boolean,
): { startingItems: ExperienceItem[]; lastItems: ExperienceItem[] } => {
    if (currentSlideId === null) {
        return { startingItems: items, lastItems: [] };
    }

    const findAlignedIndex = (baseIdx: number): number => {
        if (!isDesktop) return baseIdx;

        // Avoid first item if possible
        const adjustedIdx = baseIdx % 3 === 0 ? baseIdx + 1 : baseIdx;

        const isLastRow = adjustedIdx > items.length - 3;
        const isAboveFirstRow = adjustedIdx > 2;

        // Navigate to row start (multiple of 3)
        let idx = adjustedIdx;
        const direction = isLastRow && isAboveFirstRow ? -1 : 1;

        while (idx % 3 !== 0) {
            idx += direction;
        }

        return idx;
    };

    const baseIdx = items.findIndex((item) => item.id === currentSlideId);
    const splitIdx = findAlignedIndex(baseIdx);

    return {
        startingItems: items.slice(0, splitIdx),
        lastItems: items.slice(splitIdx),
    };
};

export const getRandomImage = (prev: number | null, length: number) => {
    let idx = Math.floor(Math.random() * length);

    while (idx === prev) {
        idx = Math.floor(Math.random() * length);
    }

    return idx;
};
