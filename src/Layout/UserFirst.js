import React from "react";
import { Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsLayoutSidebarInset } from "react-icons/bs";

function UserFirst() {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className="drawer-side border-2">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a href="/">Sidebar Item 1</a>
            </li>
            <li>
              <a href="/">Sidebar Item 2</a>
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
