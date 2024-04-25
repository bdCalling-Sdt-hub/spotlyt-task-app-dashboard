import { LuBadgeDollarSign } from "react-icons/lu";
import { MdEmojiEvents } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { useGetStatusQuery } from "../redux/features/getStatusApi";
const Status = () => {
  const {data,isError,isLoading} = useGetStatusQuery();
  console.log(data);
//   function formatToK(number) {
//     return (number / 1000).toFixed(2) + 'k';
// }
  return (
    <div className="grid grid-cols-4 gap-[24px] mt-[24px]">
      <div className="bg-[white] shadow-xl px-[20px] py-[32px] flex justify-between items-center rounded-lg">
        <LuBadgeDollarSign
          size={81}
          color="white"
          className="bg-[#318130] p-[10px] rounded-2xl"
        />
        <div className="">
          <p className="">Total Earnings</p>
          <h1 className=" text-[44px]">R {data?.data?.attributes?.totalIncome[0]?.totalIncome.toFixed(2) || "0.00"} </h1>
        </div>
      </div>
      <div className="bg-[white] px-[20px] py-[32px] flex justify-between items-center rounded-lg shadow-xl">
        <FaUsers
          size={81}
          color="white"
          className="bg-[#1BC5BD] p-[10px] rounded-2xl"
        />
        <div className="">
          <p className="">Total Client</p>
          <h1 className=" text-[44px]">{data?.data?.attributes?.totalClient || 0}</h1>
        </div>
      </div>
      <div className="bg-[white] px-[20px] py-[32px] flex justify-between items-center rounded-lg shadow-xl">
        <FaUsers
          size={81}
          color="white"
          className="bg-[#5EE46E] p-[10px] rounded-2xl"
        />
        <div className="">
          <p className="">Total Employees</p>
          <h1 className=" text-[44px]">{data?.data?.attributes?.totalEmployee || 0}</h1>
        </div>
      </div>
      <div className="bg-[white] px-[20px] py-[32px] flex justify-between items-center rounded-lg shadow-xl">
        <RiUserStarLine
          size={81}
          color="white"
          className="bg-[#5F5CF1] p-[10px] rounded-2xl"
        />
        <div className="">
          <p className="">Total Tasks</p>
          <h1 className=" text-[44px]"> {data?.data?.attributes?.totalTasks || 0}</h1>
        </div>
      </div>
    </div>
  );
};

export default Status;
