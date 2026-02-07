import BackgroundDkTinyWebp from '@/assets/images/article/background-dk-tiny.webp';
import BackgroundDkAvif from '@/assets/images/article/background-dk.avif';
import BackgroundDkWebp from '@/assets/images/article/background-dk.webp';
import BackgroundMbTinyWebp from '@/assets/images/article/background-mb-tiny.webp';
import BackgroundMbAvif from '@/assets/images/article/background-mb.avif';
import BackgroundMbWebp from '@/assets/images/article/background-mb.webp';
import BackgroundTbTinyWebp from '@/assets/images/article/background-tb-tiny.webp';
import BackgroundTbAvif from '@/assets/images/article/background-tb.avif';
import BackgroundTbWebp from '@/assets/images/article/background-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { Article as ArticleType } from '@/types/model';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import css from './Article.module.scss';

const Article = () => {
    const { article } = usePage<{ article: ArticleType }>().props;

    return (
        <AppLayout
            extendedFooter={true}
            variation="white"
            className={css.layout}
        >
            <section
                className={cn(css.content, 'full-bleed')}
                dangerouslySetInnerHTML={{ __html: article?.html ?? '' }}
            />
            <BgLoader
                prtClass={cn(css.bgLoader, 'full-bleed')}
                imgClass={css.bgImage}
                dk={BackgroundDkWebp}
                dkAvif={BackgroundDkAvif}
                dkTiny={BackgroundDkTinyWebp}
                tb={BackgroundTbWebp}
                tbAvif={BackgroundTbAvif}
                tbTiny={BackgroundTbTinyWebp}
                mb={BackgroundMbWebp}
                mbAvif={BackgroundMbAvif}
                mbTiny={BackgroundMbTinyWebp}
            />
        </AppLayout>
    );
};

export default Article;
