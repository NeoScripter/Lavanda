import BackgroundDkTiny from '@/assets/images/random-runes/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/random-runes/background-dk.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './RandomRunes.module.scss';

const RandomRunes: FC<NodeProps> = ({ className }) => {
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
            </div>
        </>
    );
};

export default RandomRunes;
