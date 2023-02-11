import React from "react";
import { useForm } from "react-hook-form";

function ARecordClass() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="p-10">
      <div className="space-y-5">
        <div className="bg-white rounded-3xl p-8 custom-border max-w-md  custom-shadow">
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
                <option value={"Complete Web Development with React.js"}>
                  Complete Web Development with React.js
                </option>
                <option value={"Digital Marketing With Freelancer Nasim"}>
                  Digital Marketing With Freelancer Nasim
                </option>
              </select>
              {errors.course?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Plz Select a Course
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label>Dowwnlaod Link</label>
              <input
                {...register("trnxid", { required: true })}
                type="text"
                placeholder="Enter Video Downlaod Link"
                className="input input-bordered w-full max-md"
              />
              {errors.trnxid?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Plz Type Video Downlaod Link
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label>Video File Size</label>
              <input
                {...register("amount", { required: true })}
                type="number"
                placeholder="Enter Video File Size"
                className="input input-bordered w-full max-w-md"
              />
              {errors.trnxid?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Type Your Video File Size
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label>Video Duration</label>
              <input
                {...register("amount", { required: true })}
                type="text"
                placeholder="Enter Video Duration"
                className="input input-bordered w-full max-w-md"
              />
              {errors.trnxid?.type === "required" && (
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Complete Web Development with React.js</td>
                  <td>
                    <button className="bg-primary btn rounded-md btn-sm">
                      Click Now
                    </button>
                  </td>
                  <td>1 Hour 12min</td>
                  <td>645MB</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ARecordClass;
