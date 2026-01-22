import CarpetDkTinyWebp from '@/assets/images/affirmations/carpet-dk-tiny.webp';
import CarpetDkWebp from '@/assets/images/affirmations/carpet-dk.webp';
import SplitLayout from '@/layouts/user/SplitLayout';
import CarouselFrame, {
    CarouselImage,
} from '@/layouts/user/SplitLayout/partials/CarouselFrame';
import { useCarouselLogic } from '@/layouts/user/SplitLayout/partials/CarouselFrame/useCarouselLogic';
import { Affirmation } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { Link, usePage } from '@inertiajs/react';
import { affirmationBg, affirmationCarouselIntro } from '../../pageData';
import css from './AffirmationCarousel.module.scss';

const itemImage: CarouselImage = {
    path: CarpetDkWebp,
    tiny_path: CarpetDkTinyWebp,
    alt: 'Магический иероглиф',
};

const ANIMATION_DURATION = 750;

const AffirmationCarousel = () => {
    const { affirmations, category } = usePage<{
        affirmations: Affirmation[];
        category: string;
    }>().props;

    const isMotionEnabled = checkMotionPreferences();

    const adjustedAnimationDuration = isMotionEnabled ? ANIMATION_DURATION : 0;

    const { selectedIndex, startSpinning, isSpinning } = useCarouselLogic(
        affirmations.length,
        adjustedAnimationDuration,
        isMotionEnabled,
    );

    const currentAffirmation =
        selectedIndex !== -1
            ? affirmations[selectedIndex % affirmations.length]
            : null;

    return (
        <SplitLayout
            bgImage={affirmationBg}
            leftClassName={css.leftLayout}
            left={{
                heading: `Аффирмация на день: ${category?.toUpperCase()}`,
                intro: affirmationCarouselIntro,
                btns: (
                    <>
                        <button
                            onClick={startSpinning}
                            disabled={isSpinning}
                            class={cn('primary-btn', css.repeatBtn)}
                        >
                            {selectedIndex === -1 ? 'Начать' : 'Повторить'}
                        </button>
                        <Link
                            className={css.changeCategoryBtn}
                            href={route('affirmations')}
                        >
                            Сменить тему
                        </Link>
                    </>
                ),
            }}
            rightClassName={css.rightLayout}
            right={
                <div>
                    <CarouselFrame
                        img={itemImage}
                        numItems={affirmations.length * 3}
                        selectedIndex={selectedIndex}
                        animationDuration={adjustedAnimationDuration}
                    />

                    {currentAffirmation && !isSpinning && (
                        <p className={css.quote}>{currentAffirmation.quote}</p>
                    )}
                </div>
            }
        />
    );
};

export default AffirmationCarousel;
