import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import LodingAnimation from "../LodingAnimation";
import primg from "../../Utility/img/profile.png";

function UserNavBar() {
  const { loding } = useContext(AuthContext);
  if (loding) {
    return <LodingAnimation />;
  }
  return (
    <div>
      <div className="bg-base-100 z-50 shadow w-full">
        <div className="navbar container mx-auto bg-base-100">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              FNS Course
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 ring rounded-full">
                  <img src={primg} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="/">Settings</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNavBar;
