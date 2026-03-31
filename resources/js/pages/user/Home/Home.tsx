import NarrativeDecorTiny from '@/assets/images/home/narrative-tiny.webp';
import NarrativeDecor from '@/assets/images/home/narrative.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { Head } from '@inertiajs/react';
import css from './Home.module.scss';
import BenefitSection from './partials/BenefitSection/BenefitSection';
import ChoiceSection from './partials/ChoiceSection/ChoiceSection';
import HelpSection from './partials/HelpSection/HelpSection';
import HeroSection from './partials/HeroSection/HeroSection';
import IntroSection from './partials/IntroSection/IntroSection';

const Home = () => {
    return (
        <AppLayout
            extendedFooter={false}
            className={css.layout}
            variation="light"
        >
            <Head title="Главная" />

            <HeroSection />

            <ChoiceSection>
                <LazyImage
                    prtClass={css.narrativeDecor}
                    img={NarrativeDecor}
                    tinyImg={NarrativeDecorTiny}
                />
            </ChoiceSection>

            <BenefitSection />

            <HelpSection />

            <IntroSection />

            {/* <AboutLavanda /> */}

            {/* <PlanSection /> */}
        </AppLayout>
    );
};

export default Home;
