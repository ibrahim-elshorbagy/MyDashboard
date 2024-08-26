import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    FaUsers,
    FaDollarSign,
    FaShoppingCart,
    FaLifeRing,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "@/i18nConfig";

const resources = {
    en: {
        translation: {
            Dashboard: "Dashboard",
            TotalUsers: "Total Users",
            ActiveUsers: "Number of active users",
            Revenue: "Revenue",
            TotalRevenue: "Total revenue this month",
            NewOrders: "New Orders",
            OrdersToday: "Orders received today",
            SupportTickets: "Support Tickets",
            OpenTickets: "Open support tickets",
            UpdatedAgo: "Updated {{count}} {{unit}} ago",
            Mins: "mins",
            Seconds: "seconds",
        },
    },
    ar: {
        translation: {
            Dashboard: "لوحة التحكم",
            TotalUsers: "إجمالي المستخدمين",
            ActiveUsers: "عدد المستخدمين النشطين",
            Revenue: "الإيرادات",
            TotalRevenue: "إجمالي الإيرادات هذا الشهر",
            NewOrders: "الطلبات الجديدة",
            OrdersToday: "الطلبات المستلمة اليوم",
            SupportTickets: "تذاكر الدعم",
            OpenTickets: "تذاكر الدعم المفتوحة",
            UpdatedAgo: "تم التحديث منذ {{count}} {{unit}}",
            Mins: "دقائق",
            Seconds: "ثواني",
        },
    },
};

i18n.addResources("en", "translation", resources.en.translation);
i18n.addResources("ar", "translation", resources.ar.translation);

const Dashboard = ({ auth }) => {
    const { t } = useTranslation();

    return (
        <>
            <Head title="Dashboard" />
            <div>
                <div className="px-1 mx-auto sm:px-6 lg:px-6">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="gap-4 p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                                <Card className="bg-white">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <FaUsers className="mr-3 text-3xl text-blue-500" />
                                            <div>
                                                <CardTitle>
                                                    {t("TotalUsers")}
                                                </CardTitle>
                                                <CardDescription>
                                                    {t("ActiveUsers")}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold">1,250</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-gray-400">
                                             {t("UpdatedAgo", { count: 10, unit: t("Mins") })}
                                        </p>
                                    </CardFooter>
                                </Card>

                                <Card className="bg-white">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <FaDollarSign className="mr-3 text-3xl text-green-500" />
                                            <div>
                                                <CardTitle>
                                                    {t("Revenue")}
                                                </CardTitle>
                                                <CardDescription>
                                                    {t("TotalRevenue")}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold">$50,000</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-gray-400">
                                             {t("UpdatedAgo", { count: 10, unit: t("Mins") })}
                                        </p>
                                    </CardFooter>
                                </Card>

                                <Card className="bg-white">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <FaShoppingCart className="mr-3 text-3xl text-orange-500" />
                                            <div>
                                                <CardTitle>
                                                    {t("NewOrders")}
                                                </CardTitle>
                                                <CardDescription>
                                                    {t("OrdersToday")}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold">120</p>
                                    </CardContent>
                                        <CardFooter>
                                            <p className="text-gray-400">
                                                 {t("UpdatedAgo", { count: 10, unit: t("Mins") })}
                                            </p>
                                        </CardFooter>
                                </Card>

                                <Card className="bg-white">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <FaLifeRing className="mr-3 text-3xl text-red-500" />
                                            <div>
                                                <CardTitle>
                                                    {t("SupportTickets")}
                                                </CardTitle>
                                                <CardDescription>
                                                    {t("OpenTickets")}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold">35</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-gray-400">
                                            {t("UpdatedAgo", { count: 10, unit: t("Mins") })}
                                        </p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const DashboardHeader = () => {
    const { t } = useTranslation();
    return (
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            {t("Dashboard")}
        </h2>
    );
};

Dashboard.layout = (page) => (
    <AuthenticatedLayout
        user={page.props.auth.user}
        header={<DashboardHeader />}
    >
        {page}
    </AuthenticatedLayout>
);

export default Dashboard;

