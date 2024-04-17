import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import NotificationCart from "../../../components/NotificationCart";
import { useGetNotificationQuery } from "../../../redux/features/getNotificationApi";
import Loading from "../../../components/Loading";
import { io } from "socket.io-client";
const Notification = () => {
  const [page, setPage] = useState(1);
  const [socketNotification,setSocketNotification] = useState([]);
  const { data:notification, isError, isLoading, isSuccess } = useGetNotificationQuery(page);

  console.log("notification",notification);

  const onChange = (values) => {
    console.log(values);
    setPage(values);
  };

  useEffect(() => {
     const socket = io("ws://103.145.138.54:8282");
     socket.on("admin-notification", (data) => {
       setSocketNotification(data);
     });
 
     return () => {
       socket.disconnect();
     };
   }, [socketNotification]);
   
   if (isLoading) {
     return <Loading/>;
   }
  return (
    <div>
      <div className="pl-[24px] ">
        <div className="rounded-xl overflow-hidden">
          <div className="">
            <h1 className="text-[24px] text-primary font-semibold pb-3">
              Notification
            </h1>
          </div>
          <div className="flex flex-col">
            {/* {allNotifications?.map((item, index) => (
              <NotificationCart key={index} item={item} />
            ))} */}
            {

              notification?.data?.attributes?.results.map((item,index) => (
                <NotificationCart key={index} item={item} />
              ))
            }
             
          </div>
          <div className="flex justify-center my-10">
            <Pagination
              onChange={onChange}
              defaultCurrent={1}
              total={notification?.data?.attributes?.totalResults}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
