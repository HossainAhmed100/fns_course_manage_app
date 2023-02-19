import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HeadTitle from "../../hooks/HeadTitle";
import axios from "../../axios";
import { IoClose } from "react-icons/io5";
import LodingAnimation from "../../Components/LodingAnimation";
import { useQuery } from "@tanstack/react-query";
import { MdCreate } from "react-icons/md";

function UserPayment() {
  const [isOPEN, setisOPEN] = useState(false);
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
      <HeadTitle title={"User Payment"} />
      <div className="space-y-5">
        {!isOPEN && (
          <button
            className="btn btn-primary flec items-center gap-2"
            onClick={() => setisOPEN(!isOPEN)}
          >
            <MdCreate size={20} /> Add New Payment Record
          </button>
        )}
        {isOPEN && (
          <div className="bg-white rounded-3xl p-8 custom-border max-w-md  custom-shadow">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-center">
                Add New Payment Record
              </h1>
              <button
                onClick={() => setisOPEN(!isOPEN)}
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
                      <option value={course._id} key={course._id}>
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
                  type="text"
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
                  <option disabled selected>
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
                  <th>TRNX ID</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Complete Web Development with React.js</td>
                  <td>B4S6F5B1231DFB65RE44</td>
                  <td>Tk 1,000</td>
                  <td>Bkiash</td>
                  <td>
                    <button className="bg-warning rounded-md btn-sm">
                      Pending
                    </button>
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

export default UserPayment;
