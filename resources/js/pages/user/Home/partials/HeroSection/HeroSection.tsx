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
import { Link } from '@inertiajs/react';
import css from './HeroSection.module.scss';
import { questions } from './pageData';

const HeroSection = () => {
    return (
        <section class={cn(css.wrapper, 'full-bleed')}>
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

            <div class={css.content}>
                <h1 className={css.contentHeading}>
                    Онлайн сервис для самопознания
                </h1>

                <ul className={css.questionList}>
                    {questions.map((question) => (
                        <li key={question}>{question}</li>
                    ))}
                </ul>

                <p class={css.intro}>
                    Если такие вопросы вам знакомы - Вы в правильном месте.{' '}
                    <br />{' '}
                    <span class="decorative-title">
                        Lavanda<sup>Kim</sup>
                    </span>
                    - Ваш помощник в мире неопределенности и сомнений.
                </p>

                <div class={css.btnGroup}>
                    <Link
                        href={route('plans')}
                        prefetch
                        class={'primary-btn'}
                    >
                        Купить подписку
                    </Link>
                    <Link
                        href={route('about')}
                        prefetch
                        class={css.infoBtn}
                    >
                        <PlayBtn />
                        <span class={css.underline}>Узнать больше</span>
                    </Link>
                </div>
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
        </section>
    );
};

export default HeroSection;

const PlayBtn = () => {
    return (
        <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                opacity="0.75"
                cx="17.5"
                cy="17.5"
                r="16.5"
                stroke="#5F4E8C"
                stroke-width="2"
            />
            <path
                opacity="0.75"
                d="M22.5 14.9019C24.5 16.0566 24.5 18.9434 22.5 20.0981L17.25 23.1292C15.25 24.2839 12.75 22.8405 12.75 20.5311L12.75 14.4689C12.75 12.1595 15.25 10.7161 17.25 11.8708L22.5 14.9019Z"
                fill="#5F4E8C"
            />
        </svg>
    );
};
