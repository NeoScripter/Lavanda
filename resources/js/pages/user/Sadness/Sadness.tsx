import HeroDecorTiny from '@/assets/images/sadness/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/sadness/hero-decor.webp';
import FooterDecorTiny from '@/assets/images/sadness/footer-decor-tiny.webp';
import FooterDecor from '@/assets/images/sadness/footer-decor.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import AssymetricLayout from '@/layouts/user/AssymetricLayout/AssymetricLayout';
import {
    assymetricSectionLinks,
    foregroundImage,
    heroDescription,
    heroHeading,
    introHeading,
    introParts,
} from '@/lib/data/sadnessPageData';
import css from './Sadness.module.scss';

const Sadness = () => {
    return (
        <AssymetricLayout
            headTitle="Мне грустно"
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
            sectionLinks={assymetricSectionLinks}
        >
            <LazyImage
                img={FooterDecor}
                tinyImg={FooterDecorTiny}
                prtClass={css.footerDecor}
            />
        </AssymetricLayout>
    );
};
export default Sadness;

