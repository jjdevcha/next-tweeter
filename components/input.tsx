import { UseFormRegister, FieldErrors } from "react-hook-form";

interface InputType {
  label: string;
  type: string;
  name: string;
  kind?: "email" | "password" | "text" | "name";
  required: boolean;
  register: UseFormRegister<FormValue>;
  errors?: FieldErrors<FormValue>;
}

export interface FormValue {
  email: string;
  password: string;
  text: string;
  name: string;
}

export default function Input({
  label,
  name,
  kind,
  register,
  type,
  errors,
  required,
}: InputType) {
  return (
    <div className="w-full space-y-2">
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      {kind === "name" ? (
        <>
          <div className="rounded-md relative flex  items-center shadow-sm">
            <input
              id={name}
              {...register("name", {
                required: "Please enter name address",
              })}
              type={type}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <span className="text-red-500 text-xs block">
            {errors?.name?.message}
          </span>
        </>
      ) : null}
      {kind === "email" ? (
        <>
          <div className="rounded-md relative flex  items-center shadow-sm">
            <input
              id={name}
              {...register("email", {
                required: "Please enter email address",
                validate: {
                  email: (value) =>
                    value.includes("@") || "Email format needed",
                },
              })}
              type={type}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <span className="text-red-500 text-xs block">
            {errors?.email?.message}
          </span>
        </>
      ) : null}
      {kind === "password" ? (
        <>
          <div className="rounded-md relative flex  items-center shadow-sm">
            <input
              id={name}
              required={required}
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 8,
                  message: "Need more than 8 characters",
                },
              })}
              type={type}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <span className="text-red-500 text-xs block">
            {errors?.password?.message}
          </span>
        </>
      ) : null}
      {kind === "text" ? (
        <div>
          <textarea
            id={name}
            {...register("text", { required })}
            className="mt-1 shadow-sm w-full focus:ring-green-500 rounded-md border-gray-300 focus:border-green-500 "
            rows={4}
          />
        </div>
      ) : null}
    </div>
  );
}
