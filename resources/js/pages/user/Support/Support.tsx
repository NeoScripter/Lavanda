import HeartDkTinyWebp from '@/assets/images/support/heart-dk-tiny.webp';
import HeartDkWebp from '@/assets/images/support/heart-dk.webp';
import SplitLayout from '@/layouts/user/SplitLayout';
import CarouselFrame, {
    CarouselImage,
} from '@/layouts/user/SplitLayout/partials/CarouselFrame';
import { useCarouselLogic } from '@/layouts/user/SplitLayout/partials/CarouselFrame/useCarouselLogic';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import css from './Support.module.scss';
import { intro } from './pageData';

const itemImage: CarouselImage = {
    path: HeartDkWebp,
    tiny_path: HeartDkTinyWebp,
    alt: 'Пурпурное сердце, собранное из осколков стекла',
};

const ANIMATION_DURATION = 750;

const Support = () => {
    const isMotionEnabled = checkMotionPreferences();

    const adjustedAnimationDuration = isMotionEnabled ? ANIMATION_DURATION : 0;

    const { selectedIndex, startSpinning, reset, isSpinning } =
        useCarouselLogic(30, adjustedAnimationDuration, isMotionEnabled);

    return (
        <SplitLayout
            leftClassName={css.leftLayout}
            left={
                <>
                    <h1 className={css.mainHeading}>
                        Послание поддержки от автора
                    </h1>
                    <div
                        className={css.intro}
                        dangerouslySetInnerHTML={{ __html: intro }}
                    />
                    <button
                        onClick={startSpinning}
                        disabled={isSpinning}
                        class={cn('primary-btn', css.repeatBtn)}
                    >
                        Повторить
                    </button>
                </>
            }
            right={
                <>
                    <h2 className={css.songQuote}>
                        {' '}
                        Сделайте паузу, включите одну из записей и внимательно
                        послушайте — возможно, в этих словах вы услышите те
                        самые идеи и ответы, которые искали.{' '}
                    </h2>

                    <CarouselFrame
                        img={itemImage}
                        numItems={30}
                        selectedIndex={selectedIndex}
                        animationDuration={adjustedAnimationDuration}
                    />
                </>
            }
        />
    );
};

export default Support;
