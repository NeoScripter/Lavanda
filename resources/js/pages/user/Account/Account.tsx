import CrystalDkTinyWebp from '@/assets/images/account/crystal-dk-tiny.webp';
import CrystalDkWebp from '@/assets/images/account/crystal-dk.webp';
import FlowerDkTinyWebp from '@/assets/images/account/flower-dk-tiny.webp';
import FlowerDkWebp from '@/assets/images/account/flower-dk.webp';
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
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { Auth } from '@/types/auth';
import { cn } from '@/utils/cn';
import { usePage } from '@inertiajs/react';
import css from './Account.module.scss';
import UpdateUser from '@/components/user/forms/UpdateUser/UpdateUser';

const Account = () => {
    const { auth } = usePage<{ auth: Auth }>().props;

    return (
        <AppLayout
            extendedFooter={true}
            variation="white"
            className={css.layout}
        >
            <LazyImage
                img={FlowerDkWebp}
                tinyImg={FlowerDkTinyWebp}
                prtClass={css.decorPlans1}
            />
            <LazyImage
                img={CrystalDkWebp}
                tinyImg={CrystalDkTinyWebp}
                prtClass={css.decorPlans2}
            />

            <section className={cn(css.content, 'full-bleed')}>
                <h1 className={css.heading}>Редактировать профиль</h1>

                <UpdateUser />
            </section>

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

export default Account;
