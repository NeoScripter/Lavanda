import AboutSection from '@/components/user/sections/AboutSection/AboutSection';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { Head } from '@inertiajs/react';
import css from './About.module.scss';
import HeroSection from './partials/HeroSection';
import IntroSection from './partials/IntroSection';
import AccessSection from './partials/AccessSection';
import LearnMoreSection from './partials/LearnMoreSection';

const About = () => {
    return (
        <AppLayout
            extendedFooter={true}
            className={css.layout}
            variation="light"
        >
            <Head title="Секрет успеха Lavanda" />

            <HeroSection />

            <IntroSection />

            <AccessSection />

            <AboutSection />

            <LearnMoreSection />
        </AppLayout>
    );
};

export default About;
