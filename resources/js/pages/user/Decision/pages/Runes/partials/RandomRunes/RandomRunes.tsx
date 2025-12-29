import BackgroundDkTiny from '@/assets/images/random-runes/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/random-runes/background-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { useInterativeItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Rune } from '@/types/model';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { MoveDown } from 'lucide-preact';
import { FC } from 'preact/compat';
import { useEffect, useRef, useState } from 'preact/hooks';
import Carousel from '../Carousel';
import css from './RandomRunes.module.scss';

const ANIMATION_DURATION = 750;

const RandomRunes = () => {
    const { runes } = usePage<{ runes: Rune[] }>().props;
    const { currentSlideId } = useCurrentSlideId();
    const { interativeItems, prevInteractiveItems } = useInterativeItems();
    const [selectedRunes, setSelectedRunes] = useState<Rune[]>([]);
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const intervalRef = useRef<number | undefined>(undefined);
    const isMotionEnabled = window.matchMedia(
        '(prefers-reduced-motion: no-preference)',
    ).matches;

    const adjustedAnimationDuration = isMotionEnabled ? ANIMATION_DURATION : 0;

    const runeLimit = currentSlideId.value;

    const hasStarted = selectedRunes.length > 0 || isSpinning;
    const hasEnded = runeLimit === selectedRunes.length;

    const handleNext = () => setSelectedIndex((prev) => prev + 1);

    const startSpinning = () => {
        if (isSpinning) return;
        setIsSpinning(true);
        intervalRef.current = setInterval(() => {
            handleNext();
        }, adjustedAnimationDuration);

        if (isMotionEnabled) {
            setTimeout(
                () =>
                    setTimeout(
                        () => document.dispatchEvent(new Event('spinningEnd')),
                        1000,
                    ),
                4000 + Math.random() * 3000,
            );
        } else {
            setSelectedIndex(
                (prev) =>
                    Math.floor(prev + 6 + Math.random() * 8) % runes.length,
            );
            setTimeout(
                () => document.dispatchEvent(new Event('spinningEnd')),
                1000,
            );
        }
    };

    useEffect(() => {
        document.addEventListener('spinningEnd', handleSpinEnd);

        return () => document.removeEventListener('spinningEnd', handleSpinEnd);
    }, [selectedIndex]);

    const handleSpinEnd = () => {
        clearInterval(intervalRef.current);
        setIsSpinning(false);
        setSelectedRunes((prev) => {
            const newRunes = [...prev, runes[selectedIndex]];

            if (newRunes.length === runeLimit) {
                interativeItems.value = newRunes;
            }
            return newRunes;
        });
    };

    const reset = () => {
        prevInteractiveItems.value = [...interativeItems.value];
        interativeItems.value = [];
        setIsSpinning(false);
        setSelectedRunes([]);
        setSelectedIndex(0);
    };

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
                    class={cn('primary-btn', css.nextRuneBtn)}
                >
                    {hasEnded ? 'Попробовать снова' : 'Следующая руна'}
                </button>
            )}

            <PickedRunes runes={selectedRunes} />

            {hasEnded && (
                <div className={css.arrowHint}>
                    Расшифровка
                    <MoveDown className={css.arrowHintIcon} />
                </div>
            )}
        </>
    );
};

export default RandomRunes;

const PickedRunes: FC<{ runes: Rune[] }> = ({ runes }) => {
    if (runes.length === 0) return null;

    return (
        <div className={cn(css.pickedRunes, 'full-bleed')}>
            {runes.map((rune) => (
                <div key={rune.id}>
                    {' '}
                    {rune.front_image && (
                        <LazyImage
                            prtClass={css.runeWrapper}
                            imgClass={css.runeImg}
                            img={rune.front_image.path}
                            tinyImg={rune.front_image.tiny_path}
                            alt={rune.front_image.alt}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};
