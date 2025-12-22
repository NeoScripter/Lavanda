import CardLayout from '@/layouts/user/CardLayout/CardLayout';
import { foregroundImage, heroDescription, heroHeading } from './pageData';
import CardContent from './partials/CardContent';

const Practice = () => {
    return (
        <CardLayout
            isHigh={true}
            headTitle="Практика"
            heroHeading={heroHeading}
            heroDescription={heroDescription}
            heroFgImg={foregroundImage}
        >
            <CardContent />
        </CardLayout>
    );
};

export default Practice;
