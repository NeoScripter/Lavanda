import ForegroundDkTinyWebp from '@/assets/images/about/foreground-dk-tiny.webp';
import ForegroundDkAvif from '@/assets/images/about/foreground-dk.avif';
import ForegroundDkWebp from '@/assets/images/about/foreground-dk.webp';
import ForegroundDk2xAvif from '@/assets/images/about/foreground-dk2x.avif';
import ForegroundDk2xWebp from '@/assets/images/about/foreground-dk2x.webp';
import ForegroundDk3xAvif from '@/assets/images/about/foreground-dk3x.avif';
import ForegroundDk3xWebp from '@/assets/images/about/foreground-dk3x.webp';
import ForegroundMbTinyWebp from '@/assets/images/about/foreground-mb-tiny.webp';
import ForegroundMbAvif from '@/assets/images/about/foreground-mb.avif';
import ForegroundMbWebp from '@/assets/images/about/foreground-mb.webp';
import ForegroundMb2xAvif from '@/assets/images/about/foreground-mb2x.avif';
import ForegroundMb2xWebp from '@/assets/images/about/foreground-mb2x.webp';
import ForegroundMb3xAvif from '@/assets/images/about/foreground-mb3x.avif';
import ForegroundMb3xWebp from '@/assets/images/about/foreground-mb3x.webp';
import ForegroundTbTinyWebp from '@/assets/images/about/foreground-tb-tiny.webp';
import ForegroundTbAvif from '@/assets/images/about/foreground-tb.avif';
import ForegroundTbWebp from '@/assets/images/about/foreground-tb.webp';
import ForegroundTb2xAvif from '@/assets/images/about/foreground-tb2x.avif';
import ForegroundTb2xWebp from '@/assets/images/about/foreground-tb2x.webp';
import ForegroundTb3xAvif from '@/assets/images/about/foreground-tb3x.avif';
import ForegroundTb3xWebp from '@/assets/images/about/foreground-tb3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import css from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <section className={css.wrapper}>
            <BgLoader
                prtClass={css.fgParent}
                imgClass={css.fgImage}
                alt="Набор фиолетовых рун с золотыми символами и колода карт с растительным орнаментом на фиолетовом фоне акварельных пятен"
                dk={ForegroundDkWebp}
                dk2x={ForegroundDk2xWebp}
                dk3x={ForegroundDk3xWebp}
                dkAvif={ForegroundDkAvif}
                dkAvif2x={ForegroundDk2xAvif}
                dkAvif3x={ForegroundDk3xAvif}
                dkTiny={ForegroundDkTinyWebp}
                tb={ForegroundTbWebp}
                tb2x={ForegroundTb2xWebp}
                tb3x={ForegroundTb3xWebp}
                tbAvif={ForegroundTbAvif}
                tbAvif2x={ForegroundTb2xAvif}
                tbAvif3x={ForegroundTb3xAvif}
                tbTiny={ForegroundTbTinyWebp}
                mb={ForegroundMbWebp}
                mb2x={ForegroundMb2xWebp}
                mb3x={ForegroundMb3xWebp}
                mbAvif={ForegroundMbAvif}
                mbAvif2x={ForegroundMb2xAvif}
                mbAvif3x={ForegroundMb3xAvif}
                mbTiny={ForegroundMbTinyWebp}
            />

            <div className={css.content}>
                <h1 className={css.heading}>
                    <span class="decorative-title">
                        Lavanda<sup>Kim</sup>
                    </span>{' '}- то, во что мы верим
                </h1>
                <p>
                    LavandaKim создавалась как пространство, в которое хочется возвращаться.
                </p>
                <p>
                    Здесь нет бесконечной ленты, случайных советов и информационного шума. Только инструменты, которые помогают остановиться, посмотреть на ситуацию чуть глубже и услышать себя.
                </p>
                <p>
                    Каждый раздел, каждая интерпретация и каждая практика были тщательно отобраны и созданы специально для этого проекта.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
