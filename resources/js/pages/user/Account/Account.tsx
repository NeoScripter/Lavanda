import AppLayout from '@/layouts/user/AppLayout/AppLayout';
import { cn } from '@/utils/cn';
import { Head, Link } from '@inertiajs/react';
import css from './Account.module.scss';

const Account = () => {
    return (
        <AppLayout className={css.layout}>
            <Head title="Личный кабинет" />
            <div>This is the account page</div>
            <Link
                href={route('logout')}
                method="post"
                class={cn(css.logoutBtn, 'primary-btn')}
            >
                Выйти
            </Link>
        </AppLayout>
    );
};

export default Account;
