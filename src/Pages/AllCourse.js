import React from "react";
import profileimg from "../Utility/img/profile.png";
import thumbnail from "../Utility/img/course.jpg";
import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import LodingAnimation from "../Components/LodingAnimation";
import AdminCourseCard from "../Components/AdminCourseCard";

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
          allCourse.map((course) => <AdminCourseCard course={course} />)}
      </div>
    </div>
  );
}

export default AllCourse;
