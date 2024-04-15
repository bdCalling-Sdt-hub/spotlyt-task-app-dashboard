import { IoIosNotificationsOutline } from "react-icons/io";


const NotificationCart = () => {

     function calculateTimeDifference(dateString) {
          const now = new Date();
          const date = new Date(dateString);
      
          const secondsAgo = Math.floor((now - date) / 1000);
          const minutesAgo = Math.floor(secondsAgo / 60);
          const hoursAgo = Math.floor(minutesAgo / 60);
          const daysAgo = Math.floor(hoursAgo / 24);
          const yearsAgo = Math.floor(daysAgo / 365);
      
          if (yearsAgo > 0) {
            return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
          } else if (daysAgo > 0) {
            return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
          } else if (hoursAgo > 0) {
            return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
          } else if (minutesAgo > 0) {
            return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
          } else {
            return "just now";
          }
      }
     return (
          <div className="flex cursor-pointer justify-between items-center border-2 px-3 rounded-lg border-[#318130]">
               
        <div className={`flex gap-[16px] items-center p-[16px]`}>
           
              <IoIosNotificationsOutline
                style={{ cursor: "pointer" }}
                className={` bg-primary w-[52px] h-[52px] text-[#318130] border-2 border-[#318130] rounded-full p-2 `}
              />
       
              
                <h1 className="text-[16px] font-normal">
                  {/* {message}. */}
                  notification
                </h1>
                {/* <p className="text-[14px] text-[#979797]">{formatDate(createdAt)}</p> */}
            
            </div>
            <div>
                <small>{calculateTimeDifference("2024-04-06T06:55:28.481Z")}</small>
            </div>
          </div>
     );
}

export default NotificationCart;