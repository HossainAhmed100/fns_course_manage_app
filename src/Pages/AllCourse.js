import React from "react";
import profileimg from "../Utility/img/profile.png";
import thumbnail from "../Utility/img/course.jpg";

function AllCourse() {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl text-center m-6 lg:text-5xl font-semibold">
        All Course
      </h1>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-1 gap-10">
        <div className=" card max-w-xs m-auto bg-white shadow-md">
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
            <span>Course Time : {"6 Month"}</span>
            <span>Assigntment : 16</span>
            <span>{"40"}+ Enrolled Alredy</span>
            <div className="card-actions flex-row mt-4 items-center justify-around">
              <button className="btn btn-primary ">See Details</button>
              <button className="btn btn-primary ">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className=" card max-w-xs m-auto bg-white shadow-md">
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
            <span>Course Time : {"6 Month"}</span>
            <span>Assigntment : 16</span>
            <span>{"40"}+ Enrolled Alredy</span>
            <div className="card-actions flex-row mt-4 items-center justify-around">
              <button className="btn btn-primary ">See Details</button>
              <button className="btn btn-primary ">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className=" card max-w-xs m-auto bg-white shadow-md">
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
            <span>Course Time : {"6 Month"}</span>
            <span>Assigntment : 16</span>
            <span>{"40"}+ Enrolled Alredy</span>
            <div className="card-actions flex-row mt-4 items-center justify-around">
              <button className="btn btn-primary ">See Details</button>
              <button className="btn btn-primary ">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className=" card max-w-xs m-auto bg-white shadow-md">
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
            <span>Course Time : {"6 Month"}</span>
            <span>Assigntment : 16</span>
            <span>{"40"}+ Enrolled Alredy</span>
            <div className="card-actions flex-row mt-4 items-center justify-around">
              <button className="btn btn-primary ">See Details</button>
              <button className="btn btn-primary ">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCourse;
