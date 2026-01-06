import ForegroundDkTiny from "@/assets/images/cards/metaphoric/foreground-dk-tiny.webp";
import ForegroundDk from "@/assets/images/cards/metaphoric/foreground-dk.webp";
import ForegroundMbTiny from "@/assets/images/cards/metaphoric/foreground-mb-tiny.webp";
import ForegroundMb from "@/assets/images/cards/metaphoric/foreground-mb.webp";
import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout';
import { heading, intro } from './pageData';
import RandomCards from './partials/RandomCards';
import css from './Metaphoric.module.scss';
import { Head } from "@inertiajs/react";

const Metaphoric = () => {

    return (
        <BreadCrumbLayout
            heading={heading}
            intro={intro}
            className={css.wrapper}
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
            hasHeroRevealer={true}
        >
            <Head title="Карты" />
            <InteractiveLayout
                btnLabels={['Случайный выбор']}
                components={[() => <RandomCards />]}
            />
        </BreadCrumbLayout>
    );
};

export default Metaphoric;
