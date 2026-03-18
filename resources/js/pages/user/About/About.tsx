import AboutSection from '@/components/user/sections/AboutSection/AboutSection';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { Head } from '@inertiajs/react';
import css from './About.module.scss';
import HeroSection from './partials/HeroSection';
import IntroSection from './partials/IntroSection';
import AccessSection from './partials/AccessSection';

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
        </AppLayout>
    );
};

export default About;
