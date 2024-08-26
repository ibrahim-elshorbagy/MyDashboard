import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, user,roles }) {
  const { data, setData, post, errors, reset } = useForm({
    name: user.name || "",
    email: user.email || "",
    role:user.roles[0]||"",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("user.update", user.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Edit user "{user.name}"
          </h2>
        </div>
      }
    >
        <Head title="Users" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg"
            >
              <div className="mt-4">
                <InputLabel htmlFor="user_name" value="User Name" />

                <TextInput
                  id="user_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="block w-full mt-1"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="user_email" value="User Email" />

                <TextInput
                  id="user_email"
                  type="text"
                  name="email"
                  value={data.email}
                  className="block w-full mt-1"
                  onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="user_password" value="Password" />

                <TextInput
                  id="user_password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="block w-full mt-1"
                  onChange={(e) => setData("password", e.target.value)}
                />

                <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="role"
                        value="Role"
                    />

                    <SelectInput
                        name="status"
                        id="role"
                        className="block w-full mt-1"
                        value={data.role}
                        onChange={(e) =>
                            setData("role", e.target.value)
                        }
                    >
                        <option value="">Select Role</option>
                            {roles.map((role) => (
                                        <option
                                            value={role.id}
                                            key={role.id}
                                        >
                                            {role.name}
                                        </option>
                            ))}
                    </SelectInput>

                    <InputError
                        message={errors.role}
                        className="mt-2"
                    />
                </div>


              <div className="mt-4 text-right">
                <Link
                  href={route("user.index")}
                  className="px-3 py-1 mr-2 text-gray-800 transition-all bg-gray-100 rounded shadow hover:bg-gray-200"
                >
                  Cancel
                </Link>
                <button className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
