import { Rune } from '@/types/model';
import { cn } from '@/utils/cn';
import { useRuneTransform } from '../../hooks/useRuneTransform';
import RuneItem from '../RuneItem/RuneItem';
import css from './RuneGridItem.module.scss';

interface RuneGridItemProps {
    rune: Rune | null;
    idx: number;
    isSelected: boolean;
    onSelect: (rune: Rune) => void;
    className?: string;
    runeLength: number;
}

const RuneGridItem: React.FC<RuneGridItemProps> = ({
    rune,
    idx,
    isSelected,
    onSelect,
    className,
    runeLength,
}) => {
    const { rotation, translation } = useRuneTransform(idx, runeLength);

    return (
        <li
            className={cn(
                css.runeItem,
                isSelected && css.selectedItem,
                className,
            )}
            style={{
                '--rotateDeg': rotation,
                '--translateOffset': translation,
                order: Math.floor(Math.random() * 2 - 1),
            }}
        >
            {rune && (
                <RuneItem
                    handleClick={() => onSelect(rune)}
                    isSelected={isSelected}
                    rune={rune}
                />
            )}
        </li>
    );
};

export default RuneGridItem;
