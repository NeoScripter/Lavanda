import BackgroundDkTiny from '@/assets/images/random-runes/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/random-runes/background-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Rune } from '@/types/model';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import { FC } from 'preact/compat';
import Carousel from '../Carousel';
import css from './RandomRunes.module.scss';

const RandomRunes: FC<NodeProps> = ({ className }) => {
    const { runes } = usePage<{ runes: Rune[] }>().props;

    return (
        <>
            <p class={css.intro}>
                Руна открывается сама — как знак, который приходит извне. Это
                словно довериться потоку и принять то, что должно проявиться
                именно сейчас.
            </p>

            <button class={cn('primary-btn', css.actionBtn)}>
                Получить ответ
            </button>

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
        </>
    );
};

export default RandomRunes;
