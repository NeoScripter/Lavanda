import { Rune } from '@/types/model';
import { useRuneTransform } from '../../hooks/useRuneTransform';
import RuneItem from '../RuneItem/RuneItem';
import css from './RuneGridItem.module.scss';
import { cn } from '@/utils/cn';

interface RuneGridItemProps {
    rune: Rune | null;
    idx: number;
    isSelected: boolean;
    onSelect: (rune: Rune) => void;
    className?: string;
}

const RuneGridItem: React.FC<RuneGridItemProps> = ({
    rune,
    idx,
    isSelected,
    onSelect,
    className
}) => {
    const { rotation, translation } = useRuneTransform(idx);

    return (
        <li
            className={cn(css.runeItem, className)}
            style={{
                '--rotateDeg': rotation,
                '--translateOffset': translation,
            }}
        >
            {rune && (
                <RuneItem
                    handleClick={() => onSelect(rune)}
                    idx={idx}
                    isSelected={isSelected}
                    rune={rune}
                />
            )}
        </li>
    );
};

export default RuneGridItem;
