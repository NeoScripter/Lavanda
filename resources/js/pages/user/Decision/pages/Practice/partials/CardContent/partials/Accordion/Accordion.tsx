import { PracticeItemFaq } from '@/types/model';
import { cn } from '@/utils/cn';
import { FC } from 'preact/compat';
import { useState } from 'preact/hooks';
import css from './Accordion.module.scss';

const Accordion: FC<{ items: PracticeItemFaq[] }> = ({ items }) => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section class={css.faqWrapper}>
            <h5 className={css.heading}>Пошаговая инструкция</h5>

            <div className={css.faqs}>
                {items.map((faq) => (
                    <details
                        key={faq.id}
                        open={openId === faq.id}
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
                                        stroke-width="3"
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

                        <div className={css.answer}>{faq.answer}</div>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default Accordion;
