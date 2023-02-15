import React from "react";
import { BsCreditCardFill, BsLayoutSidebarInset } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { MdLightMode, MdNightlight } from "react-icons/md";
import {
  RiDownloadCloudLine,
  RiFeedbackFill,
  RiSettings4Fill,
} from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-white">
          <Outlet />
        </div>
        <div className="drawer-side border-r-2">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 space-y-3 bg-base-100 text-base-content">
            <li>
              <NavLink to="/admin/dashboard">
                <RxDashboard size={16} />
                Dasboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/recordclass">
                <RiDownloadCloudLine size={16} />
                Recorded Class
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/taskandasigntment">
                <RiDownloadCloudLine size={16} />
                Task & Assigntment
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/adminpayment">
                <BsCreditCardFill size={16} />
                User Payment
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/usercontrol">
                <FaUserCog size={16} />
                User Control
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/managecourse">
                <SiGoogleclassroom size={16} />
                Manage Course
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/userfeedback">
                <RiFeedbackFill size={16} />
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/adminprofile">
                <RiSettings4Fill size={16} />
                Account Setting
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="btm-nav border-2 lg:hidden sm:flex z-50">
        <button>
          <RxDashboard size={25} />
        </button>
        <button className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <label htmlFor="my-drawer-2">
          <BsLayoutSidebarInset />
        </label>
      </div>
    </div>
  );
}

export default AdminLayout;
