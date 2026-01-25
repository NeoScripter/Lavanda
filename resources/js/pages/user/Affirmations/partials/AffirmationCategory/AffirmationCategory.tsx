import AnimatedOutline from '@/components/user/ui/AnimatedOutline/AnimatedOutline';
import Paywall from '@/components/user/ui/Paywall';
import SplitLayout from '@/layouts/user/SplitLayout';
import { Auth } from '@/types/auth';
import { usePage } from '@inertiajs/react';
import { affirmationBg, affirmationCategoryIntro } from '../../pageData';
import CategoryBtn from '../CategoryBtn/CategoryBtn';
import css from './AffirmationCategory.module.scss';

const AffirmationCategory = () => {
    const { categories, auth } = usePage<{
        categories: string[];
        auth: Auth;
    }>().props;

    const isMember = auth.hasPremiumAccess;

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
                isMember ? (
                    <ul className={css.categoryBtns}>
                        {categories.map((category) => (
                            <CategoryBtn
                                key={category}
                                category={category}
                            />
                        ))}
                    </ul>
                ) : (
                    <Paywall />
                )
            }
        />
    );
};

export default AffirmationCategory;
