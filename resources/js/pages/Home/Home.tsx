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
import Narrative from '@/components/user/ui/Narrative/Narrative';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { cn } from '@/utils/cn';
import css from './Home.module.scss';
import FAQSection from './partials/FAQSection/FAQSection';
import HeroSection from './partials/HeroSection/HeroSection';
import IntroSection from './partials/IntroSection/IntroSection';
import AboutSection from './partials/AboutSection/AboutSection';

const Home = () => {
    return (
        <AppLayout className={css.layout}>
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

            <Narrative
                heading="Позвольте себе остановиться на минуту, вдохнуть глубже и услышать то, что действительно важно."
                prgs={[
                    'Каждая из нас время от времени оказывается в ситуации выбора. Мы сомневаемся, откладываем решения, ищем подсказки во внешнем мире. Этот сайт создан, чтобы в такие моменты напомнить: ответы уже есть внутри вас — нужно лишь немного поддержки, чтобы их расслышать.',
                ]}
            >
                <LazyImage
                    prtClass={css.narrativeDecor}
                    img={NarrativeDecor}
                    tinyImg={NarrativeDecorTiny}
                />
            </Narrative>

            <IntroSection />

            <AboutSection />

            <FAQSection />
        </AppLayout>
    );
};

export default Home;
