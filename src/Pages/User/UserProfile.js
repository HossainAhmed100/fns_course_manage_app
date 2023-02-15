import React, { useContext, useState } from "react";
import prf from "../../Utility/img/profile.png";
import { FiEdit3 } from "react-icons/fi";
import { VscCopy } from "react-icons/vsc";
import { IoMdCloudUpload } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function UserProfile() {
  const navigate = useNavigate();
  const [userAge, setUserAge] = useState("");
  const { updateUserinfo, user, userSignOut } = useContext(AuthContext);
  const [editForm, setEditForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //New User Registration
  const onSubmit = (data) => {
    console.log("Age : ", userAge);
    console.log(data);
    const name = data.name;
    const phone = data.phone;
    const age = data.age;
    const address = data.address;
    updateUserinfo(name, phone, age, address);
    const birthTime = new Date(age).getTime();
    const now = Date.now();
    const ageInMillis = now - birthTime;
    const ageInYears = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));
    setUserAge(ageInYears);
  };

  //User Logout
  const userLogOutHandle = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Log Out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const success = userSignOut();
        if (success) {
          toast.success("Log Out Successfully");
          navigate("/login");
        }
      }
    });
  };

  return (
    <div className="p-10 grid lg:grid-cols-3 gap-5">
      <div className="max-w-md">
        <div className="bg-white p-8 rounded-3xl custom-shadow custom-border">
          <div className="leading-10 divide-y text-start text-xl">
            <img
              className="custom-shadow custom-border rounded-3xl w-32 mb-4"
              src={prf}
              alt=""
            />
            <h1>
              Role : <span className="text-xl font-semibold">{"User"}</span>
            </h1>
            <h1 className="flex gap-2 items-center">
              ID : <span className="text-xl font-semibold">{"1613212"}</span>
              <VscCopy />
            </h1>
            <h1>
              Age : <span className="text-xl font-semibold">{"19year"}</span>
            </h1>
            <h1>
              Phone :{" "}
              <span className="text-xl font-semibold">
                {user?.phoneNumber && user?.phoneNumber}
              </span>
            </h1>
            <h1>
              Name :{" "}
              <span className="text-xl font-semibold">
                {user?.displayName && user?.displayName}
              </span>
            </h1>
            <h1>
              Email :{" "}
              <span className="text-xl font-semibold">
                {user?.email && user?.email}
              </span>
            </h1>
            <h1>
              Address :{" "}
              <span className="text-xl font-semibold">
                {"Dhaka, bangladesh"}
              </span>
            </h1>
            <h1 className="flex flex-row items-center gap-4 justify-between">
              <button
                onClick={() => userLogOutHandle()}
                className="btn btn-error mt-4 w-44"
              >
                <IoLogOut size={18} className="mr-2 rotate-180" />
                Log out
              </button>
              <button
                onClick={() => setEditForm(!editForm)}
                className="btn btn-primary mt-4 w-44"
              >
                <FiEdit3 size={18} className="mr-2" />
                Edit
              </button>
            </h1>
          </div>
        </div>
      </div>
      {editForm && (
        <div className=" col-span-2">
          <div className="bg-white p-8 max-w-lg rounded-3xl custom-shadow custom-border">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="leading-10 divide-y text-start text-xl">
                <img
                  className="custom-shadow custom-border rounded-3xl w-32 mb-4"
                  src={prf}
                  alt=""
                />
                <h1 className="p-2 flex item-center justify-between">
                  <label htmlFor=""> Age :</label>
                  <input
                    {...register("age")}
                    type="date"
                    className="input ml-3 input-bordered w-full max-w-xs"
                    defaultValue={"Hossain"}
                  />
                </h1>
                <h1 className="p-2 flex item-center justify-between">
                  <label htmlFor=""> Phone :</label>
                  <input
                    {...register("phone")}
                    type="number"
                    className="input ml-3 input-bordered w-full max-w-xs"
                    defaultValue={"Hossain"}
                  />
                </h1>
                <h1 className="p-2 flex item-center justify-between">
                  <label htmlFor=""> Name :</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="input ml-3 input-bordered w-full max-w-xs"
                    defaultValue={"Hossain"}
                  />
                </h1>
                <h1 className="p-2 flex item-center justify-between">
                  <label htmlFor=""> Address :</label>
                  <input
                    {...register("address")}
                    type="text"
                    className="input ml-3 input-bordered w-full max-w-xs"
                    defaultValue={"Hossain"}
                  />
                </h1>
                <h1 className="flex flex-row items-center justify-between">
                  <button
                    onClick={() => setEditForm(!editForm)}
                    className="btn btn-primary mt-4 w-48"
                  >
                    <FiEdit3 size={18} className="mr-2" />
                    Cencel
                  </button>
                  <button className="btn btn-primary mt-4 w-48">
                    <IoMdCloudUpload size={18} className="mr-2" />
                    Update
                  </button>
                </h1>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
