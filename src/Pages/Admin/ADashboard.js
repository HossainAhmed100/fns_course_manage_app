import React from "react";
import { HiOutlineCreditCard } from "react-icons/hi";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { BiVideoRecording } from "react-icons/bi";
import { AiFillNotification } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";
import { IoCopy } from "react-icons/io5";
import profileimg from "../../Utility/img/profile.png";
import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";
import LodingAnimation from "../../Components/LodingAnimation";

function ADashboard() {
  const idCopy = (id) => {
    navigator.clipboard.writeText(id);
  };
  // Fetch Existing Course From Server
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
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="space-y-5 col-span-3">
          <div className="bg-white p-8 custom-border custom-shadow rounded-3xl">
            <label className="text-lg font-medium text-gray-800">
              Select Your Course
            </label>
            <select className="select mt-1 text-lg select-bordered w-full">
              {allCourse &&
                allCourse.map((course) => (
                  <option key={course._id}>{course.c_Title}</option>
                ))}
            </select>
          </div>
          <div className="grid lg:grid-cols-6 gap-6">
            <div className="bg-white p-4 rounded-3xl custom-border custom-shadow">
              <RiAccountPinBoxLine size={35} />
              <p className="text-xl mt-1 font-bold text-green-400">Active</p>
              <span>Account Status</span>
            </div>
            <div className="bg-white p-4 rounded-3xl custom-border custom-shadow">
              <HiOutlineCreditCard size={35} />
              <p className="text-xl mt-1 font-bold text-gray-800">
                Due : TK 5,000
              </p>
              <span>Total Pay 6,000</span>
            </div>
            <div className="bg-white p-4 rounded-3xl custom-border custom-shadow">
              <SiGoogleclassroom size={35} />
              <p className="text-xl mt-1 font-bold text-gray-800">6</p>
              <span>Total Class</span>
            </div>
            <div className="bg-white p-4 rounded-3xl custom-border custom-shadow">
              <BiVideoRecording size={35} />
              <p className="text-xl mt-1 font-bold text-gray-800">4</p>
              <span>Recorded Class</span>
            </div>
            <div className="bg-white p-4 rounded-3xl custom-border custom-shadow">
              <MdOutlineAssignment size={35} />
              <p className="text-xl mt-1 font-bold text-gray-800">1</p>
              <span>Avilable Assignment</span>
            </div>
            <div className="bg-white p-4 rounded-3xl custom-border custom-shadow">
              <AiFillNotification size={35} />
              <p className="text-xl mt-1 font-bold text-gray-800">21</p>
              <span>Notice</span>
            </div>
          </div>
          <div className="flex w-full rounded-3xl h-80 leading-8 custom-border custom-shadow flex-col bg-white items-center justify-center">
            <div>
              Next Class{" "}
              <span className="text-primary font-semibold text-lg">
                10:30 PM
              </span>
            </div>
            <div className="grid grid-flow-col my-4 gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 46 }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="btn btn-primary" disabled>
              Start Class
            </button>
          </div>
        </div>
        <div className="bg-indigo-50 rounded-3xl p-8 custom-shadow ci h-full">
          <div className=" flex items-center justify-start gap-4">
            <div className="avatar">
              <div className="w-24 rounded">
                <img className="ring-1 w-10 h-10" src={profileimg} alt="" />
              </div>
            </div>
            <div>
              <p className="text-xl font-medium">Hossain Ahmed</p>
              <p className="text-base font-normal">hossain@gmail.com</p>
              <button
                className="btn btn-primary flex items-center justify-center btn-sm"
                onClick={() => idCopy("12583")}
              >
                <span>ID: 12583</span>
                <IoCopy className="text-white ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ADashboard;
