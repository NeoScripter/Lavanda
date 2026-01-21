import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { router } from '@inertiajs/react';
import { FC } from 'preact/compat';
import css from './CategoryBtn.module.scss';

const CategoryBtn: FC<NodeProps<{ category: string }>> = ({
    className,
    category,
}) => {
    const handleClick = () => {
        router.visit(route('affirmations'), {
            only: ['affirmations'],
            data: {
                category: category,
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            className={cn(css.wrapper, className)}
        >
            {category}
        </button>
    );
};

export default CategoryBtn;
