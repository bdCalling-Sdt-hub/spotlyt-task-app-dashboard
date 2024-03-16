import { NavLink, useNavigate } from "react-router-dom";
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
import { Menu } from "antd";
import { useState } from "react";



function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const Sidebar = () => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    // localStorage.removeItem('token')
    // localStorage.removeItem('login-user')
    // localStorage.removeItem('user-update')
    // navigate('/')
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const logout = () => {
    // Swal.fire({
    //   title: "Do you want to Logout from here?",
    //   showDenyButton: true,
    //   showCancelButton: false,
    //   confirmButtonText: "Yes",
    //   denyButtonText: `No`,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("yourInfo");

    //     navigate("/login");
    //   } else if (result.isDenied) {
    //     Swal.fire("Ok", "", "info");
    //   }
    // });
  };


  const items = [
    getItem(
      <p onClick={(e) => navigate("/")} className="text-[20px] leading-normal">
        Dashboard
      </p>,
      "1",
      <BiSolidDashboard style={{ fontSize: "28px" }} />
    ),
    getItem(
      <p onClick={(e) => navigate("/all-client")} className="text-[20px] leading-normal">All Client</p>,
      "2",
      <FaUsers  style={{ fontSize: "28px" }} />,
    ),

    getItem(
      <p onClick={(e) => navigate("/all-employee")} className="text-[20px] leading-normal">All Employee</p>,
      "3",
      <FaUsers  style={{ fontSize: "28px" }} />
     
    ),
    getItem(
      <p
        // onClick={(e) => navigate("/appointments")}
        className="text-[20px] leading-normal"
      >
        Tasks
      </p>,
      "4",
      <FaRegClipboard  style={{ fontSize: "28px" }} />,
       [
        getItem(
          <li
            onClick={(e) => navigate("/tasks/social-media")}
            className="text-[20px] leading-normal"
          >
            Social Media
          </li>,
          "5"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/tasks/video")}
            className="text-[20px] leading-normal"
          >
            Video
          </li>,
          "6"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/tasks/corporate")}
            className="text-[20px] leading-normal"
          >
            Corporate
          </li>,
          "7"
        ),
      ]

    ),
    getItem(
      <p
        onClick={(e) => navigate("/employees-task-register")}
        className="text-[20px] leading-normal"
      >
        Employees Task Register
      </p>,
      "8",
      <FaClipboardCheck  style={{ fontSize: "28px" }} />
    ),
   

   
 
    getItem(
      <p
        // onClick={(e) => navigate("/settings")}
        className="text-[20px] leading-normal"
      >
        Settings
      </p>,
      "9",
      <CiSettings   style={{ fontSize: "28px" }}/> 
    ),
    getItem(
      <p onClick={logout} className="text-[20px] leading-normal">
        Logout
      </p>,
      "10",
      <TbLogout2  style={{ fontSize: "28px" }}/>
    ),
  ];







  return (
    <div className="w-[300px] flex flex-col justify-between bg-[#318130] min-h-screen rounded-lg">
      <div className="">
        <div className="p-[32px]">
          <img src={logo} alt="" />
        </div>


        {/* this  */}




        <Menu
            style={{ width:"295px" }}
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
