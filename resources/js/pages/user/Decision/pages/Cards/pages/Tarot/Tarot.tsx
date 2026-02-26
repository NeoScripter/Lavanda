import ForegroundDkTiny from '@/assets/images/cards/tarot/foreground-dk-tiny.webp';
import ForegroundDk from '@/assets/images/cards/tarot/foreground-dk.webp';
import ForegroundMbTiny from '@/assets/images/cards/tarot/foreground-mb-tiny.webp';
import ForegroundMb from '@/assets/images/cards/tarot/foreground-mb.webp';
import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout';
import { Head } from '@inertiajs/react';
import { heading, intro } from './pageData';
import ChosenCards from './partials/ChosenCards';
import RandomCards from './partials/RandomCards';
import css from './Tarot.module.scss';

const Tarot = () => {
    return (
        <>
            <Head title="Карты таро" />
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
                <InteractiveLayout
                    btnLabels={['Выбор Лаванды', 'Выбор гостя']}
                    components={[() => <RandomCards />, () => <ChosenCards />]}
                />
            </BreadCrumbLayout>
        </>
    );
};

export default Tarot;
