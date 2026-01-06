import ForegroundDkTiny from '@/assets/images/cards/index/foreground-dk-tiny.webp';
import ForegroundDk from '@/assets/images/cards/index/foreground-dk.webp';
import ForegroundMbTiny from '@/assets/images/cards/index/foreground-mb-tiny.webp';
import ForegroundMb from '@/assets/images/cards/index/foreground-mb.webp';
import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import { Head } from '@inertiajs/react';
import { cardLinks } from './cardLinks';
import css from './Cards.module.scss';
import { heading, intro } from './pageData';
import CardLink from './partials/CardLink/CardLink';

const Cards = () => {
    return (
        <>
            <Head title="Спросить у карт" />
            <BreadCrumbLayout
                heading={heading}
                intro={intro}
                imgClass={css.heroForeground}
                withCards={true}
                fgImg={{
                    dk: ForegroundDk,
                    dkTiny: ForegroundDkTiny,
                    tb: ForegroundDk,
                    tbTiny: ForegroundDkTiny,
                    mb: ForegroundMb,
                    mbTiny: ForegroundMbTiny,
                }}
            >
                <ul className={css.cardItems}>
                    {cardLinks.map((link) => (
                        <CardLink
                            key={link.id}
                            cardLink={link}
                        />
                    ))}
                </ul>
            </BreadCrumbLayout>
        </>
    );
};

export default Cards;
