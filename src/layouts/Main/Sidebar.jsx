import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { BsCalendar2, BsDot } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { HiLogout } from "react-icons/hi";
import { TbLogout2, TbTargetArrow } from "react-icons/tb";
import { FaCalendarDays, FaHandHoldingMedical } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { Menu } from "antd";
import { useState } from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { MdSocialDistance } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import Swal from "sweetalert2";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Sidebar = ({ collapsed }) => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const handleLogOut = () => {
    // localStorage.removeItem('token')
    // localStorage.removeItem('login-user')
    // localStorage.removeItem('user-update')
  };

  const logout = () => {
    Swal.fire({
      title: "Do you want to Logout from here?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");

        navigate("/auth");
      } else if (result.isDenied) {
        Swal.fire("Ok", "", "info");
      }
    });
  };

  const items = [
    getItem(
      <p onClick={(e) => navigate("/")} className="text-[20px] leading-normal">
        Dashboard
      </p>,
      "1",
      <BiSolidDashboard style={{ fontSize: "24px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/all-client")}
        className="text-[18px] leading-normal"
      >
        All Client
      </p>,
      "2",
      <FaUsers style={{ fontSize: "24px" }} />
    ),

    getItem(
      <p
        onClick={(e) => navigate("/all-employee")}
        className="text-[18px] leading-normal"
      >
        All Employee
      </p>,
      "3",
      <FaUsers style={{ fontSize: "24px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/verify-request")}
        className="text-[18px] leading-normal"
      >
        Verify Request
      </p>,
      "4",
      <MdVerifiedUser style={{ fontSize: "24px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/services")}
        className="text-[18px] leading-normal"
      >
        Services
      </p>,
      "30",
      <GrServices style={{ fontSize: "24px" }} />
    ),

    // getItem(
    //   <p
    //     // onClick={(e) => navigate("/appointments")}
    //     className="text-[18px] leading-normal"
    //   >
    //     Add Service
    //   </p>,
    //   "5",
    //   <GrServices style={{ fontSize: "24px" }} />,
    //   [
    //     getItem(
    //       <p
    //         // onClick={(e) => navigate("/tasks/social-media")}
    //         className="text-[18px] leading-normal"
    //       >
    //         Social Media
    //       </p>,
    //       "6",
    //       <MdSocialDistance style={{ fontSize: "24px" }} />,

    //       [
    //         getItem(
    //           <p
    //             onClick={(e) => navigate("/add-service/add-facebook")}
    //             className="text-[18px] leading-normal"
    //           >
    //             Facebook
    //           </p>,
    //           "13",
    //           <SlSocialFacebook style={{ fontSize: "24px" }} />
    //         ),
    //         getItem(
    //           <p
    //             onClick={(e) => navigate("/add-service/add-instagram")}
    //             className="text-[18px] leading-normal"
    //           >
    //             Instagram
    //           </p>,
    //           "14",
    //           <SlSocialInstagram style={{ fontSize: "24px" }} />
    //         ),
    //         getItem(
    //           <p
    //             onClick={(e) => navigate("/add-service/add-tiktok")}
    //             className="text-[18px] leading-normal"
    //           >
    //             TikTok
    //           </p>,
    //           "15",
    //           <FaTiktok style={{ fontSize: "24px" }} />
    //         ),
    //       ]
    //     ),
    //     getItem(
    //       <li
    //         onClick={(e) => navigate("/add-service/add-video")}
    //         className="text-[18px] leading-normal"
    //       >
    //         Video
    //       </li>,
    //       "7"
    //     ),
    //     getItem(
    //       <li
    //         onClick={(e) => navigate("/add-service/add-corporate")}
    //         className="text-[18px] leading-normal"
    //       >
    //         Corporate
    //       </li>,
    //       "8"
    //     ),
    //   ]
    // ),
    // getItem(
    //   <p
    //     // onClick={(e) => navigate("/appointments")}
    //     className="text-[18px] leading-normal"
    //   >
    //     View Service
    //   </p>,
    //   "20",
    //   <HiMiniViewfinderCircle style={{ fontSize: "24px" }} />,
    //   [
    //     getItem(
    //       <p
    //         // onClick={(e) => navigate("/tasks/social-media")}
    //         className="text-[18px] leading-normal"
    //       >
    //         Social Media
    //       </p>,
    //       "21",
    //       <MdSocialDistance style={{ fontSize: "24px" }} />,

    //       [
    //         getItem(
    //           <p
    //             onClick={(e) => navigate("/view-service/facebook")}
    //             className="text-[18px] leading-normal"
    //           >
    //             Facebook
    //           </p>,
    //           "22",
    //           <SlSocialFacebook style={{ fontSize: "24px" }} />
    //         ),
    //         getItem(
    //           <p
    //             onClick={(e) => navigate("/view-service/instagram")}
    //             className="text-[18px] leading-normal"
    //           >
    //             Instagram
    //           </p>,
    //           "23",
    //           <SlSocialInstagram style={{ fontSize: "24px" }} />
    //         ),
    //         getItem(
    //           <p
    //             onClick={(e) => navigate("/view-service/tiktok")}
    //             className="text-[18px] leading-normal"
    //           >
    //             TikTok
    //           </p>,
    //           "24",
    //           <FaTiktok style={{ fontSize: "24px" }} />
    //         ),
    //       ]
    //     ),
    //     getItem(
    //       <li
    //         onClick={(e) => navigate("/view-service/video")}
    //         className="text-[18px] leading-normal"
    //       >
    //         Video
    //       </li>,
    //       "25"
    //     ),
    //     getItem(
    //       <li
    //         onClick={(e) => navigate("/view-service/corporate")}
    //         className="text-[18px] leading-normal"
    //       >
    //         Corporate
    //       </li>,
    //       "26"
    //     ),
    //   ]
    // ),
    getItem(
      <p
        // onClick={(e) => navigate("/appointments")}
        className="text-[18px] leading-normal"
      >
        Tasks
      </p>,
      "19",
      <FaRegClipboard style={{ fontSize: "24px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/tasks/social-media")}
            className="text-[18px] leading-normal"
          >
            Social Media
          </li>,
          "16"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/tasks/video")}
            className="text-[18px] leading-normal"
          >
            Video
          </li>,
          "17"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/tasks/corporate")}
            className="text-[18px] leading-normal"
          >
            Corporate
          </li>,
          "18"
        ),
      ]
    ),

    getItem(
      <p
        onClick={(e) => navigate("/employees-task-register")}
        className="text-[18px] leading-normal"
      >
        Employees Task Register
      </p>,
      "9",
      <FaClipboardCheck style={{ fontSize: "24px" }} />
    ),

    getItem(
      <p
        onClick={(e) => navigate("/withdraw-request")}
        className="text-[18px] leading-normal"
      >
        Withdrawal Request
      </p>,
      "10",
      <BiMoneyWithdraw style={{ fontSize: "24px" }} />
    ),

    getItem(
      <p
        onClick={(e) => navigate("/settings")}
        className="text-[18px] leading-normal"
      >
        Settings
      </p>,
      "11",
      <CiSettings style={{ fontSize: "24px" }} />
    ),
    getItem(
      <p onClick={logout} className="text-[18px] leading-normal">
        Logout
      </p>,
      "12",
      <MdLogout style={{ fontSize: "24px" }} />
    ),
  ];

  return (
    <div className="w-[300px] flex flex-col justify-between bg-[#318130] min-h-screen rounded-lg">
      <div className="">
        <div className="p-[32px]">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* this  */}

        <Menu
          style={{ width: "295px" }}
          className={`w-[300px] p-[10px] bg-[#318130] `}
          defaultSelectedKeys={["1"]}
          mode={mode}
          theme={theme}
          items={items}
          inlineCollapsed={collapsed}
        />
      </div>
      <div className="mb-[32px]">
        {/* <div
          onClick={handleLogOut}
          className="flex items-center ml-[18px] cursor-pointer gap-2 text-[white] font-medium"
        >
          <HiLogout width={25} height={25} />
          <span className="text-[20px] ">Log Out</span>
        </div> */}
        {/* <Link to="/" className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#3BA6F6] font-medium">
            
          </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
