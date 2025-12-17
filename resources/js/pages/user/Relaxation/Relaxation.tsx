import HeroDecorTiny from '@/assets/images/decision/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/decision/hero-decor.webp';
import FooterDecorTiny from '@/assets/images/decision/footer-decor-tiny.webp';
import FooterDecor from '@/assets/images/decision/footer-decor.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import {
    foregroundImage,
    heroDescription,
    heroHeading,
    introHeading,
    introParts,
} from '@/lib/data/relaxationPageData';
import css from './Relaxation.module.scss';
import WellnessTipLayout from '@/layouts/user/WellnessTipLayout/WellnessTipLayout';

const Relaxation = () => {
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
