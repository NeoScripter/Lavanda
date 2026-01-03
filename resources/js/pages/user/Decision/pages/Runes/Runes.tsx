import ForegroundDkTiny from '@/assets/images/runes/foreground-dk-tiny.webp';
import ForegroundDk from '@/assets/images/runes/foreground-dk.webp';
import ForegroundMbTiny from '@/assets/images/runes/foreground-mb-tiny.webp';
import ForegroundMb from '@/assets/images/runes/foreground-mb.webp';
import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout/InteractiveLayout';
import { Rune } from '@/types/model';
import { usePage } from '@inertiajs/react';
import { useSignal } from '@preact/signals';
import { heading, intro } from './pageData';
import CategorySelector from './partials/CategorySelector/CategorySelector';
import ChosenRunes from './partials/ChosenRunes';
import RandomRunes from './partials/RandomRunes';
import css from './Runes.module.scss';

const Runes = () => {
    const { runes, categories } = usePage<{
        runes: Rune[];
        categories: string[];
    }>().props;

    const selectedCategory = useSignal(categories[0]);

    const handleCategorySelection = (newCategory: string) => {
        selectedCategory.value = newCategory;
    };

    return (
        <BreadCrumbLayout
            heading={heading}
            intro={intro}
            imgClass={css.heroForeground}
            withCards={true}
            fgImg={{
                dk: ForegroundDk,
                dkTiny: ForegroundDkTiny,
                tb: ForegroundDk,
                tbTiny: ForegroundDkTiny,
                mb: ForegroundMb,
                mbTiny: ForegroundMbTiny,
            }}
        >
            <InteractiveLayout
                btnLabels={['Случайный выбор', 'Выбрать самой']}
                components={[
                    () => (
                        <RandomRunes
                            selectedCategory={selectedCategory}
                            runes={runes}
                        />
                    ),
                    () => (
                        <ChosenRunes
                            selectedCategory={selectedCategory}
                            runes={runes}
                        />
                    ),
                ]}
            >
                <CategorySelector
                    selectedCategory={selectedCategory}
                    categoryList={categories}
                    onClick={handleCategorySelection}
                />
            </InteractiveLayout>
        </BreadCrumbLayout>
    );
};

export default Runes;
