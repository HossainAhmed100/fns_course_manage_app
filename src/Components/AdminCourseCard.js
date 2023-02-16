import React from "react";
import { TbEye, TbReportAnalytics } from "react-icons/tb";
import thumbnail from "../Utility/img/course.jpg";

function AdminCourseCard({ course }) {
  // c_Title, c_Duration, c_StartDate, c_EnrollEndDate, c_StdentQuantity, c_BatchNum, c_Description
  const {
    c_Title,
    c_Duration,
    c_StartDate,
    c_EnrollEndDate,
    c_StdentQuantity,
    c_BatchNum,
  } = course;
  return (
    <div className=" card max-w-md m-auto bg-white shadow-md">
      <figure>
        <img src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="badge badge-primary">{c_BatchNum && c_BatchNum}</div>
        <h2 className="card-title">{c_Title && c_Title}</h2>
        <div className="avatar flex items-center gap-2">
          <div className="w-10 rounded-full  ring-offset-2 ring-2">
            <img src={thumbnail} alt="" />
          </div>
          <h3>Freelancer Nasim</h3>
        </div>
        <span>Course Duration : {c_Duration && c_Duration}</span>
        <span>Course Start Date : {c_StartDate && c_StartDate}</span>
        <span>Course Enroll End : {c_EnrollEndDate && c_EnrollEndDate}</span>
        <span>Student Limit : {c_StdentQuantity && c_StdentQuantity}</span>
        <span>{"40"}+ Enrolled Alredy</span>
        <div className="card-actions flex-row mt-4 items-center justify-around">
          <button className="btn btn-primary flex items-center gap-2 justify-center">
            <TbEye size={20} />
            See Details
          </button>
          <button className="btn btn-primary flex items-center gap-2 justify-center">
            <TbReportAnalytics size={20} /> Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCourseCard;
