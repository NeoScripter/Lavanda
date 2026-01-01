import AboutSection from '@/components/user/sections/AboutSection/AboutSection';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { Head } from '@inertiajs/react';
import css from './About.module.scss';
import HeroSection from './partials/HeroSection';
import IntroSection from './partials/IntroSection';

const About = () => {
    return (
        <AppLayout
            extendedFooter={true}
            className={css.layout}
            variation="light"
        >
            <Head title="О ресурсе" />

            <HeroSection />

            <IntroSection />

            <AboutSection />
        </AppLayout>
    );
};

export default About;
