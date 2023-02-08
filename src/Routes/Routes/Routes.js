import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import UserFirst from "../../Layout/UserFirst";
import Signup from "../../Pages/Signup";
import Login from "../../Pages/Login";
import DashBoard from "../../Pages/User/DashBoard";
import RecordedClass from "../../Pages/User/RecordedClass";
import UserPayment from "../../Pages/User/UserPayment";
import Home from "../../Pages/Home";
import Faq from "../../Pages/Faq";
import UserProfile from "../../Pages/User/UserProfile";
import UserFeedback from "../../Pages/User/UserFeedback";
import UserCourse from "../../Pages/User/UserCourse";

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
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserFirst />,
    children: [
      {
        path: "/user",
        element: <DashBoard />,
      },
      {
        path: "/user/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/user/recordedclass",
        element: <RecordedClass />,
      },
      {
        path: "/user/userpaymemt",
        element: <UserPayment />,
      },
      {
        path: "/user/userprofile",
        element: <UserProfile />,
      },
      {
        path: "/user/userfeedback",
        element: <UserFeedback />,
      },
      {
        path: "/user/usercourse",
        element: <UserCourse />,
      },
    ],
  },
]);

export default router;
