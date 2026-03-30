import BgDkTinyWebp from '@/assets/images/home/bg-dk-tiny.webp';
import BgDkAvif from '@/assets/images/home/bg-dk.avif';
import BgDkWebp from '@/assets/images/home/bg-dk.webp';
import BgDk2xAvif from '@/assets/images/home/bg-dk2x.avif';
import BgDk2xWebp from '@/assets/images/home/bg-dk2x.webp';
import BgDk3xAvif from '@/assets/images/home/bg-dk3x.avif';
import BgDk3xWebp from '@/assets/images/home/bg-dk3x.webp';
import BgMbTinyWebp from '@/assets/images/home/bg-mb-tiny.webp';
import BgMbAvif from '@/assets/images/home/bg-mb.avif';
import BgMbWebp from '@/assets/images/home/bg-mb.webp';
import BgMb2xAvif from '@/assets/images/home/bg-mb2x.avif';
import BgMb2xWebp from '@/assets/images/home/bg-mb2x.webp';
import BgMb3xAvif from '@/assets/images/home/bg-mb3x.avif';
import BgMb3xWebp from '@/assets/images/home/bg-mb3x.webp';
import BgTbTinyWebp from '@/assets/images/home/bg-tb-tiny.webp';
import BgTbAvif from '@/assets/images/home/bg-tb.avif';
import BgTbWebp from '@/assets/images/home/bg-tb.webp';
import BgTb2xAvif from '@/assets/images/home/bg-tb2x.avif';
import BgTb2xWebp from '@/assets/images/home/bg-tb2x.webp';
import BgTb3xAvif from '@/assets/images/home/bg-tb3x.avif';
import BgTb3xWebp from '@/assets/images/home/bg-tb3x.webp';
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
                dk={BgDkWebp}
                dk2x={BgDk2xWebp}
                dk3x={BgDk3xWebp}
                dkAvif={BgDkAvif}
                dkAvif2x={BgDk2xAvif}
                dkAvif3x={BgDk3xAvif}
                dkTiny={BgDkTinyWebp}
                tb={BgTbWebp}
                tb2x={BgTb2xWebp}
                tb3x={BgTb3xWebp}
                tbAvif={BgTbAvif}
                tbAvif2x={BgTb2xAvif}
                tbAvif3x={BgTb3xAvif}
                tbTiny={BgTbTinyWebp}
                mb={BgMbWebp}
                mb2x={BgMb2xWebp}
                mb3x={BgMb3xWebp}
                mbAvif={BgMbAvif}
                mbAvif2x={BgMb2xAvif}
                mbAvif3x={BgMb3xAvif}
                mbTiny={BgMbTinyWebp}
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
