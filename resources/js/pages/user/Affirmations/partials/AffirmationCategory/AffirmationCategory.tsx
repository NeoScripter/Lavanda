import AnimatedOutline from '@/components/user/ui/AnimatedOutline/AnimatedOutline';
import SplitLayout from '@/layouts/user/SplitLayout';
import { usePage } from '@inertiajs/react';
import { affirmationBg, affirmationCategoryIntro } from '../../pageData';
import CategoryBtn from '../CategoryBtn/CategoryBtn';
import css from './AffirmationCategory.module.scss';

const AffirmationCategory = () => {
    const { categories } = usePage<{
        categories: string[];
    }>().props;

    return (
        <SplitLayout
            leftClassName={css.leftLayout}
            bgImage={affirmationBg}
            left={{
                heading: (
                    <>
                        {' '}
                        Войти в нужный{' '}
                        <AnimatedOutline>настрой</AnimatedOutline>
                    </>
                ),
                intro: affirmationCategoryIntro,
            }}
            rightClassName={css.rightLayout}
            right={
                <ul className={css.categoryBtns}>
                    {categories.map((category) => (
                        <CategoryBtn
                            key={category}
                            category={category}
                        />
                    ))}
                </ul>
            }
        />
    );
};

export default AffirmationCategory;
