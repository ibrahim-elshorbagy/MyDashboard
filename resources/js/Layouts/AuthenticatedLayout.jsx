import { useState, useEffect } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import SelectInput from "@/Components/SelectInput";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import MySidebar from "./sidebar/MySidebar";
import ThemeToggleButton from "../Components/ThemeToggleButton";
import { useTranslation } from "react-i18next";
import i18n from "@/i18nConfig";
import { FaFlagUsa } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const resources = {
    en: {
        translation: {
            Dashboard: "Dashboard",
            Profile: "Profile",
            "Log Out": "Log Out",
            "Your email address is unverified.":
                "Your email address is unverified.",
            "Click here to re-send the verification email.":
                "Click here to re-send the verification email.",
            "A new verification link has been sent to your email address.":
                "A new verification link has been sent to your email address.",
        },
    },
    ar: {
        translation: {
            Dashboard: "لوحة القيادة",
            Profile: "الملف الشخصي",
            "Log Out": "تسجيل خروج",
            "Your email address is unverified.":
                "لم يتم التحقق من عنوان بريدك الإلكتروني.",
            "Click here to re-send the verification email.":
                "انقر هنا لإعادة إرسال بريد التحقق.",
            "A new verification link has been sent to your email address.":
                "تم إرسال رابط تحقق جديد إلى عنوان بريدك الإلكتروني.",
        },
    },
};

i18n.addResources("en", "translation", resources.en.translation);
i18n.addResources("ar", "translation", resources.ar.translation);

export default function Authenticated({ user, header, children }) {
    const { t } = useTranslation();
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [direction, setDirection] = useState("ltr");

    useEffect(() => {
        const newDirection = i18n.language === "ar" ? "rtl" : "ltr";
        setDirection(newDirection);
        document.documentElement.dir = newDirection;
    }, [i18n.language]);

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div
            className={`flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 ${
                direction === "rtl" ? "rtl" : "ltr"
            }`}
        >
            <nav className="fixed top-0 left-0 z-10 w-full bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <div className="mx-auto max-w-7xl">
                    <div className="flex justify-between h-16 px-6">
                        <div className="flex gap-2">
                            <div className="flex items-center shrink-0">
                                <Link href="dashboard">
                                    <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9 dark:text-gray-200" />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    {t("Dashboard")}
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <ThemeToggleButton />

                            <div className="relative p-5 ml-3">
                                <SelectInput
                                    onChange={changeLanguage}
                                    value={i18n.language}
                                    className="border border-transparent rounded-md dark:text-gray-400 dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                                >
                                    <option value="en">
                                        English
                                    </option>
                                    <option value="ar">
                                        العربية
                                    </option>
                                </SelectInput>
                            </div>

                            <div className="relative ml-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-400 dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                   <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                                        clipRule="evenodd"
                                                        />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            {t("Profile")}
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            {t("Log Out")}
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="flex items-center -mr-2 sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        !showingNavigationDropdown
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            {t("Dashboard")}
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                {t("Profile")}
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                {t("Log Out")}
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                            <div className="px-4">
                                <div className="grid justify-between grid-cols-3">
                                    <ThemeToggleButton />

                                    <SelectInput
                                        onChange={changeLanguage}
                                        value={i18n.language}
                                        className="col-span-2 border border-transparent rounded-md dark:text-gray-400 dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                                    >
                                        <option value="en">
                                            English
                                        </option>
                                        <option value="ar">
                                            العربية
                                        </option>
                                    </SelectInput>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex flex-1 pt-16">
                <MySidebar user={user} direction={direction} />
                <div className="flex flex-col flex-1 min-h-screen">
                    {header && (
                        <header className="mb-6 bg-white dark:bg-gray-800">
                            <div className="px-4 py-6 mx-auto sm:px-6 lg:px-14">
                                {header}
                            </div>
                        </header>
                    )}
                    <main className="flex flex-col flex-1">{children}</main>
                </div>
            </div>
        </div>
    );
}
