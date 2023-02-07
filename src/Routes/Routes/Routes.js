import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import UserFirst from "../../Layout/UserFirst";
import Signup from "../../Pages/Signup";
import Login from "../../Pages/Login";
import DashBoard from "../../Pages/User/DashBoard";
import UserOfflineClass from "../../Pages/User/UserOfflineClass";
import UserPayment from "../../Pages/User/UserPayment";
import Home from "../../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserFirst />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "userofflineclass",
        element: <UserOfflineClass />,
      },
      {
        path: "userpaymemt",
        element: <UserPayment />,
      },
    ],
  },
]);

export default router;
