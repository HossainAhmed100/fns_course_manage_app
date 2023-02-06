import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import UserFirst from "../../Layout/UserFirst";
import Signup from "../../Pages/Signup";
import Login from "../../Pages/Login";
import DashBoard from "../../Pages/User/DashBoard";
import UserOfflineClass from "../../Pages/User/UserOfflineClass";
import UserPayment from "../../Pages/User/UserPayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/userofflineclass",
        element: <UserOfflineClass />,
      },
      {
        path: "/userpaymemt",
        element: <UserPayment />,
      },
    ],
  },
  {
    path: "/userfirst",
    element: <UserFirst />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
