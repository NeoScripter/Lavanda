import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import { ItemType } from '../../HelpSection';
import css from './ListItem.module.scss';

const ListItem: FC<NodeProps<{ item: ItemType }>> = ({ className, item }) => {
    return (
        <li className={cn(css.root, className)}>
            <h3 className={css.heading}>{item.title}</h3>
            <p className={css.content}>{item.content}</p>
        </li>
    );
};

export default ListItem;
