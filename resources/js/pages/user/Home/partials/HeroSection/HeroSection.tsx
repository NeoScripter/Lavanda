import BgDkTiny from '@/assets/images/home/hero-bg-dk-tiny.webp';
import BgDk from '@/assets/images/home/hero-bg-dk.webp';
import BgTbTiny from '@/assets/images/home/hero-bg-tb-tiny.webp';
import BgTb from '@/assets/images/home/hero-bg-tb.webp';
import HeroDecorTiny from '@/assets/images/home/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/home/hero-decor.webp';
import HeroFgDkTinyWebp from '@/assets/images/home/hero-fg-dk-tiny.webp';
import HeroFgDkAvif from '@/assets/images/home/hero-fg-dk.avif';
import HeroFgDkWebp from '@/assets/images/home/hero-fg-dk.webp';
import HeroFgDk2xAvif from '@/assets/images/home/hero-fg-dk2x.avif';
import HeroFgDk2xWebp from '@/assets/images/home/hero-fg-dk2x.webp';
import HeroFgDk3xAvif from '@/assets/images/home/hero-fg-dk3x.avif';
import HeroFgDk3xWebp from '@/assets/images/home/hero-fg-dk3x.webp';
import HeroFgMbTinyWebp from '@/assets/images/home/hero-fg-mb-tiny.webp';
import HeroFgMbAvif from '@/assets/images/home/hero-fg-mb.avif';
import HeroFgMbWebp from '@/assets/images/home/hero-fg-mb.webp';
import HeroFgMb2xAvif from '@/assets/images/home/hero-fg-mb2x.avif';
import HeroFgMb2xWebp from '@/assets/images/home/hero-fg-mb2x.webp';
import HeroFgMb3xAvif from '@/assets/images/home/hero-fg-mb3x.avif';
import HeroFgMb3xWebp from '@/assets/images/home/hero-fg-mb3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import { cn } from '@/utils/cn';
import PromoCards from '../PromoCards';
import css from './HeroSection.module.scss';
import { questions } from './pageData';

const HeroSection = () => {
    return (
        <section class={cn(css.root, 'full-bleed')}>
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

            <LazyImage
                img={HeroDecor}
                tinyImg={HeroDecorTiny}
                prtClass={css.decor}
            />

            <div className={css.outer}>
                <h1 className={css.heading}>Понять себя и свою ситуацию</h1>
                <p class={css.intro}>
                    Иногда достаточно одной подсказки, чтобы стало легче
                </p>

                <div className={css.main}>
                    <div class={css.left}>
                        <div className={css.faq}>
                            <p class={css.faqTitle}>
                                Иногда достаточно одной подсказки, чтобы стало
                                легче
                            </p>
                            <ul className={css.faqList}>
                                {questions.map((question, idx) => (
                                    <li
                                        key={question}
                                        style={{ '--delay': `${idx / 4}s` }}
                                    >
                                        {question}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <BgLoader
                            prtClass={cn(css.fgLoader)}
                            imgClass={css.fgImage}
                            dk={HeroFgDkWebp}
                            dk2x={HeroFgDk2xWebp}
                            dk3x={HeroFgDk3xWebp}
                            dkAvif={HeroFgDkAvif}
                            dkAvif2x={HeroFgDk2xAvif}
                            dkAvif3x={HeroFgDk3xAvif}
                            dkTiny={HeroFgDkTinyWebp}
                            tb={HeroFgDkWebp}
                            tb2x={HeroFgDk2xWebp}
                            tb3x={HeroFgDk3xWebp}
                            tbAvif={HeroFgDkAvif}
                            tbAvif2x={HeroFgDk2xAvif}
                            tbAvif3x={HeroFgDk3xAvif}
                            tbTiny={HeroFgDkTinyWebp}
                            mb={HeroFgMbWebp}
                            mb2x={HeroFgMb2xWebp}
                            mb3x={HeroFgMb3xWebp}
                            mbAvif={HeroFgMbAvif}
                            mbAvif2x={HeroFgMb2xAvif}
                            mbAvif3x={HeroFgMb3xAvif}
                            mbTiny={HeroFgMbTinyWebp}
                        />
                    </div>

                    <div className={css.right}>
                        <div>
                            <h2 className={css.gameHeading}>
                                Попробуйте одну карту
                            </h2>
                            <p className={css.gameIntro}>
                                Авторская колода "Почему вы сегодня здесь?"
                            </p>
                        </div>
                        <PromoCards />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
