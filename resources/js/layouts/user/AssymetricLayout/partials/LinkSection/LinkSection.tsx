import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { Link } from '@inertiajs/react';
import { FC } from 'react-dom/src';
import css from './LinkSection.module.scss';

export type AssymetricSectionLink = {
    id: string;
    title: string;
    description: string;
    img: string;
    imgTiny: string;
    alt: string;
    url: string;
};

const LinkSection: FC<{ links: AssymetricSectionLink[] }> = ({ links }) => {
    return (
        <section class={css.wrapper}>
            <ul class={css.grid}>
                {links.map((link) => (
                    <LinkCard
                        key={link.id}
                        link={link}
                    />
                ))}
            </ul>
        </section>
    );
};

export default LinkSection;

const LinkCard: FC<{ link: AssymetricSectionLink }> = ({ link }) => {
    return (
        <li class={css.cardWrapper}>
            <Link
                href={link.url}
                prefetch
                class={css.cardLink}
            ></Link>
            <LazyImage
                prtClass={css.cardImgWrapper}
                imgClass={css.cardImg}
                img={link.img}
                tinyImg={link.imgTiny}
                alt={link.alt}
            />
            <h4 class={css.cardTitle}>{link.title}</h4>
            <p>{link.description}</p>
        </li>
    );
};
