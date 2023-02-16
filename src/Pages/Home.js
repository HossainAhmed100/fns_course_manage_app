import React from "react";
import HeadTitle from "../hooks/HeadTitle";
import AllCourse from "./AllCourse";

function Home() {
  return (
    <>
      <HeadTitle title={"FNS Course - Home"} />
      <div className="bg-gray-50 min-h-screen p-20">
        <AllCourse />
      </div>
    </>
  );
}

export default Home;
