import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Faq from "../../Pages/Faq";
import Home from "../../Pages/Home";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import UserFirst from "../../Layout/UserFirst";
import APayment from "../../Pages/Admin/APayment";
import DashBoard from "../../Pages/User/DashBoard";
import AdminLayout from "../../Layout/AdminLayout";
import UserCourse from "../../Pages/User/UserCourse";
import ADashboard from "../../Pages/Admin/ADashboard";
import UserProfile from "../../Pages/User/UserProfile";
import UserPayment from "../../Pages/User/UserPayment";
import UserFeedback from "../../Pages/User/UserFeedback";
import AUserControl from "../../Pages/Admin/AUserControl";
import ARecordClass from "../../Pages/Admin/ARecordClass";
import RecordedClass from "../../Pages/User/RecordedClass";
import AUserFeedback from "../../Pages/Admin/AUserFeedback";
import ATaskandAssignment from "../../Pages/Admin/ATaskandAssignment";
import AdminAccount from "../../Pages/Admin/AdminAccount";
import Coursemanage from "../../Pages/Admin/Coursemanage";

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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <ADashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/admin/recordclass",
        element: <ARecordClass />,
      },
      {
        path: "/admin/adminpayment",
        element: <APayment />,
      },
      {
        path: "/admin/adminprofile",
        element: <AdminAccount />,
      },
      {
        path: "/admin/managecourse",
        element: <Coursemanage />,
      },
      {
        path: "/admin/usercontrol",
        element: <AUserControl />,
      },
      {
        path: "/admin/userfeedback",
        element: <AUserFeedback />,
      },
      {
        path: "/admin/taskandasigntment",
        element: <ATaskandAssignment />,
      },
    ],
  },
]);

export default router;
