import HeadingSmall from '@/components/admin/ui/heading-small';
import LangugageTabs from '@/components/admin/ui/langugage-tabs';
import useTrans from '@/hooks/useTrans';
import AdminLayout from '@/layouts/admin/AdminLayout';
import SettingsLayout from '@/layouts/admin/SettingsLayout';
import { Head } from '@inertiajs/react';

export default function Langugage() {
    const t = useTrans();

    return (
        <AdminLayout title={t("Language")}>
            <Head title={t("Language")} />
            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title={t("Language")}
                        description={t("Change language")}
                    />
                    <LangugageTabs />
                </div>
            </SettingsLayout>
        </AdminLayout>
    );
}
