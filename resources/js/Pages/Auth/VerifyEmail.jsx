import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout centerContent box_width="max-w-xl">
            <Head title="Email Verification" />
            <div className="max-w-lg mx-auto">
                <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Thanks for signing up! Before getting started, could you
                    verify your email address by clicking on the link we just
                    emailed to you? If you didn't receive the email, we will
                    gladly send you another.
                </div>

                {status === "verification-link-sent" && (
                    <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="flex items-center justify-between mt-4">
                        <PrimaryButton disabled={processing}>
                            Resend Verification Email
                        </PrimaryButton>

                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
