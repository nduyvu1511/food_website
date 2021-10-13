import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function AuthenForm({ handleSubmitForm, type, schema }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    handleSubmitForm && handleSubmitForm(data);
  };

  return (
    <div className="flex justify-center rounded-md">
      <div
        className={`bg-formBg ${
          type === "loginNav" ? "w-96 p-4" : "w-500 p-10"
        } ${type !== "loginNav" && "mt-20"}`}
      >
        <div className="flex items-baseline mt-4 mb-6 justify-between">
          <p className="text-xl text-left font-bold">
            {type === "signup" ? "Sign up" : "Login"}
          </p>
          {type !== "signup" && (
            <Link
              to="/sign-up"
              className="text-sm font-medium text-center text-primaryColor"
            >
              Create Account
            </Link>
          )}
        </div>

        <form onSubmit={handleSubmit(submitForm)}>
          {type === "signup" && (
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className="text-sm mb-2 inline-block" htmlFor="fName">
                  First name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  id="fName"
                  className={`w-full border rounded-md px-3 py-3 outline-none ${
                    errors.firstName?.message
                      ? "border-red-400"
                      : "border-black10"
                  }`}
                />
                <p className="text-xs text-red-400 font-medium mt-2">
                  {errors.firstName?.message}
                </p>
              </div>

              <div className="w-full md:w-1/2 md:ml-4">
                <label className="text-sm mb-2 inline-block" htmlFor="lName">
                  Last name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  id="lName"
                  className={`w-full border rounded-md px-3 py-3 outline-none 
                ${
                  errors.lastName?.message
                    ? "border-red-400"
                    : "border-black-10"
                }`}
                />
                <p className="text-xs text-red-400 font-medium mt-2">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 text-left">
            <label className="text-sm mb-2 inline-block" htmlFor="emailInput">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("email")}
              id="emailInput"
              className={`w-full border rounded-md px-3 py-3 outline-none 
              ${errors.email?.message ? "border-red-400" : "border-black-10"}`}
            />
            <p className="text-xs text-red-400 font-medium mt-2">
              {errors.email?.message}
            </p>
          </div>

          <div className="mt-6 text-left">
            <label className="text-sm mb-2 inline-block" htmlFor="pwInput">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("password")}
              id="pwInput"
              className={`w-full border rounded-md px-3 py-3 outline-none 
              ${
                errors.password?.message ? "border-red-400" : "border-black-10"
              }`}
            />
            <p className="text-xs text-red-400 font-medium mt-2">
              {errors.password?.message}
            </p>
          </div>
          {type === "signup" && (
            <div className="mt-6 text-left">
              <label className="text-sm mb-2 inline-block" htmlFor="confirmPw">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                id="confirmPw"
                className={`w-full border rounded-md px-3 py-3 outline-none 
              ${
                errors.confirmPassword?.message
                  ? "border-red-400"
                  : "border-black-10"
              }`}
              />
              <p className="text-xs text-red-400 font-medium mt-2">
                {errors.confirmPassword && "Password should match!"}
              </p>
            </div>
          )}
          <div className="mt-6 text-left">
            <button
              type="submit"
              className="btn-primary uppercase py-4 w-full font-bold"
            >
              {type === "signup" ? "Sign up" : "log in"}
            </button>
          </div>
          {type !== "loginNav" && (
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
              <p className="flex items-center mb-2 sm:mb-0">
                <input type="checkbox" name="" id="checkInput" />
                <label
                  className="ml-2 text-sm text-gray-500"
                  htmlFor="checkInput"
                >
                  Remember me
                </label>
              </p>
              <p className="text-sm text-gray-500 underline">
                Lost your password?
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
