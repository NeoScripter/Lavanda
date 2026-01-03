import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './CategorySelector.module.scss';
import { Signal } from '@preact/signals';

const CategorySelector: FC<
    NodeProps<{
        selectedCategory: Signal<string>;
        categoryList: string[];
        onClick: (newCategory: string) => void;
    }>
> = ({ selectedCategory, onClick, categoryList }) => {
    return (
        <div className={css.wrapper}>
            <p className={css.title}>Выберите тему для интерпретации</p>

            <ul className={css.btnWrapper}>
                {categoryList.map((category) => (
                    <SelectBtn
                        key={category}
                        category={category}
                        isActive={selectedCategory.value === category}
                        onClick={() => onClick(category)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CategorySelector;

const SelectBtn: FC<{
    isActive: boolean;
    category: string;
    onClick: () => void;
}> = ({ category, onClick, isActive }) => {
    return (
        <li>
            <button
                onClick={onClick}
                className={cn(
                    css.categoryBtn,
                    isActive && css.categoryBtnSelected,
                )}
            >
                {category}
            </button>
        </li>
    );
};
