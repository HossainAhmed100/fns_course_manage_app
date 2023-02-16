import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TbCloudUpload } from "react-icons/tb";
import { MdCreate } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import axios from "../../axios";
import { useQuery } from "@tanstack/react-query";
import LodingAnimation from "../../Components/LodingAnimation";
import AdminCourseCard from "../../Components/AdminCourseCard";

function Coursemanage() {
  const [createCourse, setCreateCourse] = useState(false);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Fetch Existing Course From Server
  const {
    data: allCourse = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axios.get("allCourse");
      return res.data;
    },
  });

  // Create A New Course
  const onSubmit = async (data) => {
    await axios
      .post("addnewcourse", { data })
      .then((res) => {
        if (res.data.acknowledged) {
          refetch();
          reset();
        }
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <LodingAnimation />;
  }

  return (
    <div className="p-10">
      <div className="space-y-5">
        {!createCourse && (
          <button
            className="btn btn-primary flec items-center gap-2"
            onClick={() => setCreateCourse(!createCourse)}
          >
            <MdCreate size={20} /> Create a New Course
          </button>
        )}
        {createCourse && (
          <div className="bg-white rounded-3xl p-8 max-w-2xl custom-border custom-shadow">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-center">
                Create A New Course
              </h1>
              <button
                onClick={() => setCreateCourse(!createCourse)}
                className="btn btn-square btn-ghost"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>
            <form
              encType="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 flex flex-col"
            >
              {" "}
              <div className="flex flex-col">
                <label>Course Title *</label>
                <input
                  {...register("c_Title", { required: true })}
                  type="text"
                  placeholder="Enter Course Title"
                  className="input input-bordered w-full"
                />
                {errors.ctitle?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Course Title Requires
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label>Course Duration * Example : 6Month-7Month</label>
                <input
                  {...register("c_Duration", { required: true })}
                  type="text"
                  placeholder="Enter Course Duration"
                  className="input input-bordered w-full"
                />
                {errors.cduration?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Course Duration Requires
                  </p>
                )}
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>Course Class Start Date *</label>
                  <input
                    {...register("c_StartDate", { required: true })}
                    type="date"
                    placeholder="Enter Video Duration"
                    className="input input-bordered w-full max-w-md"
                  />
                  {errors.cstartdate?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Class Start Date Requires
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Course Enrollmetn End Date *</label>
                  <input
                    {...register("c_EnrollEndDate", { required: true })}
                    type="date"
                    className="input input-bordered w-full max-w-md"
                  />
                  {errors.courseenrollenddate?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Enrollmetn End Date Requires
                    </p>
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>Course Student Quantity *</label>
                  <input
                    {...register("c_StdentQuantity", { required: true })}
                    type="number"
                    className="input input-bordered w-full max-w-md"
                  />
                  {errors.cstdentquantity?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Course Student Quantity
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Course Batch Non * Example : Batch 6</label>
                  <input
                    {...register("c_BatchNum", { required: true })}
                    type="text"
                    className="input input-bordered w-full max-w-md"
                  />
                  {errors.coursebatchnum?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Course Batch Num Requires
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label>Course Description *</label>
                <textarea
                  {...register("c_Description", { required: true })}
                  className="textarea textarea-bordered"
                  placeholder="Write Somthing"
                ></textarea>
                {errors.courseDescription?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Course Description is Required
                  </p>
                )}
              </div>
              {/* <div>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <TbCloudUpload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
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
              </div> */}
              <input
                type="submit"
                value="SUBMIT"
                className="btn mt-6 btn-primary"
              />
            </form>
          </div>
        )}
        <div className="bg-white rounded-3xl p-8 custom-border custom-shadow">
          <div className="mx-auto">
            <h1 className="text-xl text-center m-6 lg:text-5xl font-semibold">
              All Course
            </h1>
            <div className="divider"></div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-1 gap-10">
              {allCourse &&
                allCourse.map((course) => (
                  <AdminCourseCard key={course._id} course={course} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursemanage;
