import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Rune } from '@/types/model';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import css from './PickedRunes.module.scss';

const PickedRunes: FC<{ runes: Rune[] }> = ({ runes }) => {
    if (runes.length === 0) return null;

    return (
        <div className={cn(css.pickedRunes, 'full-bleed')}>
            {runes.map((rune) => (
                <div key={rune.id} className={css.runeImageWrapper}>
                    {' '}
                    {rune.front_image && (
                        <LazyImage
                            prtClass={css.runeWrapper}
                            imgClass={css.runeImg}
                            img={rune.front_image.path}
                            tinyImg={rune.front_image.tiny_path}
                            alt={rune.front_image.alt}
                            isLazy={false}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default PickedRunes;
