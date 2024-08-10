import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18nConfig";


const resources = {
    en: {
        translation: {
            "Profile Information": "Profile Information",
            "Profile Information Description":
                "Update your account's profile information and email address.",
            Name: "Name",
            Email: "Email",
            "Your email address is unverified.":
                "Your email address is unverified.",
            "Click here to re-send the verification email.":
                "Click here to re-send the verification email.",
            "A new verification link has been sent to your email address.":
                "A new verification link has been sent to your email address.",
            Save: "Save",
            Saved: "Saved.",
        },
    },
    ar: {
        translation: {
            "Profile Information": "معلومات الملف الشخصي",
            "Profile Information Description":
                "قم بتحديث معلومات ملفك الشخصي وعنوان بريدك الإلكتروني.",
            Name: "الاسم",
            Email: "البريد الإلكتروني",
            "Your email address is unverified.":
                "لم يتم التحقق من عنوان بريدك الإلكتروني.",
            "Click here to re-send the verification email.":
                "انقر هنا لإعادة إرسال بريد التحقق.",
            "A new verification link has been sent to your email address.":
                "تم إرسال رابط تحقق جديد إلى عنوان بريدك الإلكتروني.",
            Save: "حفظ",
            Saved: "تم الحفظ.",
        },
    },
};

i18n.addResources("en", "translation", resources.en.translation);
i18n.addResources("ar", "translation", resources.ar.translation);

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const { t } = useTranslation(); 
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {t("Profile Information")}
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {t("Profile Information Description")}
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value={t("Name")} />

                    <TextInput
                        id="name"
                        className="block w-full mt-1"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value={t("Email")} />

                    <TextInput
                        id="email"
                        type="email"
                        className="block w-full mt-1"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                            {t("Your email address is unverified.")}{" "}
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                {t(
                                    "Click here to re-send the verification email."
                                )}
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                {t(
                                    "A new verification link has been sent to your email address."
                                )}
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        {t("Save")}
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {t("Saved")}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
