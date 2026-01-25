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
import DeleteUser from '@/components/user/forms/DeleteUser/DeleteUser';
import UpdateUser from '@/components/user/forms/UpdateUser/UpdateUser';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import LazyImage from '@/components/user/ui/LazyImage/LazyImage';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import DialogLayout from '@/layouts/user/DialogLayout/DialogLayout';
import { User } from '@/lib/types';
import { Subscription } from '@/types/model';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/formatData';
import { usePage } from '@inertiajs/react';
import { X } from 'lucide-preact';
import { useState } from 'preact/hooks';
import css from './Account.module.scss';

const Account = () => {
    const { user } = usePage<{
        user: User;
    }>().props;
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const sub = user.subscription as Subscription;

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

                <div className={css.actions}>
                    <button
                        onClick={() => setShowDeleteDialog(true)}
                        type="button"
                        className={css.deleteBtn}
                    >
                        <X />
                        Удалить аккаунт
                    </button>
                </div>

                {sub?.ends_at && (
                    <h3 className={css.planDetails}>
                        {`Тариф “${sub.tier}”, оплачен до ${formatDate(sub.ends_at)}`}
                    </h3>
                )}
            </section>

            <DialogLayout
                show={showDeleteDialog}
                onClose={() => setShowDeleteDialog(false)}
            >
                <DeleteUser onCancel={() => setShowDeleteDialog(false)} />
            </DialogLayout>
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
