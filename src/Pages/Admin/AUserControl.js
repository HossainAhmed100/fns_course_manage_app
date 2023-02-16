import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../../axios";
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { MdCreate } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import AdminUserTable from "../../Components/AdminUserTable";
import LodingAnimation from "../../Components/LodingAnimation";

function AUserControl() {
  const [classMissewd, setClassNissed] = useState(false);
  const [makeAdmin, setMakeAdmin] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    data: allUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const data = await axios.get("alluser");
      return data.data;
    },
  });
  if (isLoading) {
    return <LodingAnimation />;
  }

  const handleUserRole = async (user) => {
    const status = user.accountstatus;
    let accountstatus = status ? false : true;
    await axios
      .put(`handleaccountstatus/${user._id}`, { accountstatus })
      .then((res) => {
        if (res.data.acknowledged) {
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-10">
      <div className="space-y-5">
        {!makeAdmin && (
          <button
            className="btn btn-primary flec items-center gap-2"
            onClick={() => setMakeAdmin(!makeAdmin)}
          >
            <MdCreate size={20} /> Maka A Admin
          </button>
        )}
        {makeAdmin && (
          <div className="bg-white rounded-3xl p-8 custom-border max-w-md  custom-shadow">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-center">Make Admin</h1>
              <button
                onClick={() => setMakeAdmin(!makeAdmin)}
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
                <label>User ID</label>
                <input
                  {...register("makeadmin", { required: true })}
                  type="text"
                  placeholder="Enter User ID"
                  className="input input-bordered w-full max-w-md"
                />
                {errors.makeadmin?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Type User id
                  </p>
                )}
              </div>
              <input
                type="submit"
                value="Make Admin"
                className="btn mt-6 btn-primary"
              />
            </form>
          </div>
        )}
        <div className="bg-white rounded-3xl p-8 custom-border custom-shadow">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Account info</th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled defaultValue>
                        Role
                      </option>
                      <option value={"user"}>User</option>
                      <option value={"admin"}>Admin</option>
                    </select>
                  </th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled defaultValue>
                        Course
                      </option>
                      <option value={"Course 1"}>Web Design</option>
                      <option value={"Course 2"}>Digital Markting</option>
                    </select>
                  </th>
                  <th>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option disabled defaultValue>
                        Account Status
                      </option>
                      <option value={"user"}>Active</option>
                      <option value={"admin"}>Suspend</option>
                    </select>
                  </th>
                  <th>
                    <button
                      onClick={() => setClassNissed(!classMissewd)}
                      className="btn btn-ghost flex gap-2 items-center btn-sm"
                    >
                      Join Class
                      {classMissewd ? (
                        <TiArrowSortedUp />
                      ) : (
                        <TiArrowSortedDown />
                      )}
                    </button>
                  </th>
                  <th>Average Marks</th>
                  <th>UnPaid Amount</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allUser.map((user) => (
                  <AdminUserTable
                    key={user._id}
                    user={user}
                    handleUserRole={handleUserRole}
                  />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>User</th>
                  <th>Role</th>
                  <th>Course</th>
                  <th>Join Class</th>
                  <th>Account Status</th>
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
