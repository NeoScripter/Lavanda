import { faqItems } from '@/lib/data/faqItems';
import { cn } from '@/utils/cn';
import css from './FAQSection.module.scss';

const FAQSection = () => {
    return (
        <section id="faqs" class={css.faqWrapper}>
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
