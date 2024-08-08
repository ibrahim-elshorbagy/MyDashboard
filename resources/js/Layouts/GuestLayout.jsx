import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import ThemeToggleButton from "../Components/ThemeToggleButton";
import NavLink from "@/Components/NavLink";
import { useState } from "react";

export default function Guest({
    children,
    centerContent = false,
    box_width = "max-w-7xl",
}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white border-b border-gray-300 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9 dark:text-gray-200" />
                                </Link>
                            </div>
                        </div>

                        <div className="hidden gap-5 sm:flex sm:items-center sm:ml-6">
                            <NavLink
                                href={route("login")}
                                active={route().current("login")}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                href={route("register")}
                                active={route().current("register")}
                            >
                                Register
                            </NavLink>
                            <ThemeToggleButton />
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
                        <Link
                            href={route("login")}
                            className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                            Login
                        </Link>
                        <Link
                            href={route("register")}
                            className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                        >
                            Register
                        </Link>
                        <ThemeToggleButton />
                    </div>
                </div>
            </nav>

            <div
                className={`flex-1 ${
                    centerContent ? "flex items-center justify-center" : ""
                }`}
            >
                <div
                    className={`w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg ${
                        centerContent ? "max-w-lg" : `${box_width} mx-auto`
                    }`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
