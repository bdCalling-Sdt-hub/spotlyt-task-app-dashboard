import { createBrowserRouter } from "react-router-dom";
import Auth from "../layouts/Auth/Auth";
import LogIn from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyOtp from "../pages/Auth/VerifyOtp";
import UpdatePassword from "../pages/Auth/UpdatePassword";
import Main from "../layouts/Main/Main";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import AllClient from "../pages/Main/AllClient/AllClient";
import AllEmployee from "../pages/Main/AllEmployee/AllEmployee";
import SocialMedia from "../pages/Main/SocialMedia/SocialMedia";
import Video from "../pages/Main/Video/Video";
import Corporate from "../pages/Main/Corporate/Corporate";
import EmployeeTaskRegister from "../pages/Main/EmployeeTaskRegister/EmployeeTaskRegister";
import RegisterTaskDetails from "../pages/Main/RegisterTaskDetails/RegisterTaskDetails";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <DashboardHome />,
        },
        {
          path: "/all-client",
          element: <AllClient/>,
        },
        {
          path: "/all-employee",
          element: <AllEmployee/>,
        },
        {
          path: "/tasks/social-media",
          element: <SocialMedia/>,
        },
        {
          path: "/tasks/video",
          element: <Video/>,
        },
        {
          path: "/tasks/corporate",
          element: <Corporate/>,
        },
        {
          path: "/employees-task-register",
          element: <EmployeeTaskRegister/>,
        },
        {
          path: "/employees-task-register/:id",
          element: <RegisterTaskDetails/>,
        },
        // {
        //   path: "/events/edit-event",
        //   element: <EditEvent/>,
        // },
        // {
        //   path: "/matches",
        //   element: <Matches/>,
        // },
        // {
        //   path: "/matches/add-matches",
        //   element: <AddMatches/>,
        // },
        // {
        //   path: "/matches/edit-matches/:id",
        //   element: <EditMatches/>,
        // },
  
        // {
        //   path: "/settings",
        //   element: <Setting />,
        // },
        // {
        //   path: "/settings/privacy-policy",
        //   element: <PrivacyPolicy/>,
        // },
        // {
        //   path: "/settings/edit-privacy-policy",
        //   element: <EditPrivacyPolicy />,
        // },
        // {
        //   path: "/settings/terms-conditions",
        //   element: <TermsAndConditions/>,
        // },
        // {
        //   path: "/settings/edit-terms-conditions",
        //   element: <EditTermsAndConditions/>,
        // },
        // {
        //   path: "/settings/about-us",
        //   element: <AboutUs/>,
        // },
        // {
        //   path: "/settings/edit-about-us",
        //   element: <EditAboutUs/>,
        // },
       
        // {
        //   path: "/settings/:settingType",
        //   element: <SettingDetail />,
        // },
      ],
    },
    {
      path: "/auth",
      element: <Auth/>,
      children: [
        {
          path: "/auth",
          element: <LogIn/>,
        },
        // {
        //   path: "login",
        //   element: <Login />,
        // },
        {
          path: "forgot-password",
          element: <ForgotPassword/>,
        },
        {
          path: "verify",
          element:<VerifyOtp/>,
        },
        {
          path: "update-password",
          element: <UpdatePassword/>,
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  export default router;