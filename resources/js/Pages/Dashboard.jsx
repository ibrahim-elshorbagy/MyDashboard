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

const Dashboard = ({ auth }) => {
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
                                        <div className="flex items-center">
                                            <FaUsers className="mr-3 text-3xl text-blue-500" />
                                            <div>
                                                <CardTitle >
                                                    Total Users
                                                </CardTitle>
                                                <CardDescription >
                                                    Number of active users
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold ">
                                            1,250
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-gray-400">
                                            Updated 5 mins ago
                                        </p>
                                    </CardFooter>
                                </Card>

                                <Card className="bg-white">
                                    <CardHeader>
                                        <div className="flex items-center">
                                            <FaDollarSign className="mr-3 text-3xl text-green-500" />
                                            <div>
                                                <CardTitle >
                                                    Revenue
                                                </CardTitle>
                                                <CardDescription >
                                                    Total revenue this month
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold ">
                                            $50,000
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-gray-400">
                                            Updated 10 mins ago
                                        </p>
                                    </CardFooter>
                                </Card>

                                <Card className="bg-white">
                                    <CardHeader>
                                        <div className="flex items-center">
                                            <FaShoppingCart className="mr-3 text-3xl text-orange-500" />
                                            <div>
                                                <CardTitle >
                                                    New Orders
                                                </CardTitle>
                                                <CardDescription >
                                                    Orders received today
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold ">
                                            120
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-gray-400">
                                            Updated 2 mins ago
                                        </p>
                                    </CardFooter>
                                </Card>

                                <Card className="bg-white">
                                    <CardHeader>
                                        <div className="flex items-center">
                                            <FaLifeRing className="mr-3 text-3xl text-red-500" />
                                            <div>
                                                <CardTitle >
                                                    Support Tickets
                                                </CardTitle>
                                                <CardDescription >
                                                    Open support tickets
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-bold ">
                                            35
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-gray-400">
                                            Updated 1 min ago
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

Dashboard.layout = (page) => (
    <AuthenticatedLayout
        user={page.props.auth.user}
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Dashboard
            </h2>
        }
    >
        {page}
    </AuthenticatedLayout>
);

export default Dashboard;
