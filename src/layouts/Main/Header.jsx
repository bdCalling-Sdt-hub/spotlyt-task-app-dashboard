import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge, Dropdown, Button, Menu } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import {
 
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { io } from "socket.io-client";
import { useGetNotificationQuery } from "../../redux/features/getNotificationApi";
// import SearchBox from "../SearchBox/SearchBox";

const Header = ({toggleCollapsed,collapsed}) => {
  const navigate = useNavigate();
  const [socketNotification,setSocketNotification] = useState([]);
  const {data,isError,isLoading,isSuccess} = useGetNotificationQuery(1);

  useEffect(() => {
    const socketNotification = io("ws://103.145.138.54:8282");
    socketNotification.on("connect", () => {
      socketNotification.on("admin-notification", (data) => {
        console.log(data);
        setSocketNotification(data);
      })
    })
    socketNotification.off("admin-notification",data)
  })
  return (
    <div className="flex justify-between items-center rounded-md mb-[24px] p-[16px] bg-[#318130]">
      <div className="flex items-center gap-5">

      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
        <MdMenu className="h-[42px] w-[42px] text-[white]" /> */}


        {location.pathname == "/dashboard/users" ||
        location.pathname == "/dashboard/appointments" ||
        location.pathname == "/dashboard/earnings" ? (
          <div className="">{/* <SearchBox /> */}</div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex gap-5">
        {/* <Dropdown overlay={menu} placement="bottomRight" arrow> */}
        <div
          onClick={(e) => navigate("notification")}
          className="relative flex items-center "
        >
          <Badge style={{ backgroundColor: "#318130" }} count={5}>
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={` bg-primary w-[52px] h-[52px] text-[white] border-2 border-[white] rounded-full p-2 `}
            />
          </Badge>
        </div>
        {/* </Dropdown> */}
        <div
          onClick={() => navigate("profile-information")}
          className="flex items-center cursor-pointer mr-[30px] bg-primary text-white rounded-full p-1"
        >
          <FaRegUser className="text-[white] border-2 border-[white] rounded-full p-2 w-[52px] h-[52px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
