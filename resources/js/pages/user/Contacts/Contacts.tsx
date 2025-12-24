import BackgroundDkTiny from '@/assets/images/contacts/background-dk-tiny.webp';
import BackgroundDk from '@/assets/images/contacts/background-dk.webp';
import BackgroundMb from '@/assets/images/contacts/background-mb.webp';
import BackgroundTbTiny from '@/assets/images/contacts/background-tb-tiny.webp';
import BackgroundTb from '@/assets/images/contacts/background-tb.webp';
import BgLoader from '@/components/user/ui/BgLoader/BgLoader';
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
            <section>this is the contacts page</section>

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
