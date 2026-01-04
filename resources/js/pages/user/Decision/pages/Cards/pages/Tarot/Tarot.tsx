import ForegroundDkTiny from '@/assets/images/cards/tarot/foreground-dk-tiny.webp';
import ForegroundDk from '@/assets/images/cards/tarot/foreground-dk.webp';
import ForegroundMbTiny from '@/assets/images/cards/tarot/foreground-mb-tiny.webp';
import ForegroundMb from '@/assets/images/cards/tarot/foreground-mb.webp';
import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout';
import { heading, intro } from './pageData';
import RandomCards from './partials/RandomCards';
import css from './Tarot.module.scss';

const Tarot = () => {
    return (
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
                btnLabels={['Случайный выбор', 'Выбрать самой']}
                components={[() => <RandomCards />]}
            />
        </BreadCrumbLayout>
    );
};

export default Tarot;
