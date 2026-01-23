import FooterDecorTiny from '@/assets/images/toolkit/footer-decor-tiny.webp';
import FooterDecor from '@/assets/images/toolkit/footer-decor.webp';
import HeroDecorTiny from '@/assets/images/toolkit/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/toolkit/hero-decor.webp';
import LeftDecorTiny from '@/assets/images/toolkit/left-decor-tiny.webp';
import LeftDecor from '@/assets/images/toolkit/left-decor.webp';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import WellnessTipLayout from '@/layouts/user/WellnessTipLayout/WellnessTipLayout';

import { foregroundImage, heroDescription, heroHeading } from './pageData';
import css from './ToolKit.module.scss';

const Toolkit = () => {
    return (
        <WellnessTipLayout
            headTitle="Ресурсы"
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
        >
            <LazyImage
                img={FooterDecor}
                tinyImg={FooterDecorTiny}
                prtClass={css.footerDecor}
            />
            <LazyImage
                img={LeftDecor}
                tinyImg={LeftDecorTiny}
                prtClass={css.leftDecor}
            />
        </WellnessTipLayout>
    );
};
export default Toolkit;
