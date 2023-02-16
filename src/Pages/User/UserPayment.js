import React from "react";
import { useForm } from "react-hook-form";
import HeadTitle from "../../hooks/HeadTitle";

function UserPayment() {
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
      <HeadTitle title={"User Payment"} />
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
