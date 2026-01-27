import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { NodeProps } from '@/types/nodeProps';
import { Link } from '@inertiajs/react';
import { FC } from 'preact/compat';
import { CardLink as CardLinkType } from '../../cardLinks';
import css from './CardLink.module.scss';

const CardLink: FC<NodeProps<{ cardLink: CardLinkType }>> = ({ cardLink }) => {
    return (
        <li className={css.wrapper}>
            <Link
                href={cardLink.href}
                prefetch
                className={css.link}
            ></Link>
            <LazyImage
                prtClass={css.imgWrapper}
                img={cardLink.img}
                tinyImg={cardLink.tinyImg}
                alt={cardLink.alt}
            />

            <h3 className={css.heading}>{cardLink.label}</h3>

            <p className={css.content}>{cardLink.description}</p>
        </li>
    );
};

export default CardLink;
