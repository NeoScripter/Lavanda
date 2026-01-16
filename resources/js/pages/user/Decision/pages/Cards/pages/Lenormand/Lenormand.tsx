import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout';
import { Head } from '@inertiajs/react';
import { heading, intro } from './pageData';
import RandomCards from './partials/RandomCards';
import css from './Lenormand.module.scss';
import ForegroundDkTinyWebp from "@/assets/images/cards/Lenormand/foreground-dk-tiny.webp";
import ForegroundDkAvif from "@/assets/images/cards/Lenormand/foreground-dk.avif";
import ForegroundDkWebp from "@/assets/images/cards/Lenormand/foreground-dk.webp";
import ForegroundMbTinyWebp from "@/assets/images/cards/Lenormand/foreground-mb-tiny.webp";
import ForegroundMbAvif from "@/assets/images/cards/Lenormand/foreground-mb.avif";
import ForegroundMbWebp from "@/assets/images/cards/Lenormand/foreground-mb.webp";

const Lenormand = () => {
    return (
        <>
            <Head title="Гадание Ленорман" />
            <BreadCrumbLayout
                heading={heading}
                intro={intro}
                imgClass={css.heroForeground}
                withCards={true}
                fgImg={{
                    dk: ForegroundDkWebp,
                    dkAvif: ForegroundDkAvif,
                    dkTiny: ForegroundDkTinyWebp,
                    tb: ForegroundDkWebp,
                    tbAvif: ForegroundDkAvif,
                    tbTiny: ForegroundDkTinyWebp,
                    mb: ForegroundMbWebp,
                    mbAvif: ForegroundMbAvif,
                    mbTiny: ForegroundMbTinyWebp,
                }}
            >
                <InteractiveLayout
                    btnLabels={['Случайный выбор']}
                    components={[() => <RandomCards />]}
                    deferedKey='cards'
                />
            </BreadCrumbLayout>
        </>
    );
};

export default Lenormand;
