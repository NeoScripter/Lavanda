import BackgroundDkTiny from '@/assets/images/contacts/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/contacts/background-dk.webp';
import BackgroundMb from '@/assets/images/contacts/background-mb.webp';
import BackgroundTbTiny from '@/assets/images/contacts/background-tb-tiny.webp';
import BackgroundTb from '@/assets/images/contacts/background-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
import ContactLinks from '@/components/user/ui/ContactLinks/ContactLinks';
import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { cn } from '@/utils/cn';
import css from './Contacts.module.scss';

const Contacts = () => {
    return (
        <AppLayout
            extendedFooter={false}
            variation="dark"
            className={css.layout}
        >
            <section class={css.wrapper}>
                <h1 class={css.heading}>Контакты</h1>
                <p class={css.intro}>
                    Если у вас возникли вопросы, пожалуйста, свяжитесь с нами.
                </p>

                <ContactLinks className={css.contactLinks} />

                {/* <SocialLinks */}
                {/*     className={css.socialLinks} */}
                {/*     bgColor="hsl(264, 34%, 55%)" */}
                {/* /> */}
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

export default Contacts;
