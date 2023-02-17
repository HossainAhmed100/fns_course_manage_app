import React from "react";
import HeadTitle from "../hooks/HeadTitle";
import courseThumbnail from "../Utility/img/course.jpg";
import axios from "../axios";
import LodingAnimation from "./LodingAnimation";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { IoCard } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { TbCertificate } from "react-icons/tb";
import { RiStackFill, RiTimeFill } from "react-icons/ri";

function CourseDetails() {
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
    <>
      <HeadTitle title={"FNS - Course Details"} />
      <div className="px-20 py-10">
        <div className="mx-auto">
          <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
            <img
              className="w-full col-span-2 rounded-md custom-shadow custom-shadow custom-border"
              src={courseThumbnail}
              alt="Course Thumbnail"
            />

            <div className="card w-96 bg-base-100 custom-shadow custom-border">
              <div className="card-body flex flex-col items-start justify-between">
                <div className="space-y-3">
                  <h2 className="card-title">
                    {c_Title && c_Title} with React.js
                  </h2>
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
                    to={`/user/usercourse/coursepurchase/${course._id}`}
                    className="btn btn-primary w-full flex items-center gap-2 justify-center"
                  >
                    <IoCard size={20} /> Bay Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mt-8 gap-10 grid-cols-1">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-medium my-2">
                  লাইভ মেন্টর সাপোর্ট
                </h2>
                <p className="text-xl font-normal">
                  একজন সফটওয়্যার ইঞ্জিনিয়ার সপ্তাহের ৬ দিন একটি নির্দিষ্ট সময়ের
                  জন্য (দিনে চার ঘণ্টা করে) অনলাইনে থাকবেন আপনার বিভিন্ন সমস্যা
                  ও প্রশ্নের উত্তর দেয়ার জন্য। এই নির্ধারিত Support Hour এর
                  মধ্যে ডিসকাশন ফোরামে পোস্ট করলে সাথে সাথেই সাপোর্ট পেয়ে যাবেন।
                  আর এই সময়ের বাইরে পোস্ট করলে, মেন্টর পরবর্তী দিনের Support
                  Hour এ এসে রিপ্লাই দিবেন।
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium my-2">৭টি প্রজেক্ট</h2>
                <p className="text-xl font-normal">
                  হ্যা, শুনতে বাড়াবাড়ি মনে হলেও আমরা পুরো প্রোগ্রামে মোট ৭টি
                  প্রজেক্টই করে দেখাবো। এগুলোর কিছু কিছু প্রজেক্ট কনসেপ্ট বুঝাতে
                  বুঝাতেই ডেভেলপ করা হবে, আর বাকিগুলো কনসেপ্ট বুঝানোর পর
                  Capstone Projects হিসেবে করে দেখানো হবে। সোর্স কোডগুলো আপনাদের
                  দিয়ে দেয়া হবে যাতে সেগুলো নিয়ে প্র্যাকটিস করতে পারেন। এই
                  প্রজেক্টগুলোতে এমনসব ফীচার করে দেখানো হয়েছে, যা প্র্যাকটিস
                  করলে যেকোনো ধরনের ওয়েব এপ্লিকেশন ডেভেলপমেন্ট এর কাজ শুরু করার
                  সাহস পেয়ে যাবেন!
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium my-2">
                  ম্যানুয়াল প্রজেক্ট রিভিউ ও পার্সোনাল ফীডব্যাক
                </h2>
                <p className="text-xl font-normal">
                  পুরো প্রোগ্রামে মোট ৭টি প্রজেক্ট তো আমরা করে দেখাবো; কিন্তু এর
                  বাইরে আরও ৭টি প্রজেক্ট আপনাকে কমপ্লিট করতে হবে; কমপ্লিট করে
                  সেই প্রজেক্টগুলো এসাইনমেন্ট হিসেবে সাবমিট করতে হবে। চার মাসের
                  মধ্যে এই এসাইনমেন্টগুলো সাবমিট করলে প্রতিটি এসাইনমেন্ট আমরা
                  ম্যানুয়ালি রিভিউ করবো, প্রতিটির জন্যেই ইমেইলের মাধ্যমে
                  পার্সোনাল ফীডব্যাক জানিয়ে দিবো। রিভিউ এর পর Passing Score
                  তুলতে পারলে প্রতিটি এসাইনমেন্টের জন্য আলাদা সার্টিফিকেট পাবেন।
                  অর্থাৎ ৭টি এসাইনমেন্টে পাশ করতে করতে ৭টি সার্টিফিকেট অর্জন করে
                  ফেলবেন! এছাড়া কনসেপ্ট যাচাই করে নেয়ার জন্য প্রতিটি লেসনের শেষে
                  কুইজ তো থাকবেই। এই কুইজ এবং এসাইনমেন্টের আলাদা আলাদা স্কোরগুলো
                  কোর্সের শেষের ফাইনাল রেজাল্টে একত্রে প্রতিফলিত হবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
