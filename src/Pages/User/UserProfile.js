import React from "react";
import prf from "../../Utility/img/profile.png";
import { FiEdit3 } from "react-icons/fi";
import { VscCopy } from "react-icons/vsc";
function UserProfile() {
  return (
    <div className="p-10">
      <div className="max-w-md">
        <div className="bg-white p-8 rounded-3xl custom-shadow custom-border">
          <div className="leading-10 divide-y text-start text-xl">
            <img
              className="custom-shadow custom-border rounded-3xl w-32 mb-4"
              src={prf}
              alt=""
            />
            <h1>
              Rule : <span className="text-xl font-semibold">{"User"}</span>
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
              <span className="text-xl font-semibold">{"01850563626"}</span>
            </h1>
            <h1>
              Name :{" "}
              <span className="text-xl font-semibold">{"Hossain Ahmed"}</span>
            </h1>
            <h1>
              Email :{" "}
              <span className="text-xl font-semibold">
                {"hossain@gmail.com"}
              </span>
            </h1>
            <h1>
              Address :{" "}
              <span className="text-xl font-semibold">
                {"Dhaka, bangladesh"}
              </span>
            </h1>
            <h1>
              <button className="btn btn-primary mt-4 w-full">
                <FiEdit3 size={18} className="mr-2" />
                Edit Profile
              </button>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
