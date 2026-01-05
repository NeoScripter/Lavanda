import BackgroundDkTiny from '@/assets/images/random-runes/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/random-runes/background-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Rune } from '@/types/model';
import checkMotionPreferences from '@/utils/checkMotionPreferences';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { Signal } from '@preact/signals';
import { FC } from 'preact/compat';
import useFetchRuneCategories from '../../useFetchRuneCategories';
import Carousel from '../Carousel';
import PickedRunes from '../PickedRunes/PickedRunes';
import css from './RandomRunes.module.scss';
import { useCarouselLogic } from './useCarouselLogic';
import ArrowHint from '@/components/user/ui/ArrowHint';

const ANIMATION_DURATION = 750;

const RandomRunes: FC<{ runes: Rune[]; selectedCategory: Signal<string> }> = ({
    runes,
    selectedCategory,
}) => {
    const { currentSlideId } = useCurrentSlideId();
    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    const isMotionEnabled = checkMotionPreferences();

    const adjustedAnimationDuration = isMotionEnabled ? ANIMATION_DURATION : 0;
    const runeLimit = currentSlideId.value ?? 1;

    useFetchRuneCategories({
        selectedCategory: selectedCategory.value,
        runeLimit,
    });

    const {
        selectedRunes,
        selectedIndex,
        startSpinning,
        reset,
        hasStarted,
        hasEnded,
        isSpinning,
    } = useCarouselLogic(
        runes,
        runeLimit,
        adjustedAnimationDuration,
        isMotionEnabled,
        interactiveItems,
        prevInteractiveItems,
    );

    const handleNextRuneClick = () => {
        if (hasEnded) {
            reset();
        } else {
            startSpinning();
        }
    };
    return (
        <>
            <Transition show={!hasStarted}>
                <div className={css.transitionWrapper}>
                    <div>
                        <p class={css.intro}>
                            Руна открывается сама — как знак, который приходит
                            извне. Это словно довериться потоку и принять то,
                            что должно проявиться именно сейчас.
                        </p>
                        <button
                            onClick={startSpinning}
                            class={cn('primary-btn', css.actionBtn)}
                        >
                            Получить ответ
                        </button>
                    </div>
                </div>
            </Transition>

            {!hasEnded && (
                <div class={css.carouselContainer}>
                    <LazyImage
                        prtClass={css.bgParent}
                        imgClass={css.bgImage}
                        img={BackgroundDk}
                        tinyImg={BackgroundDkTiny}
                    />

                    <div
                        style={{
                            '--animation-duration':
                                adjustedAnimationDuration + 'ms',
                        }}
                        class={css.carousel}
                    >
                        <Carousel
                            items={runes}
                            selectedIndex={selectedIndex}
                        />
                    </div>
                </div>
            )}

            {hasStarted && (
                <button
                    onClick={handleNextRuneClick}
                    disabled={isSpinning}
                    class={cn('primary-btn', css.nextRuneBtn)}
                >
                    {hasEnded ? 'Попробовать снова' : 'Следующая руна'}
                </button>
            )}

            <PickedRunes runes={selectedRunes} />

            <ArrowHint show={hasEnded} />
        </>
    );
};

export default RandomRunes;
