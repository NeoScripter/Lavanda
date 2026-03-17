import FgDkTinyWebp from '@/assets/images/home/benefits/fg-dk-tiny.webp';
import FgDkAvif from '@/assets/images/home/benefits/fg-dk.avif';
import FgDkWebp from '@/assets/images/home/benefits/fg-dk.webp';
import FgDk2xAvif from '@/assets/images/home/benefits/fg-dk2x.avif';
import FgDk2xWebp from '@/assets/images/home/benefits/fg-dk2x.webp';
import FgDk3xAvif from '@/assets/images/home/benefits/fg-dk3x.avif';
import FgDk3xWebp from '@/assets/images/home/benefits/fg-dk3x.webp';
import FgMbTinyWebp from '@/assets/images/home/benefits/fg-mb-tiny.webp';
import FgMbAvif from '@/assets/images/home/benefits/fg-mb.avif';
import FgMbWebp from '@/assets/images/home/benefits/fg-mb.webp';
import FgMb2xAvif from '@/assets/images/home/benefits/fg-mb2x.avif';
import FgMb2xWebp from '@/assets/images/home/benefits/fg-mb2x.webp';
import FgMb3xAvif from '@/assets/images/home/benefits/fg-mb3x.avif';
import FgMb3xWebp from '@/assets/images/home/benefits/fg-mb3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-preact';
import css from './BenefitSection.module.scss';

const BenefitSection = () => {
    return (
        <section className={cn(css.wrapper, 'full-bleed')}>
            <BgLoader
                prtClass={cn(css.fgLoader)}
                imgClass={css.fgImage}
                dk={FgDkWebp}
                dk2x={FgDk2xWebp}
                dk3x={FgDk3xWebp}
                dkAvif={FgDkAvif}
                dkAvif2x={FgDk2xAvif}
                dkAvif3x={FgDk3xAvif}
                dkTiny={FgDkTinyWebp}
                tb={FgDkWebp}
                tb2x={FgDk2xWebp}
                tb3x={FgDk3xWebp}
                tbAvif={FgDkAvif}
                tbAvif2x={FgDk2xAvif}
                tbAvif3x={FgDk3xAvif}
                tbTiny={FgDkTinyWebp}
                mb={FgMbWebp}
                mb2x={FgMb2xWebp}
                mb3x={FgMb3xWebp}
                mbAvif={FgMbAvif}
                mbAvif2x={FgMb2xAvif}
                mbAvif3x={FgMb3xAvif}
                mbTiny={FgMbTinyWebp}
            />

            <div className={css.content}>
                <h3 className={css.heading}>Чем полезен этот ресурс?</h3>
                <p>
                    Все мы бываем запутаны в мыслях, подвержены влиянию
                    обстоятельств, прошлому опыту и мнению окружающих. В такие
                    моменты становится сложно услышать себя. Тогда достаточно
                    просто получить знак — символ, карту или подсказку.{' '}
                </p>
                <p>
                    В{' '}
                    <span class={cn('decorative-title', css.brandName)}>
                        Lavanda<sup>Kim</sup>
                    </span>
                    вы найдете всё это в одном месте: поддержку, статьи
                    экспертов, символические подсказки, расклады, монетки
                    И-цзин, руны и современные инструменты для размышления и
                    принятия решений.
                </p>
                <p>
                    Вам нужно лишь задать свой вопрос, выбрать инстумент и
                    получить необходимую подсказку, знак или совет.{' '}
                </p>

                <div className={css.btnWrapper}>
                    <Link
                        href={route('about')}
                        className={css.scrollBtn}
                    >
                        <span className={css.prefix}> Больше о</span>
                        <span class={cn('decorative-title', css.brandName)}>
                            Lavanda<sup>Kim</sup>
                        </span>
                        <ArrowRight />
                    </Link>
                    <a
                        href="#faqs"
                        className={css.scrollBtn}
                    >
                        Вопросы о ресурсе
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;
