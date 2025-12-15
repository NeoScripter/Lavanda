import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import css from './Account.module.scss';
import { Head } from '@inertiajs/react';

const Account = () => {
    return (
        <AppLayout className={css.layout}>
            <Head title="Личный кабинет" />

            This is the account page
        </AppLayout>
    );
};

export default Account;
