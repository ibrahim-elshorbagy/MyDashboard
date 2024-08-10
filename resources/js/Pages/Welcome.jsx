import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { useTranslation } from "react-i18next";
import i18n from "@/i18nConfig";

const resources = {
    en: {
        translation: {
            "Welcome to": "Welcome to",
            "Your Application": "Your Application",
            "Explore our features": "Explore our features Get Started",
            "Get Started": "Get Started",
        },
    },
    ar: {
        translation: {
            "Welcome to": "مرحبًا بك في",
            "Your Application": "تطبيقك",
            "Explore our features": "استكشف ميزاتنا ابدأ الآن",
            "Get Started": "",
        },
    },
};

i18n.addResources("en", "translation", resources.en.translation);
i18n.addResources("ar", "translation", resources.ar.translation);

export default function Welcome({ auth }) {
    const { t } = useTranslation();

    return (
        <>
            <GuestLayout>
                <Head title={t("Welcome to") + " " + t("Your Application")} />
                <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    <h1 className="text-5xl font-bold">
                        {t("Welcome to")} <br /> {t("Your Application")}
                    </h1>
                    <p className="flex mt-4 text-lg">
                        {t("Explore our features")} !
                    </p>
                    <div className="flex gap-2 mt-8 ">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="px-6 py-3 text-lg font-semibold text-gray-800 bg-white rounded-lg shadow-lg"
                            >
                                {t("Dashboard")}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="px-6 py-3 text-lg font-semibold text-gray-800 bg-white rounded-lg shadow-lg"
                                >
                                    {t("Login")}
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="px-6 py-3 text-lg font-semibold bg-transparent border-2 border-white rounded-lg shadow-lg"
                                >
                                    {t("Register")}
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
