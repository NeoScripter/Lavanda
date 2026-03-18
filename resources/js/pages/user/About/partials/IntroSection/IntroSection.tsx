import BgDkTinyWebp from '@/assets/images/about/intro/bg-dk-tiny.webp';
import BgDkAvif from '@/assets/images/about/intro/bg-dk.avif';
import BgDkWebp from '@/assets/images/about/intro/bg-dk.webp';
import BgDk2xAvif from '@/assets/images/about/intro/bg-dk2x.avif';
import BgDk2xWebp from '@/assets/images/about/intro/bg-dk2x.webp';
import BgDk3xAvif from '@/assets/images/about/intro/bg-dk3x.avif';
import BgDk3xWebp from '@/assets/images/about/intro/bg-dk3x.webp';
import BgMbTinyWebp from '@/assets/images/about/intro/bg-mb-tiny.webp';
import BgMbAvif from '@/assets/images/about/intro/bg-mb.avif';
import BgMbWebp from '@/assets/images/about/intro/bg-mb.webp';
import BgMb2xAvif from '@/assets/images/about/intro/bg-mb2x.avif';
import BgMb2xWebp from '@/assets/images/about/intro/bg-mb2x.webp';
import BgMb3xAvif from '@/assets/images/about/intro/bg-mb3x.avif';
import BgMb3xWebp from '@/assets/images/about/intro/bg-mb3x.webp';
import BgTbTinyWebp from '@/assets/images/about/intro/bg-tb-tiny.webp';
import BgTbAvif from '@/assets/images/about/intro/bg-tb.avif';
import BgTbWebp from '@/assets/images/about/intro/bg-tb.webp';
import BgTb2xAvif from '@/assets/images/about/intro/bg-tb2x.avif';
import BgTb2xWebp from '@/assets/images/about/intro/bg-tb2x.webp';
import BgTb3xAvif from '@/assets/images/about/intro/bg-tb3x.avif';
import BgTb3xWebp from '@/assets/images/about/intro/bg-tb3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { cn } from '@/utils/cn';
import css from './IntroSection.module.scss';
import { items } from './pageData';

const IntroSection = () => {
    return (
        <section className={cn(css.wrapper, 'full-bleed')}>
            <h2 className={css.heading}>Преимущества ресурса</h2>

            <ul>
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className={css.listItem}
                    >
                        <h3>{`${idx + 1}. ${item.title}`}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>

            <BgLoader
                prtClass={css.fgParent}
                imgClass={css.fgImage}
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
        </section>
    );
};

export default IntroSection;
