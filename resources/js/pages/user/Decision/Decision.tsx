import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { cn } from '@/utils/cn';
import { Head } from '@inertiajs/react';
import css from './Decision.module.scss';
import HeroSection from './partials/HeroSection/HeroSection';
import BgDk from '@/assets/images/assymetric-layout/dk-bg.webp';
import BgDkTiny from '@/assets/images/assymetric-layout/dk-bg-tiny.webp';
import BgTb from '@/assets/images/assymetric-layout/tb-bg.webp';
import BgTbTiny from '@/assets/images/assymetric-layout/tb-bg-tiny.webp';
import BgMb from '@/assets/images/assymetric-layout/mb-bg.webp';
import BgMbTiny from '@/assets/images/assymetric-layout/mb-bg-tiny.webp';

const Decision = () => {
    return (
        <AppLayout extendedFooter={false}>
            <Head title="Решение" />

            <BgLoader
                prtClass={cn(css.bgLoader, 'full-bleed')}
                dk={BgDk}
                dkTiny={BgDkTiny}
                tb={BgTb}
                tbTiny={BgTbTiny}
                mb={BgMb}
                mbTiny={BgMbTiny}
            />

            <HeroSection />
        </AppLayout>
    );
};

export default Decision;
