import ForegroundDkTinyWebp from '@/assets/images/cards/promo/foreground-dk-tiny.webp';
import ForegroundDkAvif from '@/assets/images/cards/promo/foreground-dk.avif';
import ForegroundDkWebp from '@/assets/images/cards/promo/foreground-dk.webp';
import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout';
import { Head } from '@inertiajs/react';
import { heading, intro } from './pageData';
import ChosenCards from './partials/ChosenCards';
import RandomCards from './partials/RandomCards';
import css from './Promo.module.scss';

const Promo = () => {
    return (
        <>
            <Head title="Акция" />
            <BreadCrumbLayout
                heading={heading}
                intro={intro}
                imgClass={css.heroForeground}
                withCards={false}
                hasHeroRevealer={true}
                fgImg={{
                    dk: ForegroundDkWebp,
                    dkTiny: ForegroundDkTinyWebp,
                    dkAvif: ForegroundDkAvif,
                    tb: ForegroundDkWebp,
                    tbTiny: ForegroundDkTinyWebp,
                    tbAvif: ForegroundDkAvif,
                    mb: ForegroundDkWebp,
                    mbAvif: ForegroundDkAvif,
                    mbTiny: ForegroundDkTinyWebp,
                }}
            >
                <InteractiveLayout
                    btnLabels={['Выбор Лаванды', 'Выбор гостя']}
                    components={[() => <RandomCards />, () => <ChosenCards />]}
                />
            </BreadCrumbLayout>
        </>
    );
};

export default Promo;
