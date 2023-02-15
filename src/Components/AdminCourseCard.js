import React from 'react'
import { TbEye, TbReportAnalytics } from 'react-icons/tb';

function AdminCourseCard({course}) {
    const {thumbnail, profileimg} = course.props;
  return (
    <div className=" card max-w-md m-auto bg-white shadow-md">
                <figure>
                  <img src={thumbnail} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <div className="badge badge-primary">Batch 6</div>
                  <h2 className="card-title">Web Development with React.js</h2>
                  <div className="avatar flex items-center gap-2">
                    <div className="w-10 rounded-full  ring-offset-2 ring-2">
                      <img src={profileimg} alt="" />
                    </div>
                    <h3>Freelancer Nasim</h3>
                  </div>
                  <span>Course Duration : {"6 Month"}</span>
                  <span>Student Limit : 250</span>
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
  )
}

export default AdminCourseCard