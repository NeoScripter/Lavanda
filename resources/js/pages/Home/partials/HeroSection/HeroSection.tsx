import BgDkTiny from '@/assets/images/home/hero-bg-dk-tiny.webp';
import BgDk from '@/assets/images/home/hero-bg-dk.webp';
import BgTbTiny from '@/assets/images/home/hero-bg-tb-tiny.webp';
import BgTb from '@/assets/images/home/hero-bg-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { cn } from '@/utils/cn';
import css from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <section class={cn(css.wrapper, 'full-bleed')}>
            <BgLoader
                prtClass={cn(css.bgLoader)}
                imgClass={css.bgImage}
                dk={BgDk}
                dkTiny={BgDkTiny}
                tb={BgTb}
                tbTiny={BgTbTiny}
                mb={BgTb}
                mbTiny={BgTbTiny}
            />

            {/* <img src={BgDk} alt="" class={css.test} /> */}
            this is hero
        </section>
    );
};

export default HeroSection;
