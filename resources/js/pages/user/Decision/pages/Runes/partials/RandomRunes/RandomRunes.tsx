import BackgroundDkTiny from '@/assets/images/random-runes/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/random-runes/background-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Rune } from '@/types/model';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { MoveDown } from 'lucide-preact';
import { FC } from 'preact/compat';
import { useState } from 'preact/hooks';
import Carousel from '../Carousel';
import css from './RandomRunes.module.scss';

const RandomRunes = () => {
    const { runes } = usePage<{ runes: Rune[] }>().props;
    const { currentSlideId } = useCurrentSlideId();
    const [selectedRunes, setSelectedRunes] = useState<Rune[]>([]);
    const [isSpinning, setIsSpinning] = useState(false);
    const runeLimit = currentSlideId.value;

    const hasStarted = selectedRunes.length > 0 || isSpinning;
    const hasEnded = runeLimit === selectedRunes.length;

    return (
        <>
            {!hasStarted && (
                <p class={css.intro}>
                    Руна открывается сама — как знак, который приходит извне.
                    Это словно довериться потоку и принять то, что должно
                    проявиться именно сейчас.
                </p>
            )}

            {!hasStarted && (
                <button class={cn('primary-btn', css.actionBtn)}>
                    Получить ответ
                </button>
            )}

            {!hasEnded && (
                <div class={css.carouselContainer}>
                    <LazyImage
                        prtClass={css.bgParent}
                        imgClass={css.bgImage}
                        img={BackgroundDk}
                        tinyImg={BackgroundDkTiny}
                    />

                    <div class={css.carousel}>
                        <Carousel items={runes} />
                    </div>
                </div>
            )}

            {hasStarted && (
                <button class={cn('primary-btn', css.nextRuneBtn)}>
                    {hasEnded ? 'Попробовать снова' : 'Следующая руна'}
                </button>
            )}

            {hasEnded && <PickedRunes runes={selectedRunes} />}

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
