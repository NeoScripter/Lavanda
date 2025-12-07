import AppearanceTabs from '@/components/admin/ui/appearance-tabs';
import HeadingSmall from '@/components/admin/ui/heading-small';
import useTrans from '@/hooks/useTrans';
import AdminLayout from '@/layouts/admin/AdminLayout';
import SettingsLayout from '@/layouts/admin/SettingsLayout';
import { Head } from '@inertiajs/react';

export default function Appearance() {
    const t = useTrans();

    return (
        <AdminLayout title={t('Appearance settings')}>
            <Head title={t('Appearance settings')} />
            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title={t('Appearance settings')}
                        description={t(
                            "Update your account's appearance settings",
                        )}
                    />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </AdminLayout>
    );
}
