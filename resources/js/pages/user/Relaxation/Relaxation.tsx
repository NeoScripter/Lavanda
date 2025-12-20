import FooterDecorTiny from '@/assets/images/relaxation/footer-decor-tiny.webp';
import FooterDecor from '@/assets/images/relaxation/footer-decor.webp';
import HeroDecorTiny from '@/assets/images/relaxation/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/relaxation/hero-decor.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';

import {
    foregroundImage,
    heroDescription,
    heroHeading,
    introHeading,
    introParts,
} from '@/lib/data/relaxationPageData';
import { WellnessTip } from '@/types/model';
import { usePage } from '@inertiajs/react';
import css from './Relaxation.module.scss';
import WellnessTipLayout from '@/layouts/user/WellnessTipLayout';

const Relaxation = () => {
    const { tips } = usePage<{ tips: WellnessTip[] }>().props;

    return (
        <WellnessTipLayout
            headTitle="Хочу расслабиться"
            heroHeading={heroHeading}
            heroDescription={heroDescription}
            heroFgImg={foregroundImage}
            heroDecor={
                <LazyImage
                    img={HeroDecor}
                    tinyImg={HeroDecorTiny}
                    prtClass={css.heroDecor}
                />
            }
            introHeading={introHeading}
            introIntros={introParts}
            wellnessTips={tips}
        >
            <LazyImage
                img={FooterDecor}
                tinyImg={FooterDecorTiny}
                prtClass={css.footerDecor}
            />
        </WellnessTipLayout>
    );
};
export default Relaxation;
