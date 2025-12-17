import HeroDecorTiny from '@/assets/images/relaxation/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/relaxation/hero-decor.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import WellnessTipLayout from '@/layouts/user/WellnessTipLayout/WellnessTipLayout';
import {
    foregroundImage,
    heroDescription,
    heroHeading,
    introHeading,
    introParts,
} from '@/lib/data/relaxationPageData';
import css from './Relaxation.module.scss';

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
        />
    );
};
export default Relaxation;
