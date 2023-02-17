import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import LodingAnimation from "./LodingAnimation";
import { IoCard } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { TbCertificate, TbCloudUpload } from "react-icons/tb";
import { RiStackFill, RiTimeFill } from "react-icons/ri";
import courseThumbnail from "../Utility/img/course.jpg";
import { useForm } from "react-hook-form";

function CoursePurchase() {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const { data: course = [], isLoading } = useQuery({
    queryKey: ["allCourse", id],
    queryFn: async () => {
      const data = await axios.get(`allCourse/${id}`);
      return data.data;
    },
  });

  if (isLoading) {
    return <LodingAnimation />;
  }
  const { c_Title, c_Duration, c_StdentQuantity } = course;
  return (
    <div className="p-20">
      <div className="grid lg:grid-cols-3">
        <div className="card w-96 bg-base-100 custom-shadow custom-border">
          <figure>
            <img src={courseThumbnail} alt="courseThumbnail" />
          </figure>
          <div className="card-body flex flex-col items-start justify-between">
            <div className="space-y-3">
              <h2 className="card-title">{c_Title && c_Title} with React.js</h2>
              <span className="text-xl flex gap-2 items-center font-normal">
                <GiTeacher /> Mentor : Freelancer Nasim
              </span>
              <span className="text-xl flex gap-2 items-center font-normal">
                <HiCodeBracketSquare /> Assignments
              </span>
              <span className="text-xl flex gap-2 font-normal">
                <RiTimeFill /> Duration {c_Duration && c_Duration}
              </span>
              <span className="text-xl flex gap-2 items-center font-normal">
                <RiStackFill /> Beginner to Pro
              </span>
              <span className="text-xl flex gap-2 items-center font-normal">
                <FaUsers /> Student {c_StdentQuantity && c_StdentQuantity}
              </span>
              <span className="text-xl flex gap-2 items-center font-normal">
                <TbCertificate /> Professional Certificate
              </span>
            </div>
            <div className="card-actions w-full">
              <Link
                to={"/user/usercourse/coursepurchase"}
                className="btn btn-active btn-ghost w-full text-xl"
              >
                Course Fee : 6,000Tk
              </Link>
              <Link
                to={"/user/usercourse/coursepurchase"}
                className="btn btn-primary w-full flex items-center gap-2 justify-center"
              >
                <IoCard size={20} /> Bay Now
              </Link>
            </div>
          </div>
        </div>
        <div className="cols-span-2">
          <div className="bg-white rounded-3xl p-8 custom-border max-w-md  custom-shadow">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 flex flex-col"
            >
              <div className="flex flex-col w-full">
                <label>Course</label>
                <input
                  type="text"
                  disabled
                  defaultValue={course.c_Title}
                  className="input input-bordered w-full max-md"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>TRNX ID</label>
                <input
                  {...register("trnxid", { required: true })}
                  type="text"
                  placeholder="Type Your Transction id"
                  className="input input-bordered w-full max-md"
                />
                {errors.trnxid?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Plz Type Your Transction ID
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Amount</label>
                <input
                  {...register("amount", { required: true })}
                  type="number"
                  placeholder="Type Your Transction id"
                  className="input input-bordered w-full max-w-md"
                />
                {errors.trnxid?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Type Your Pay Amount
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Payment Method</label>
                <select
                  {...register("paymentmethod", { required: true })}
                  className="select select-bordered w-full max-w-md"
                >
                  <option disabled defaultValue>
                    Select Payment Method
                  </option>
                  <option value={"Bikash"}>Bkiash</option>
                  <option value={"Nagat"}>Nagat</option>
                </select>
                {errors.paymentmethod?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Plz Select a Payment method
                  </p>
                )}
              </div>
              <div>
                <label>Upload A Payment Screenshot</label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <TbCloudUpload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      {...register("coursethumbnail", { required: true })}
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
                {errors.coursethumbnail?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Course Thumbnail is Required
                  </p>
                )}
              </div>
              <input
                type="submit"
                value="Confirm To Bay"
                className="btn mt-6 btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePurchase;
