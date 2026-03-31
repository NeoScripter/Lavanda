import { cn } from '@/utils/cn';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-preact';
import css from './LearnMoreSection.module.scss';

const LearnMoreSection = () => {
    return (
        <section className={css.wrapper}>
            <h2 className={css.heading}>Остались вопросы?</h2>
            <p className={css.content}>
                В разделе “Вопросы и Ответы” мы собрали еще больше информации,
                чтобы как можно подробнее рассказать о ресурсе.
            </p>

            <Link
                href={route('faqs')}
                class={cn('secondary-btn', css.neutralBtn)}
            >
                Вопросы и ответы
                <ArrowRight />
            </Link>
        </section>
    );
};

export default LearnMoreSection;
