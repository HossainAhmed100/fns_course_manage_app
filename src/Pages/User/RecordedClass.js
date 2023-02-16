import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";
import React from "react";
import LodingAnimation from "../../Components/LodingAnimation";
import UserRecordClassTable from "../../Components/UserRecordClassTable";
import HeadTitle from "../../hooks/HeadTitle";

function RecordedClass() {
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
      <HeadTitle title={"User Recorded Class"} />
      <div>
        <div className="bg-white p-8 custom-border custom-shadow rounded-3xl">
          <label className="text-lg font-medium text-gray-800">
            Select Your Course
          </label>
          <select className="select mt-1 text-lg select-bordered w-full">
            {allCourse &&
              allCourse.map((course) => (
                <option value={course._id} key={course._id}>
                  {course.c_Title}
                </option>
              ))}
          </select>
        </div>
        <div className="divider"></div>
        <div className="bg-white rounded-3xl p-8 custom-border custom-shadow">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Course</th>
                  <th>Video Duration</th>
                  <th>File Size</th>
                  <th>Class Date</th>
                  <th>Downlaod Link</th>
                </tr>
              </thead>
              <tbody>
                {allCourse &&
                  allCourse.map((rclass) =>
                    rclass.recordClass.map((recordClass, index) => (
                      <UserRecordClassTable key={index} rclass={recordClass} />
                    ))
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordedClass;
