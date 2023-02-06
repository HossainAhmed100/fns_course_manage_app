import React from "react";
import { Outlet } from "react-router-dom";

function UserFirst() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default UserFirst;
