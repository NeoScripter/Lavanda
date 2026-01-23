import ArrowHint from '@/components/user/ui/ArrowHint';
import { useInteractiveItems } from '@/layouts/user/InteractiveLayout/InteractiveItemsContext';
import { useCurrentSlideId } from '@/layouts/user/ItemsLayout/CurrentSlideProvider';
import { Rune } from '@/types/model';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { Signal } from '@preact/signals';
import { FC } from 'preact/compat';
import PickedRunes from '../PickedRunes/PickedRunes';
import css from './ChosenRunes.module.scss';
import padGridCorners from './helpers/padGridCorners';
import { useRuneSelection } from './hooks/useRuneSelection';
import RuneGridItem from './partials/RuneGridItem/RuneGridItem';

const TOTAL_COLUMNS = 7;
const TOTAL_ROWS = 8;

const ChosenRunes: FC<{ runes: Rune[]; selectedCategory: Signal<string> }> = ({
    runes,
    selectedCategory,
}) => {
    const { currentSlideId } = useCurrentSlideId();
    const { interactiveItems, prevInteractiveItems } = useInteractiveItems();

    const runeLimit = currentSlideId.value ?? 1;
    const paddedRunes = padGridCorners(runes, TOTAL_ROWS, TOTAL_COLUMNS);

    const { selectedRunes, hasEnded, handleSelectRune, handleRestart } =
        useRuneSelection(
            runeLimit,
            interactiveItems,
            prevInteractiveItems,
            selectedCategory.value,
        );

    return (
        <>
            <Transition show={selectedRunes.length === 0}>
                <div className={css.transitionWrapper}>
                    <div>
                        <p className={css.intro}>
                            Нажмите на руну, которая первой привлекла взгляд или
                            куда потянулась рука
                        </p>
                    </div>
                </div>
            </Transition>

            {!hasEnded && (
                <ul
                    className={css.runeGrid}
                    style={{
                        gridTemplateRows: `repeat(${TOTAL_ROWS}, 1fr)`,
                        gridTemplateColumns: `repeat(${TOTAL_COLUMNS}, 1fr)`,
                    }}
                >
                    {paddedRunes.map((rune, idx) => (
                        <RuneGridItem
                            key={rune?.id ?? idx + runes.length + 1}
                            rune={rune}
                            idx={idx}
                            runeLength={selectedRunes.length}
                            isSelected={
                                rune ? selectedRunes.includes(rune) : false
                            }
                            onSelect={handleSelectRune}
                            className={cn(hasEnded && css.runeItemInactive)}
                        />
                    ))}
                </ul>
            )}

            {hasEnded && (
                <button
                    onClick={handleRestart}
                    className={cn('primary-btn', css.nextRuneBtn)}
                >
                    Попробовать снова
                </button>
            )}

            <PickedRunes runes={selectedRunes} />
            <ArrowHint show={hasEnded} />
        </>
    );
};

export default ChosenRunes;
