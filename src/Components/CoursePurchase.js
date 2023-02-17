import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import LodingAnimation from "./LodingAnimation";
import { IoCard } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { TbCertificate } from "react-icons/tb";
import { RiStackFill, RiTimeFill } from "react-icons/ri";

function CoursePurchase() {
  const { id } = useParams();
  const { data: course = [], isLoading } = useQuery({
    queryKey: ["allCourse", id],
    queryFn: async () => {
      const data = await axios.get(`allCourse/${id}`);
      return data.data;
    },
  });
  if (isLoading) {
    return <LodingAnimation />;
  }
  const { c_Title, c_Duration, c_StdentQuantity } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 custom-shadow custom-border">
        <div className="card-body flex flex-col items-start justify-between">
          <div className="space-y-3">
            <h2 className="card-title">{c_Title && c_Title} with React.js</h2>
            <span className="text-xl flex gap-2 items-center font-normal">
              <GiTeacher /> Mentor : Freelancer Nasim
            </span>
            <span className="text-xl flex gap-2 items-center font-normal">
              <HiCodeBracketSquare /> Assignments
            </span>
            <span className="text-xl flex gap-2 font-normal">
              <RiTimeFill /> Duration {c_Duration && c_Duration}
            </span>
            <span className="text-xl flex gap-2 items-center font-normal">
              <RiStackFill /> Beginner to Pro
            </span>
            <span className="text-xl flex gap-2 items-center font-normal">
              <FaUsers /> Student {c_StdentQuantity && c_StdentQuantity}
            </span>
            <span className="text-xl flex gap-2 items-center font-normal">
              <TbCertificate /> Professional Certificate
            </span>
          </div>
          <div className="card-actions w-full">
            <Link
              to={"/user/usercourse/coursepurchase"}
              className="btn btn-active btn-ghost w-full text-xl"
            >
              Course Fee : 6,000Tk
            </Link>
            <Link
              to={"/user/usercourse/coursepurchase"}
              className="btn btn-primary w-full flex items-center gap-2 justify-center"
            >
              <IoCard size={20} /> Bay Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePurchase;
