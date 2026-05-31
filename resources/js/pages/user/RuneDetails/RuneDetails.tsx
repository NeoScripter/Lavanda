import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import {
    InteractiveItemsProvider,
    useInteractiveItems,
} from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import ItemsDisplay from '@/layouts/user/InteractiveLayout/partials/ItemsDisplay';
import { Rune } from '@/types/model';
import { Head, router, usePage } from '@inertiajs/react';
import { useSignal } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import CategorySelector from '../Decision/pages/Runes/partials/CategorySelector';
import css from './RuneDetails.module.scss';

const RuneDetails = () => {
    return (
        <AppLayout
            variation="light"
            className={css.layout}
        >
            <Head title="Трактование рун" />

            <div className={css.wrapper}>
                <InteractiveItemsProvider>
                    <ItemWrapper />
                </InteractiveItemsProvider>
            </div>
        </AppLayout>
    );
};

export default RuneDetails;

const ItemWrapper = () => {
    const { runes, categories } = usePage<{
        runes: Rune[];
        categories: string[];
    }>().props;

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    const selectedCategory = useSignal(
        params.get('category') ?? (categories.length > 0 ? categories[0] : ''),
    );

    const handleCategorySelection = (newCategory: string) => {
        selectedCategory.value = newCategory;
        router.visit(window.location.href, {
            method: 'get',
            data: {
                category: newCategory,
            },
        });
    };
    const { interactiveItems } = useInteractiveItems();

    useEffect(() => {
        interactiveItems.value = runes;
    }, [selectedCategory.value]);

    return (
        <>
            <CategorySelector
                selectedCategory={selectedCategory}
                categoryList={categories}
                onClick={handleCategorySelection}
            />
            <div className={css.itemWrapper}>
                <ItemsDisplay />
            </div>
        </>
    );
};
