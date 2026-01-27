import ForegroundDkTinyWebp from '@/assets/images/about/foreground-dk-tiny.webp';
import ForegroundDkAvif from '@/assets/images/about/foreground-dk.avif';
import ForegroundDkWebp from '@/assets/images/about/foreground-dk.webp';
import ForegroundMbTinyWebp from '@/assets/images/about/foreground-mb-tiny.webp';
import ForegroundMbAvif from '@/assets/images/about/foreground-mb.avif';
import ForegroundMbWebp from '@/assets/images/about/foreground-mb.webp';
import ForegroundTbTinyWebp from '@/assets/images/about/foreground-tb-tiny.webp';
import ForegroundTbAvif from '@/assets/images/about/foreground-tb.avif';
import ForegroundTbWebp from '@/assets/images/about/foreground-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import BreadCrumbs from '@/components/user/ui/BreadCrumbs';
import css from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <section className={css.wrapper}>
            <BreadCrumbs className={css.breadcrumbs} />
            <h1 className={css.heading}>О ресурсе</h1>

            <BgLoader
                dk={ForegroundDkWebp}
                dkTiny={ForegroundDkTinyWebp}
                dkAvif={ForegroundDkAvif}
                tb={ForegroundTbWebp}
                tbTiny={ForegroundTbTinyWebp}
                tbAvif={ForegroundTbAvif}
                mb={ForegroundMbWebp}
                mbTiny={ForegroundMbTinyWebp}
                mbAvif={ForegroundMbAvif}
                prtClass={css.fgParent}
                imgClass={css.fgImage}
                alt="Букет фиолетовой лаванды, перевязанный бечёвкой, лежит в белом деревянном ящике, поставленном на стопку старых книг на светлом фоне в деревенском стиле."
            />
        </section>
    );
};

export default HeroSection;
