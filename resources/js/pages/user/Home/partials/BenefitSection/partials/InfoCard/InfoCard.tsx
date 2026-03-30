import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { NodeProps } from '@/types/nodeProps';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { FC } from 'preact/compat';
import { InfoCardType } from '../../BenefitSection';
import css from './InfoCard.module.scss';

const InfoCard: FC<NodeProps<{ card: InfoCardType }>> = ({
    className,
    card,
}) => {
    return (
        <li className={cn(css.root, className)}>
            <header className={css.header}>
                <span className={css.title}>{card.title}</span>
            </header>
            <ul className={css.items}>
                {card.items.map((item) => (
                    <li key={item.id}>
                        <Link
                            prefetch
                            href={item.href}
                            className={css.item}
                        >
                            <LazyImage
                                img={item.img}
                                tinyImg={item.tinyImg}
                                prtClass={css.imageFrame}
                                imgClass={css.image}
                            />
                            <span>{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default InfoCard;
