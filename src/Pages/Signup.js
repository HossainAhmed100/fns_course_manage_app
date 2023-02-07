import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  AiOutlineGoogle,
  AiFillEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
function Signup() {
  const [viewPass, setViewPass] = useState(true);
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const displayName = data.username;
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Signup", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 mt-20 bg-white mx-auto rounded-2xl  border">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="Type Your User Name"
                  className="w-full input input-primary input-bordered"
                  {...register("username", { required: true })}
                  aria-invalid={errors.username ? "true" : "false"}
                />
                {errors.username?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Username is required
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="mail@gmail.com"
                  className="w-full input input-primary input-bordered"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    Email is required
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={viewPass ? "password" : "text"}
                    placeholder="Enter your password"
                    className="input input-primary input-bordered w-full"
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
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <Link
                    to="/faq"
                    className="text-primary hover:underline dark:text-primary"
                  >
                    terms and conditions
                  </Link>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full btn-circle text-white"
                >
                  Signup
                </button>
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider text-gray-400">OR</div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full btn-circle text-white"
            >
              <AiOutlineGoogle size={25} className="mr-2" />
              Login in with Google
            </button>
            <div className="flex justify-start items-center w-full mt-3">
              <div className="text-sm">
                <span className="text-gray-500">
                  Alredy have an account?{" "}
                  <Link to="/login" className="link-primary link">
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
