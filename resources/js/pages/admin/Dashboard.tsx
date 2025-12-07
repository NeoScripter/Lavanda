import useTrans from "@/hooks/useTrans";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { Head } from "@inertiajs/react";

const Dashboard = () => {
    const t = useTrans();

    return (
        <AdminLayout title={t("Dashboard")}>
            <Head title={t("Admin panel")} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="text">{t('This is the dashboard page')}</div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
