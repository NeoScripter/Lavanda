import BackgroundDkTiny from '@/assets/images/contacts/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/contacts/background-dk.webp';
import BackgroundMb from '@/assets/images/contacts/background-mb.webp';
import BackgroundTbTiny from '@/assets/images/contacts/background-tb-tiny.webp';
import BackgroundTb from '@/assets/images/contacts/background-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { cn } from '@/utils/cn';
import css from './Payment.module.scss';

const Payment = () => {
    return (
        <AppLayout
            extendedFooter={false}
            variation="dark"
            className={css.layout}
        >
            <section class={css.wrapper}>
                <h1 class={css.heading}>Поздравляем!</h1>
                <p class={css.intro}>
                    Ваша подписка успешно продлена.
                </p>
            </section>

            <BgLoader
                prtClass={cn(css.bgLoader, 'full-bleed')}
                imgClass={css.bgImage}
                dk={BackgroundDk}
                dkTiny={BackgroundDkTiny}
                tb={BackgroundTb}
                tbTiny={BackgroundTbTiny}
                mb={BackgroundMb}
                mbTiny={BackgroundTbTiny}
            />
        </AppLayout>
    );
};

export default Payment;
