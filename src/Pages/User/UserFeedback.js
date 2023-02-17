import React from "react";
import { useForm } from "react-hook-form";
import { FiEdit3 } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import HeadTitle from "../../hooks/HeadTitle";
import axios from "../../axios";
import LodingAnimation from "../../Components/LodingAnimation";
import { useQuery } from "@tanstack/react-query";

function UserFeedback() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const { data: allCourse = [], isLoading } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axios.get("allCourse");
      return res.data;
    },
  });
  if (isLoading) {
    return <LodingAnimation />;
  }

  return (
    <div className="p-10">
      <HeadTitle title={"User Feedback"} />
      <div className="space-y-5">
        <div className="bg-white rounded-3xl p-8 custom-border max-w-md  custom-shadow">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="flex flex-col mt-3">
              <label>Select Course</label>
              <select
                {...register("course", { required: true })}
                className="select select-bordered w-full max-w-md"
              >
                {allCourse &&
                  allCourse.map((course) => (
                    <option value={course._id} key={course._id}>
                      {course.c_Title}
                    </option>
                  ))}
              </select>
              {errors.course?.type === "required" && (
                <p role="alert">Plz Select a Course</p>
              )}
            </div>
            <div className="flex flex-col mt-3">
              <label>Your Feedback</label>
              <textarea
                {...register("feedbackinput", { required: true })}
                className="textarea textarea-bordered"
                placeholder="Write Somthing..."
              ></textarea>
              {errors.feedbackinput?.type === "required" && (
                <p role="alert">Plz write something</p>
              )}
            </div>
            <button
              type="submit"
              className="btn mt-4 flex items-center gap-2 btn-primary"
            >
              <span> Send</span> <FaPaperPlane />
            </button>
          </form>
        </div>
        <div className="divider"></div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="card card-compact w-full bg-white custom-shadow custom-border">
            <div className="card-body">
              <h2 className="card-title">
                e nemo temporibus, numquam beatae, eaque dolor dolorum
                blanditiis perferendis sunt distinctio, nobis molestias sequi
                illum? Quod iure dolor cum veniam labore, necessitatibus quasi
                mollitia saepe cumque, officiis, laboriosam aut! Nisi corrupti
                magnam, obcaecati optio ad harum unde magni laboriosam veritatis
                nobis, quaerat expedita ipsa hic repellendus praesentium
                dolorem, cumque qui similique mollitia. Quod neque nam eaque
                quae nobis ab odio.
              </h2>
              <div className="divider"></div>
              <div className="card-actions justify-end">
                <p className="text-xl">
                  Date :{" "}
                  <span className="text-base font-semibold">10/02/2023</span>
                </p>
                <button className="btn btn-primary">
                  <FiEdit3 className="mr-1" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFeedback;
