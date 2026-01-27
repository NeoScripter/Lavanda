import {
    InteractiveItem,
    useInteractiveItems,
} from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useEffect, useState } from 'preact/compat';

type Props = {
    selectedCategory: string;
    runeLimit: number;
};

export type RuneCategoriesMap = Record<number, Record<string, string>>;

const updateRunes = (
    runes: InteractiveItem[],
    categoryData: RuneCategoriesMap,
    selectedCategory: string,
): InteractiveItem[] => {
    if (!selectedCategory || !Array.isArray(runes)) {
        return [];
    }

    return [...runes].map((rune) => {
        const html = categoryData?.[Number(rune?.id)]?.[selectedCategory];

        if (!html) {
            console.warn(
                `Missing html for rune ${rune?.id}, category: ${selectedCategory}`,
            );
            return rune;
        }

        return { ...rune, html };
    });
};

export default function useFetchRuneCategories({
    selectedCategory,
    runeLimit,
}: Props) {
    const { interactiveItems, isLoading } = useInteractiveItems();
    const [categoryData, setCategoryData] = useState<RuneCategoriesMap | null>(
        null,
    );

    useEffect(() => {
        if (interactiveItems.value.length === 0) setCategoryData(null);
        if (interactiveItems.value.length !== runeLimit) return;

        if (categoryData != null) {
            const updatedRunes = updateRunes(
                interactiveItems.value,
                categoryData,
                selectedCategory,
            );
            interactiveItems.value = updatedRunes;
            return;
        }

        (async () => {
            isLoading.value = true;

            try {
                const params = new URLSearchParams({
                    selectedRuneIds: interactiveItems.value
                        .map((r) => r.id)
                        .join(','),
                });
                const res = await fetch(`/api/rune-categories?${params}`);

                if (!res.ok) throw new Error('Request failed');

                const data = await res.json();
                setCategoryData(data);

                const updatedRunes = updateRunes(
                    interactiveItems.value,
                    data,
                    selectedCategory,
                );
                interactiveItems.value = updatedRunes;
            } catch (e) {
                console.error(e);
            } finally {
                isLoading.value = false;
            }
        })();
    }, [selectedCategory, runeLimit, interactiveItems.value.length]);
}
