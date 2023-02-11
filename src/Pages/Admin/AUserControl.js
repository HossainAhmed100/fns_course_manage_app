import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { VscCopy } from "react-icons/vsc";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import profileimg from "../../Utility/img/profile.png";

function AUserControl() {
  const [classMissewd, setClassNissed] = useState(false);
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
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Account info</th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled selected>
                        Role
                      </option>
                      <option value={"user"}>User</option>
                      <option value={"admin"}>Admin</option>
                    </select>
                  </th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled selected>
                        Course
                      </option>
                      <option value={"Course 1"}>Web Design</option>
                      <option value={"Course 2"}>Digital Markting</option>
                    </select>
                  </th>
                  <th>
                    <div
                      onClick={() => setClassNissed(!classMissewd)}
                      className="text-sm flex items-center opacity-50"
                    >
                      <button className="btn text-gray-800 btn-ghost flex gap-2 items-center btn-sm">
                        Join Class
                        {classMissewd ? (
                          <TiArrowSortedUp />
                        ) : (
                          <TiArrowSortedDown />
                        )}
                      </button>
                    </div>
                  </th>
                  <th>Average Marks</th>
                  <th>UnPaid Amount</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={profileimg} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hossain Ahmed</div>
                        <div className="text-sm flex items-center opacity-50">
                          ID :
                          <button
                            className="btn btn-ghost flex gap-2 items-center btn-sm tooltip tooltip-right"
                            data-tip="Click to Copy"
                          >
                            B4S6F5B
                            <VscCopy />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-sm">USER</button>
                  </td>
                  <td>
                    Web Development Course
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      and 1more
                    </span>
                  </td>
                  <td>18 Class</td>
                  <td>60 %</td>
                  <td>Tk 5,000</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-warning btn-xs">
                        Warning
                      </button>
                      <button className="btn btn-error btn-xs">Suspend</button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>User</th>
                  <th>Role</th>
                  <th>Course</th>
                  <th>Join Class</th>
                  <th>Average Marks</th>
                  <th>UnPaid Amount</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AUserControl;
