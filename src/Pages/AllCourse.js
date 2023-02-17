import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { TbEye } from "react-icons/tb";
import { IoCard } from "react-icons/io5";
import LodingAnimation from "../Components/LodingAnimation";
import AdminCourseCard from "../Components/AdminCourseCard";
import { Link } from "react-router-dom";

function AllCourse() {
  const { data: allCourse = [], isLoading } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const data = await axios.get("allCourse");
      return data.data;
    },
  });
  if (isLoading) {
    return <LodingAnimation />;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-xl text-center m-6 lg:text-5xl font-semibold">
        All Course
      </h1>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-1 gap-10">
        {allCourse &&
          allCourse.map((course) => (
            <AdminCourseCard key={course._id} course={course}>
              <Link
                to={`/user/usercourse/coursedetails/${course._id}`}
                className="btn btn-primary flex items-center gap-2 justify-center"
              >
                <TbEye size={20} />
                See Details
              </Link>
              <Link
                to={`/user/usercourse/coursepurchase/${course._id}`}
                className="btn btn-primary flex items-center gap-2 justify-center"
              >
                <IoCard size={20} /> By Now
              </Link>
            </AdminCourseCard>
          ))}
      </div>
    </div>
  );
}

export default AllCourse;
