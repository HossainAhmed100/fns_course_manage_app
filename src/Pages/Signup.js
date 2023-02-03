import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  AiOutlineGoogle,
  AiFillEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
function Signup() {
  const [viewPass, setViewPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // data.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 border">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="mail@gmail.com"
                  className="w-full input input-accent input-bordered"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Email is required
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={viewPass ? "password" : "text"}
                    placeholder="Enter your password"
                    className="input input-accent input-bordered w-full"
                    {...register("password", { required: true })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <div className="absolute right-4 top-4">
                    {viewPass ? (
                      <AiOutlineEyeInvisible
                        size={20}
                        onClick={() => setViewPass(!viewPass)}
                      />
                    ) : (
                      <AiFillEye
                        size={20}
                        onClick={() => setViewPass(!viewPass)}
                      />
                    )}
                  </div>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Password is required
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="/" className="link link-accent">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-accent w-full btn-circle text-white"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider text-gray-400">OR</div>
            </div>
            <button
              type="submit"
              className="btn btn-accent w-full btn-circle text-white"
            >
              <AiOutlineGoogle size={25} className="mr-2" />
              Login in with Google
            </button>
            <div className="flex justify-start items-center w-full mt-3">
              <div className="text-sm">
                <span className="text-gray-500">
                  Alredy have an account?{" "}
                  <Link to="/login" className="link-accent link">
                    Login now
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
