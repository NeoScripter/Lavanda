import BreadCrumbLayout from '@/layouts/user/BreadCrumbLayout/BreadCrumbLayout';
import { heading, intro } from './pageData';
import css from './Runes.module.scss';

const Runes = () => {
    return (
        <BreadCrumbLayout
            heading={heading}
            intro={intro}
            imgClass={css.heroForeground}
        >

        </BreadCrumbLayout>
    );
};

export default Runes;
