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
            <div className={css.faqs}>
                {items.map((faq, idx) => (
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
                            <span className={css.animtedNumber}>
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M8.75549 1.17943C3.19042 -0.625584 -2.14636 11.7186 3.10521 17.624C9.08268 24.3457 19.7296 20.1719 20.0615 12.6425C20.4188 4.53892 9.577 -0.921747 4.30802 6.05208"
                                        stroke="#B9B2CB"
                                        stroke-width="2"
                                    />
                                </svg>
                                {idx + 1}
                            </span>
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
