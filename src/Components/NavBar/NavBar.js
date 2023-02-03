import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-base-100 shadow fixed w-full">
      <nav className="container rounded-md mx-auto navbar">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            FNS Course
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu-horizontal space-x-3">
            <li>
              <button
                type="submit"
                className="btn btn-accent w-full rounded-lg text-white"
              >
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li>
              <button
                type="submit"
                className="btn btn-accent w-full rounded-lg text-white"
              >
                <Link to="/signup">Sign Up</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
