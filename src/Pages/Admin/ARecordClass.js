import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { MdCreate } from "react-icons/md";
import LodingAnimation from "../../Components/LodingAnimation";
import ARCLassTable from "../../Components/ARCLassTable";
import HeadTitle from "../../hooks/HeadTitle";

function ARecordClass() {
  const [addRecordClass, setAddRecordClass] = useState(false);
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

  if (isLoading) {
    return <LodingAnimation />;
  }

  // Add New Record Classs
  const onSubmit = async (data) => {
    const cousre = data.course.split(",");
    const cousreId = cousre[1];
    const courseName = cousre[0];
    const classdate = data.classdate;
    const classlink = data.classlink;
    const classsize = data.classsize;
    const classduration = data.classduration;
    // {data.classdate, data.classlink, data.classsize, data.classduration}
    await axios
      .put(`recordedclasss/${cousreId}`, {
        cousreId,
        courseName,
        classdate,
        classlink,
        classsize,
        classduration,
      })
      .then((res) => {
        reset();
        refetch();
      })
      .catch((error) => console.log(error));
  };

  const classDeleteHandle = (classes) => {
    console.log(classes);
  };

  return (
    <div className="p-10">
      <HeadTitle title={"Admin - Recorded Class Manage"} />
      <div className="space-y-5">
        {!addRecordClass && (
          <button
            className="btn btn-primary flec items-center gap-2"
            onClick={() => setAddRecordClass(!addRecordClass)}
          >
            <MdCreate size={20} /> Add A New Recorded Class
          </button>
        )}
        {addRecordClass && (
          <div className="bg-white rounded-3xl p-8 custom-border max-w-md  custom-shadow">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-center">
                Add New Class Downlaod Link
              </h1>
              <button
                onClick={() => setAddRecordClass(!addRecordClass)}
                className="btn btn-square btn-ghost"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 flex flex-col"
            >
              <div className="flex flex-col w-full">
                <label>Select Course</label>
                <select
                  {...register("course", { required: true })}
                  className="select select-bordered w-full max-w-md"
                >
                  {allCourse &&
                    allCourse.map((course) => (
                      <option
                        value={[course.c_Title, course._id]}
                        key={course._id}
                      >
                        {course.c_Title}
                      </option>
                    ))}
                </select>
                {errors.course?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Plz Select a Course
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Class Date</label>
                <input
                  {...register("classdate", { required: true })}
                  type="date"
                  placeholder="Enter Video Duration"
                  className="input input-bordered w-full max-w-md"
                />
                {errors.classdate?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Plz select Class Date
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Dowwnlaod Link</label>
                <input
                  {...register("classlink", { required: true })}
                  type="text"
                  placeholder="Enter Video Downlaod Link"
                  className="input input-bordered w-full max-md"
                />
                {errors.classlink?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Plz Type Video Downlaod Link
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Video File Size = Example : 2GB 100MB</label>
                <input
                  {...register("classsize", { required: true })}
                  type="text"
                  placeholder="Enter Video File Size"
                  className="input input-bordered w-full max-w-md"
                />
                {errors.classsize?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Type Your Video File Size
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label>Video Duration = Example : 2Hour 30Min</label>
                <input
                  {...register("classduration", { required: true })}
                  type="text"
                  placeholder="Enter Video Duration"
                  className="input input-bordered w-full max-w-md"
                />
                {errors.classduration?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Type Your Video Duration
                  </p>
                )}
              </div>
              <input
                type="submit"
                value="SUBMIT"
                className="btn mt-6 btn-primary"
              />
            </form>
          </div>
        )}
        <div className="bg-white rounded-3xl p-8 custom-border custom-shadow">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Course</th>
                  <th>Downlaod Link</th>
                  <th>Video Duration</th>
                  <th>File Size</th>
                  <th>Class Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allCourse &&
                  allCourse.map((rclass) =>
                    rclass.recordClass.map((recordClass, index) => (
                      <ARCLassTable
                        key={index}
                        rclass={recordClass}
                        rcdelete={classDeleteHandle}
                      />
                    ))
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ARecordClass;
