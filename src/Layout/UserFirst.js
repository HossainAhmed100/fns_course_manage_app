import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import {
  RiSettings4Fill,
  RiFeedbackFill,
  RiDownloadCloudLine,
} from "react-icons/ri";
import { BsLayoutSidebarInset, BsCreditCardFill } from "react-icons/bs";

function UserFirst() {
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
              <NavLink to="/user">
                <RxDashboard size={16} />
                Dasboard
              </NavLink>
            </li>
            <li>
              <Link to="/user/recordedclass">
                <RiDownloadCloudLine size={16} />
                Recorded Class
              </Link>
            </li>
            <li>
              <Link to="/user">
                <BsCreditCardFill size={16} />
                Payment
              </Link>
            </li>
            <li>
              <Link to="/user">
                <RiSettings4Fill size={16} />
                Account Setting
              </Link>
            </li>
            <li>
              <Link to="/user">
                <RiFeedbackFill size={16} />
                Feedback
              </Link>
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

export default UserFirst;
