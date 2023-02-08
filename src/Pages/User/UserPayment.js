import React from "react";
import { useForm } from "react-hook-form";

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
      <div className="space-y-5">
        <div className="bg-white rounded-3xl p-8 custom-border  custom-shadow">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-x-3 flex flex-row items-center"
          >
            <div>
              <label>TRNX ID</label>
              <input
                {...register("trnxid", { required: true })}
                type="text"
                placeholder="Type Your Transction id"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.trnxid?.type === "required" && (
                <p role="alert">Plz Type Your Transction ID</p>
              )}
            </div>
            <div>
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
                <p role="alert">Plz Select a Course</p>
              )}
            </div>
            <div>
              <label>Payment Method</label>
              <select
                {...register("paymentmethod", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option value={"Bikash"}>Bkiash</option>
                <option value={"Nagat"}>Nagat</option>
              </select>
              {errors.paymentmethod?.type === "required" && (
                <p role="alert">Plz Select a Payment method</p>
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
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Complete Web Development with React.js</td>
                  <td>B4S6F5B1231DFB65RE44</td>
                  <td>Bkiash</td>
                  <td>
                    <button className="bg-warning rounded-md btn-sm">
                      Pending
                    </button>
                  </td>
                </tr>
                <tr className="hover">
                  <th>2</th>
                  <td>Digital Marketing With Freelancer Nasim</td>
                  <td>B4S6F5B1231DFB65RE44</td>
                  <td>Nagat</td>
                  <td>
                    <button className="bg-error rounded-md btn-sm">
                      Wrong info
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Complete Web Development with React.js</td>
                  <td>B4S6F5B1231DFB65RE44</td>
                  <td>Bkiash</td>
                  <td>
                    <button className="bg-success rounded-md btn-sm">
                      Aprove
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
