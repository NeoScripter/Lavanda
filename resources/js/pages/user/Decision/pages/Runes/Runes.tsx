import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import InteractiveLayout from '@/layouts/user/InteractiveLayout/InteractiveLayout';
import { heading, intro } from './pageData';
import RandomRunes from './partials/RandomRunes';
import css from './Runes.module.scss';

const Runes = () => {
    return (
        <BreadCrumbLayout
            heading={heading}
            intro={intro}
            imgClass={css.heroForeground}
            withCards={true}
        >
            <InteractiveLayout
                btnLabels={['Случайный выбор', 'Выбрать самой']}
                components={[() => <RandomRunes />, () => null]}
            />
        </BreadCrumbLayout>
    );
};

export default Runes;
