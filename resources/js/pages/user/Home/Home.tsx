import BgDkTiny from '@/assets/images/home/bg-dk-tiny.webp';
import BgDk from '@/assets/images/home/bg-dk.webp';
import BgMbTiny from '@/assets/images/home/bg-mb-tiny.webp';
import BgMb from '@/assets/images/home/bg-mb.webp';
import BgTbTiny from '@/assets/images/home/bg-tb-tiny.webp';
import BgTb from '@/assets/images/home/bg-tb.webp';
import NarrativeDecorTiny from '@/assets/images/home/narrative-tiny.webp';
import NarrativeDecor from '@/assets/images/home/narrative.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { cn } from '@/utils/cn';
import { Head } from '@inertiajs/react';
import css from './Home.module.scss';
import AboutLavanda from './partials/AboutLavanda';
import BenefitSection from './partials/BenefitSection/BenefitSection';
import ChoiceSection from './partials/ChoiceSection/ChoiceSection';
import FAQSection from './partials/FAQSection/FAQSection';
import HelpSection from './partials/HelpSection/HelpSection';
import HeroSection from './partials/HeroSection/HeroSection';
import IntroSection from './partials/IntroSection/IntroSection';
import PlanSection from './partials/PlanSection/PlanSection';

 '@/assets/images/home/bg.png'

const Home = () => {
    return (
        <AppLayout
            extendedFooter={false}
            className={css.layout}
            variation="light"
        >
            <Head title="Главная" />

            {/* <BgLoader */}
            {/*     prtClass={cn(css.bgLoader, 'full-bleed')} */}
            {/*     dk={BgDk} */}
            {/*     dkTiny={BgDkTiny} */}
            {/*     tb={BgTb} */}
            {/*     tbTiny={BgTbTiny} */}
            {/*     mb={BgMb} */}
            {/*     mbTiny={BgMbTiny} */}
            {/* /> */}

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

            <AboutLavanda />

            <PlanSection />

            <FAQSection />
        </AppLayout>
    );
};

export default Home;
