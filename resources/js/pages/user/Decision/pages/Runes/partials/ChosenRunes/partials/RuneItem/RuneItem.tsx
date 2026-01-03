import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Rune } from '@/types/model';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './RuneItem.module.scss';

const RuneItem: FC<{
    rune: Rune;
    handleClick: () => void;
    isSelected?: boolean;
}> = ({ rune, handleClick, isSelected = false }) => {
    return (
        <>
            {!isSelected && (
                <button
                    onClick={handleClick}
                    className={css.selectRuneBtn}
                ></button>
            )}
            {rune.back_image && (
                <LazyImage
                    prtClass={cn(css.runeWrapper, isSelected && css.hidden)}
                    imgClass={css.runeImg}
                    placeholderClass={css.runeImgPlaceholder}
                    img={rune.back_image.path}
                    tinyImg={rune.back_image.tiny_path}
                    alt={rune.back_image.alt}
                    isLazy={false}
                />
            )}
            {rune.front_image && (
                <LazyImage
                    prtClass={cn(css.runeWrapper, !isSelected && css.hidden)}
                    imgClass={css.runeImg}
                    placeholderClass={css.runeImgPlaceholder}
                    img={rune.front_image.path}
                    tinyImg={rune.front_image.tiny_path}
                    alt={rune.front_image.alt}
                    isLazy={false}
                />
            )}
        </>
    );
};

export default RuneItem;
