import HeroDecorTiny from '@/assets/images/decision/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/decision/hero-decor.webp';
import FooterDecorTiny from '@/assets/images/decision/footer-decor-tiny.webp';
import FooterDecor from '@/assets/images/decision/footer-decor.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import AssymetricLayout from '@/layouts/user/AssymetricLayout/AssymetricLayout';
import {
    assymetricSectionLinks,
    foregroundImage,
    heroDescription,
    heroHeading,
    introHeading,
    introParts,
} from './pageData';
import css from './Decision.module.scss';

const Decision = () => {
    return (
        <AssymetricLayout
            headTitle="Решение"
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
export default Decision;
