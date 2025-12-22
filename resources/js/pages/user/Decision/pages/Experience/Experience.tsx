import CardLayout from '@/layouts/user/CardLayout/CardLayout';
import { foregroundImage, heroDescription, heroHeading } from './pageData';
import CardContent from './partials/CardContent';
import css from './Experience.module.scss';

const Experience = () => {
    return (
        <CardLayout
            headTitle="Опыт автора"
            heroHeading={heroHeading}
            heroDescription={heroDescription}
            heroFgImg={foregroundImage}
            imgClass={css.foregroundImage}
        >
            <CardContent />
        </CardLayout>
    );
};

export default Experience;
