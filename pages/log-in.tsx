import Input from "../components/input";
import Button from "../components/button";
import { useForm, FieldErrors } from "react-hook-form";
import Link from "next/link";
import { FormValue } from "../components/input";
import { useRouter } from "next/router";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>({
    mode: "onChange",
  });

  const router = useRouter();

  const onValid = (data: FormValue) => {
    console.log("I'm valid");
    reset();
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const onCreate = () => {
    router.push("/create-account");
  };

  return (
    <div className="flex flex-col space-y-5 items-center justify-center pt-10">
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className=" w-[60%] flex flex-col space-y-2"
        method="POST"
      >
        <Input
          name="email"
          label="Email"
          type="string"
          kind="email"
          register={register}
          errors={errors}
          required
        />

        <Input
          name="password"
          label="Password"
          kind="password"
          type="string"
          register={register}
          errors={errors}
          required
        />
        <Button type="submit" text="Log in" />
      </form>
      <button onClick={onCreate} className="text-green-500 hover:underline">
        Create Account
      </button>
    </div>
  );
}
