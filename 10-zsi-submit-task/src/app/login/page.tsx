"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   email: `testuser@gmail.com`,
    //   password: `testuser@gmail.com`,
    // },
  });

  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const onFormSubmit = async (data: any) => {

      // Check if email and password are correct
      if (data.email !== "testuser@gmail.com" || data.password !== "testuser@gmail.com") {
        if (data.email !== "testuser@gmail.com") {
          setError("email", { type: "manual", message: "Invalid email" as string });
        }
        if (data.password !== "testuser@gmail.com") {
          setError("password", { type: "manual", message: "Invalid password" as string });
        }
        setIsDisabled(false);
        return;
      }

    const toastId = toast.loading("Logging in...", { position: "top-center" });
    setIsDisabled(true);
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    //  console.log(res);
    //  const user = decodeToken(res.data.token)
    //  console.log(user)

    if (res.data.token) {
      router.push("/home");
    }

    dispatch(
      setUser({
        user: res?.data?.user,
        token: res?.data?.token,
      })
    );
    toast.success("User logged in successfully", {
      richColors: true,
      id: toastId,
      position: "top-center",
      duration: 1500,
    });
  };

  const setValidUser = () => {
    reset({
      email: "testuser@gmail.com",
      password: "testuser@gmail.com",
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <h2 className="text-3xl font-bold mb-4 text-center text-[#f07432]">  Login  </h2>
        <FormInput
          label="Email"
          type="email"
          name="email"
          register={register}
          required
          placeholder="testuser@gmail.com"
          error={errors.email?.message as string}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          register={register}
          showToggle
          required
          placeholder="testuser@gmail.com"
          error={errors.password?.message as string}
        />
        <button
          type="submit"
          disabled={isDisabled}
          // className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          className={`w-full py-2 rounded ${
            isDisabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#F55F11] text-white hover:bg-green-600 font-bold"
          }`}
        >
          Login 
        </button>
      </Form>
      <button
        type="button"
        onClick={setValidUser}
        className="w-[25%] mt-4 py-2 bg-yellow-200 text-gray-700 rounded hover:bg-gray-300"
      >
        Valid User
      </button>
    </>
  );
};

export default LoginForm;
