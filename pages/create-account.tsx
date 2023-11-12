import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Input from "../components/input";
import useMutation from "../lib/useMutation";
import { useRouter } from "next/router";
import { FormValue } from "./../components/input";
import Button from "../components/button";

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const router = useRouter();

  const onSignUp = async (validForm: FormValue) => {};

  return (
    <div className="pt-16">
      <div className="bg-white w-full flex flex-col space-y-1 items-center justify-center relative">
        <h2 className="font-extrabold text-5xl mt-16 text-green-500">
          Create an account
        </h2>

        <form
          onSubmit={handleSubmit(onSignUp)}
          className="w-[90%] flex flex-col space-y-2"
          method="POST"
        >
          <Input
            type="text"
            register={register}
            kind="name"
            name="name"
            label="Name"
            errors={errors}
            required
          />
          <Input
            type="email"
            register={register}
            kind="email"
            name="email"
            label="Email"
            errors={errors}
            required
          />
          <Input
            type="password"
            register={register}
            kind="password"
            name="password"
            label="Password"
            errors={errors}
            required
          />
          <Button text="Sign Up" />
        </form>
      </div>
    </div>
  );
}
