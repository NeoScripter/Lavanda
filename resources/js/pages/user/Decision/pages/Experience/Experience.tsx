import CardLayout from '@/layouts/user/CardLayout/CardLayout';
import css from './Experience.module.scss';
import { foregroundImage, heroDescription, heroHeading } from './pageData';
import CardContent from './partials/CardContent';

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
