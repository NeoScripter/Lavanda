import BgDkTiny from '@/assets/images/home/bg-dk-tiny.webp';
import BgDk from '@/assets/images/home/bg-dk.webp';
import BgMbTiny from '@/assets/images/home/bg-mb-tiny.webp';
import BgMb from '@/assets/images/home/bg-mb.webp';
import BgTbTiny from '@/assets/images/home/bg-tb-tiny.webp';
import BgTb from '@/assets/images/home/bg-tb.webp';
import NarrativeDecorTiny from '@/assets/images/home/narrative-tiny.webp';
import NarrativeDecor from '@/assets/images/home/narrative.webp';
import AboutSection from '@/components/user/sections/AboutSection/AboutSection';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { cn } from '@/utils/cn';
import { Head } from '@inertiajs/react';
import css from './Home.module.scss';
import FAQSection from './partials/FAQSection/FAQSection';
import HeroSection from './partials/HeroSection/HeroSection';
import IntroSection from './partials/IntroSection/IntroSection';
import PlanSection from './partials/PlanSection/PlanSection';
import ChoiceSection from './partials/ChoiceSection/ChoiceSection';

const Home = () => {
    return (
        <AppLayout
            extendedFooter={false}
            className={css.layout}
            variation="light"
        >
            <Head title="Главная" />

            <BgLoader
                prtClass={cn(css.bgLoader, 'full-bleed')}
                dk={BgDk}
                dkTiny={BgDkTiny}
                tb={BgTb}
                tbTiny={BgTbTiny}
                mb={BgMb}
                mbTiny={BgMbTiny}
            />

            <HeroSection />

            <ChoiceSection>
                <LazyImage
                    prtClass={css.narrativeDecor}
                    img={NarrativeDecor}
                    tinyImg={NarrativeDecorTiny}
                />
            </ChoiceSection>

            <IntroSection />

            <AboutSection className={css.aboutSection} />

            <PlanSection />

            <FAQSection />
        </AppLayout>
    );
};

export default Home;
