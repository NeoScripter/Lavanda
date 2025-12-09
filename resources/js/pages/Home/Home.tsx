import BgDkTiny from '@/assets/images/home/bg-dk-tiny.webp';
import BgDk from '@/assets/images/home/bg-dk.webp';
import BgMbTiny from '@/assets/images/home/bg-mb-tiny.webp';
import BgMb from '@/assets/images/home/bg-mb.webp';
import BgTbTiny from '@/assets/images/home/bg-tb-tiny.webp';
import BgTb from '@/assets/images/home/bg-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import css from './Home.module.scss';
import { cn } from '@/utils/cn';
import HeroSection from './partials/HeroSection/HeroSection';
import FAQSection from './partials/FAQSection/FAQSection';

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

            <FAQSection />
        </AppLayout>
    );
};

export default Home;
