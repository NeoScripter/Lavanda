import ForegroundDkTiny from '@/assets/images/about/foreground-dk-tiny.webp';
import ForegroundDk from '@/assets/images/about/foreground-dk.webp';
import ForegroundMbTiny from '@/assets/images/about/foreground-mb-tiny.webp';
import ForegroundMb from '@/assets/images/about/foreground-mb.webp';
import ForegroundTbTiny from '@/assets/images/about/foreground-tb-tiny.webp';
import ForegroundTb from '@/assets/images/about/foreground-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import BreadCrumbs from '@/components/user/ui/BreadCrumbs';
import css from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <section className={css.wrapper}>
            <BreadCrumbs className={css.breadcrumbs} />
            <h1 className={css.heading}>О ресурсе</h1>

            <BgLoader
                dk={ForegroundDk}
                dkTiny={ForegroundDkTiny}
                tb={ForegroundTb}
                tbTiny={ForegroundTbTiny}
                mb={ForegroundMb}
                mbTiny={ForegroundMbTiny}
                prtClass={css.fgParent}
                imgClass={css.fgImage}
                alt="Букет фиолетовой лаванды, перевязанный бечёвкой, лежит в белом деревянном ящике, поставленном на стопку старых книг на светлом фоне в деревенском стиле."
            />
        </section>
    );
};

export default HeroSection;
