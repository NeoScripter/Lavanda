import Choice1MbWebp from '@/assets/images/home/choice-1-mb.webp';
import Choice2MbWebp from '@/assets/images/home/choice-2-mb.webp';
import Choice3MbWebp from '@/assets/images/home/choice-3-mb.webp';
import Choice4MbWebp from '@/assets/images/home/choice-4-mb.webp';
import HeroDecorTiny from '@/assets/images/home/hero-decor-tiny.webp';
import HeroDecor from '@/assets/images/home/hero-decor.webp';
import { NodeProps } from '@/types/nodeProps';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-preact';
import { FC } from 'preact/compat';
import css from './ChoiceSection.module.scss';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';

const ChoiceSection: FC<NodeProps> = ({ children }) => {
    return (
        <section className={css.wrapper}>
            <h2 className={css.heading}>Какой вопрос вас волнует сегодня?</h2>

            <LazyImage
                img={HeroDecor}
                tinyImg={HeroDecorTiny}
                prtClass={css.decor}
            />
            <ul className={css.linkList}>
                {choiceLinks.map((link) => (
                    <li key={link.id}>
                        <Link
                            href={link.url}
                            className={css.linkItem}
                        >
                            <figure
                                aria-hidden="true"
                                className={css.icon}
                            >
                                <img
                                    src={link.icon}
                                    alt=""
                                />
                            </figure>
                            <span className={css.linkLabel}>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <a
                href="#intro-section"
                className={css.scrollBtn}
            >
                Все разделы сайта
                <ArrowRight />
            </a>

            {children}
        </section>
    );
};

export default ChoiceSection;

const choiceLinks = [
    {
        id: crypto.randomUUID(),
        label: 'Почему я сегодня здесь?',
        icon: Choice1MbWebp,
        url: route('promo'),
    },
    {
        id: crypto.randomUUID(),
        label: 'Не могу принять решение',
        icon: Choice2MbWebp,
        url: route('decision.index'),
    },
    {
        id: crypto.randomUUID(),
        label: 'Как войти в нужный настрой?',
        icon: Choice3MbWebp,
        url: route('affirmations'),
    },
    {
        id: crypto.randomUUID(),
        label: 'Мне грустно',
        icon: Choice4MbWebp,
        url: route('sadness.index'),
    },
];
