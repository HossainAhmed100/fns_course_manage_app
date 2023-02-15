import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { MdCreate } from "react-icons/md";

function ARecordClass() {
  const [addRecordClass, setAddRecordClass] = useState(false);
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
                  <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
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
                  <td>10/Feb/2023</td>
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
