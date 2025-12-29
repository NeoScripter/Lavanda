import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { useInterativeItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Rune } from '@/types/model';
import { Transition } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { useState } from 'preact/hooks';
import css from './ChosenRunes.module.scss';

function isNearCorner(index: number, cols = 8, rows = 7) {
    const row = Math.floor(index / cols);
    const col = index % cols;

    // Helper function to check if position is near a specific corner
    const isNearSpecificCorner = (cornerRow, cornerCol) => {
        const rowDiff = Math.abs(row - cornerRow);
        const colDiff = Math.abs(col - cornerCol);

        // Exact corner
        if (rowDiff === 0 && colDiff === 0) return true;

        // One row above/below corner (same column as corner)
        if (rowDiff === 1 && colDiff === 0) return true;

        // One or two columns to the side (same row as corner)
        if (rowDiff === 0 && colDiff === 1) return true;

        return false;
    };

    // Check all 4 corners
    if (isNearSpecificCorner(0, 0)) return true; // top-left
    if (isNearSpecificCorner(0, cols - 1)) return true; // top-right
    if (isNearSpecificCorner(rows - 1, 0)) return true; // bottom-left
    if (isNearSpecificCorner(rows - 1, cols - 1)) return true; // bottom-right

    return false;
}

const ChosenRunes = () => {
    const { runes } = usePage<{ runes: Rune[] }>().props;
    const { currentSlideId } = useCurrentSlideId();
    const { interativeItems, prevInteractiveItems } = useInterativeItems();
    const [selectedRunes, setSelectedRunes] = useState<Rune[]>([]);

    const cols = 8;
    const rows = 7;
    const totalCells = cols * rows;

    // Create a grid with nulls in corner positions
    const newRunes = [];
    let runeIndex = 0;

    for (let gridIndex = 0; gridIndex < totalCells; gridIndex++) {
        if (isNearCorner(gridIndex, cols, rows)) {
            newRunes.push(null);
        } else {
            if (runeIndex < runes.length) {
                newRunes.push(runes[runeIndex]);
                runeIndex++;
            }
        }
    }

    return (
        <>
            {' '}
            <Transition show={selectedRunes.length === 0}>
                <div className={css.transitionWrapper}>
                    <div>
                        <p class={css.intro}>
                            Руна открывается сама — как знак, который приходит
                            извне. Это словно довериться потоку и принять то,
                            что должно проявиться именно сейчас.
                        </p>
                    </div>
                </div>
            </Transition>
            <ul className={css.runeGrid}>
                {newRunes.map((rune, idx) => {
                    return (
                        <li
                            key={rune?.id ?? idx}
                            className={css.runeItem}
                        >
                            {' '}
                            {rune && rune.back_image ? (
                                <LazyImage
                                    prtClass={css.runeWrapper}
                                    imgClass={css.runeImg}
                                    img={rune.back_image.path}
                                    tinyImg={rune.back_image.tiny_path}
                                    alt={rune.back_image.alt}
                                />
                            ) : (
                                ' '
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ChosenRunes;
