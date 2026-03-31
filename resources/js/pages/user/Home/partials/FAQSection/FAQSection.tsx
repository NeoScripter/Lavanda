import BgDkTinyWebp from '@/assets/images/home/benefits/bg-dk-tiny.webp';
import BgDkAvif from '@/assets/images/home/benefits/bg-dk.avif';
import BgDkWebp from '@/assets/images/home/benefits/bg-dk.webp';
import BgDk2xAvif from '@/assets/images/home/benefits/bg-dk2x.avif';
import BgDk2xWebp from '@/assets/images/home/benefits/bg-dk2x.webp';
import BgDk3xAvif from '@/assets/images/home/benefits/bg-dk3x.avif';
import BgDk3xWebp from '@/assets/images/home/benefits/bg-dk3x.webp';
import BgMbTinyWebp from '@/assets/images/home/benefits/bg-mb-tiny.webp';
import BgMbAvif from '@/assets/images/home/benefits/bg-mb.avif';
import BgMbWebp from '@/assets/images/home/benefits/bg-mb.webp';
import BgMb2xAvif from '@/assets/images/home/benefits/bg-mb2x.avif';
import BgMb2xWebp from '@/assets/images/home/benefits/bg-mb2x.webp';
import BgMb3xAvif from '@/assets/images/home/benefits/bg-mb3x.avif';
import BgMb3xWebp from '@/assets/images/home/benefits/bg-mb3x.webp';
import BgTbTinyWebp from '@/assets/images/home/benefits/bg-tb-tiny.webp';
import BgTbAvif from '@/assets/images/home/benefits/bg-tb.avif';
import BgTbWebp from '@/assets/images/home/benefits/bg-tb.webp';
import BgTb2xAvif from '@/assets/images/home/benefits/bg-tb2x.avif';
import BgTb2xWebp from '@/assets/images/home/benefits/bg-tb2x.webp';
import BgTb3xAvif from '@/assets/images/home/benefits/bg-tb3x.avif';
import BgTb3xWebp from '@/assets/images/home/benefits/bg-tb3x.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';

import { faqItems } from '@/lib/data/faqItems';
import { cn } from '@/utils/cn';
import css from './FAQSection.module.scss';

const FAQSection = () => {
    return (
        <section
            id="faqs"
            class={cn(css.faqWrapper, 'full-bleed')}
        >
            <BgLoader
                prtClass={css.bgLoader}
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

            <h2 className={css.heading}>Вопросы и ответы</h2>

            <div className={css.faqs}>
                {faqItems.map((faq) => (
                    <details
                        key={faq.id}
                        className={css.details}
                    >
                        <summary className={css.summary}>
                            {faq.question}
                            <span className={css.icon}>
                                <svg
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.0001 1.77783V30.2223M30.2223 16.0001H1.77783"
                                        stroke="#111118"
                                        stroke-width="1.77778"
                                        stroke-linecap="round"
                                        class={cn(css.path)}
                                    />
                                </svg>
                            </span>
                        </summary>

                        <div
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                            className={css.answer}
                        />
                    </details>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
