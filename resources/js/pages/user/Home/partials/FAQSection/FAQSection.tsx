import { faqItems } from '@/lib/data/faqItems';
import { cn } from '@/utils/cn';
import { useRef, useState } from 'preact/hooks';
import css from './FAQSection.module.scss';

const FAQSection = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    const detailsRefs = useRef<{ [key: number]: HTMLDetailsElement }>({});

    const toggle = (id: number) => {
        const isOpening = openId !== id;
        setOpenId(isOpening ? id : null);

        if (detailsRefs.current[id]) {
            detailsRefs.current[id].open = isOpening;
        }
    };

    return (
        <section class={css.faqWrapper}>
            <h2 className={css.heading}>Вопросы и ответы</h2>

            <div className={css.faqs}>
                {faqItems.map((faq) => (
                    <details
                        key={faq.id}
                        open={openId === faq.id}
                        ref={(el) => {
                            if (el) detailsRefs.current[faq.id] = el;
                        }}
                        className={css.details}
                    >
                        <summary
                            onClick={(e) => {
                                e.preventDefault();
                                toggle(faq.id);
                            }}
                            className={css.summary}
                        >
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
                                        class={cn(
                                            css.path,
                                            openId === faq.id
                                                ? css.rotated
                                                : css.static,
                                        )}
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
