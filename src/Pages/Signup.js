import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  AiOutlineGoogle,
  AiFillEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import axios from "../axios";
function Signup() {
  const [viewPass, setViewPass] = useState(true);
  const { createUser, updateUserinfo } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.username;
    const email = data.email;
    const rule = "User";
    const age = 18;
    const accountstatus = true;
    const id = "1613212";
    const phone = 8801850563626;
    const assignment = [
      {
        course: "63e51bd5d4935e47f3bd",
        mark: false,
        document: ["0"],
        status: false,
      },
      {
        course: "63e51bd5d4935e47f3bd",
        mark: 90,
        document: ["gihub.com"],
        status: true,
      },
    ];
    const address = "Dhaka, Bangladesh";
    const password = data.password;
    const course = ["63e51bd5d4935e47f3bd", "63e51bd5d4935e47f3gb"];
    const userClass = [
      { course: "63e51bd5d4935e47f3bd", totalClass: 20, atendClass: 18 },
      { course: "63e51bd5d4935e47f3bd", totalClass: 20, atendClass: 18 },
    ];
    const payment = [
      {
        course: "63e51bd5d4935e47f3bd",
        trnxid: "B4S6F5B1231DFB65RE44",
        paymethod: "Bikash",
        amount: 1000,
        status: "Pending",
      },
      {
        course: "63e51bd5d4935e47f3bd",
        trnxid: "B4S6F5B1231DFB65RE55",
        paymethod: "Rocket",
        amount: 3000,
        status: "Wrong",
      },
      {
        course: "63e51bd5d4935e47f3bd",
        trnxid: "B4S6F5B1231DFB65RE66",
        paymethod: "Bank",
        amount: 2000,
        status: "Approve",
      },
    ];
    const feedback = [
      {
        date: "11/02/2023",
        message:
          "e nemo temporibus, numquam beatae, eaque dolor dolorum blanditiis perferendis sunt distinctio, nobis molestias sequi illum? Quod iure dolor cum veniam labore, necessitatibus quasi mollitia saepe cumque, officiis, laboriosam aut! Nisi corrupti magnam, obcaecati optio ad harum unde magni laboriosam veritatis nobis, quaerat expedita ipsa hic repellendus praesentium dolorem, cumque qui similique mollitia. Quod neque nam eaque quae nobis ab odio.",
      },
      {
        date: "12/02/2023",
        message:
          "e nemo temporibus, numquam beatae, eaque dolor dolorum blanditiis perferendis sunt distinctio, nobis molestias sequi illum? Quod iure dolor cum veniam labore, necessitatibus quasi mollitia saepe cumque, officiis, laboriosam aut! Nisi corrupti magnam, obcaecati optio ad harum unde magni laboriosam veritatis nobis, quaerat expedita ipsa hic repellendus praesentium dolorem, cumque qui similique mollitia. Quod neque nam eaque quae nobis ab odio.",
      },
      {
        date: "13/02/2023",
        message:
          "e nemo temporibus, numquam beatae, eaque dolor dolorum blanditiis perferendis sunt distinctio, nobis molestias sequi illum? Quod iure dolor cum veniam labore, necessitatibus quasi mollitia saepe cumque, officiis, laboriosam aut! Nisi corrupti magnam, obcaecati optio ad harum unde magni laboriosam veritatis nobis, quaerat expedita ipsa hic repellendus praesentium dolorem, cumque qui similique mollitia. Quod neque nam eaque quae nobis ab odio.",
      },
    ];
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          updateUserinfo(email).then(async () => {
            await axios
              .post("alluser", {
                email,
                name,
                rule,
                userClass,
                id,
                accountstatus,
                age,
                phone,
                address,
                course,
                assignment,
                payment,
                feedback,
              })
              .then((res) => {
                console.log(res.data);
              })
              .catch((error) => {
                console.log("Signup", error);
              });
          });
        }
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
