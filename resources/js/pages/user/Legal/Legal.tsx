import BackgroundDkTinyWebp from '@/assets/images/legal/background-dk-tiny.webp';
import BackgroundDkAvif from '@/assets/images/legal/background-dk.avif';
import BackgroundDkWebp from '@/assets/images/legal/background-dk.webp';
import BackgroundMbTinyWebp from '@/assets/images/legal/background-mb-tiny.webp';
import BackgroundMbAvif from '@/assets/images/legal/background-mb.avif';
import BackgroundMbWebp from '@/assets/images/legal/background-mb.webp';
import BackgroundTbTinyWebp from '@/assets/images/legal/background-tb-tiny.webp';
import BackgroundTbAvif from '@/assets/images/legal/background-tb.avif';
import BackgroundTbWebp from '@/assets/images/legal/background-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { Legal as LegalType } from '@/types/model';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import css from './Legal.module.scss';

const Legal = () => {
    const { legal } = usePage<{ legal: LegalType }>().props;

    return (
        <AppLayout
            extendedFooter={true}
            variation="white"
            className={css.layout}
        >
            <section
                className={cn(css.content, 'full-bleed')}
                dangerouslySetInnerHTML={{ __html: legal?.html ?? '' }}
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

export default Legal;
