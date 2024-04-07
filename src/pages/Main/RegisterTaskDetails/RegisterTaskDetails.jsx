import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/inbox.png"
import { Image } from 'antd';

const RegisterTaskDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-[34px]">
      <div className="cursor-pointer mt-[44px] flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft
          onClick={() => navigate("/employees-task-register")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">
          Employees Task Register
        </h1>
      </div>
      <div className="shadow-2xl rounded-xl pb-10">
        <div className="flex gap-40 justify-between my-[30px] py-[40px] px-[60px] border-b-2">
          <div className="flex-1 ">
            <p className="text-[20px] font-medium">Employee Details</p>
            <div className="">
              <div className="flex justify-between items-center my-[14px] text-[16px] font-normal">
                <p>Date:</p>
                <p>01-24-2024</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Employees Name:</p>
                <p>Ahad Aiman</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Employees NID Number:</p>
                <p>652632345</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Email:</p>
                <p>admin@gmail.com</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Province:</p>
                <p>Gauteng</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>State:</p>
                <p>USA</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>City:</p>
                <p>Cape Town</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[20px] font-medium">Task Details</p>
            <div>
              <div className="flex justify-between items-center my-[14px]">
                <p>Task Name:</p>
                <p>App Download</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Task Link:</p>
                <p>https://www.play store.com/games</p>
              </div>
              <div className="flex justify-between items-center  mb-[14px]">
                <p>Target:</p>
                <p>500 Downloads</p>
              </div>
              <div className="flex justify-between items-center  mb-[14px]">
                <p>Start Date:</p>
                <p>01-24-2024</p>
              </div>
              <div className="flex justify-between items-center  mb-[14px]">
                <p>End Date:</p>
                <p>01-24-2024</p>
              </div>
              <div className="flex justify-between items-center  mb-[14px]">
                <p>Total Rand:</p>
                <p>R45000</p>
              </div>
              <div className="flex justify-between items-center  mb-[14px]">
                <p>City:</p>
                <p>01-24-2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[40px]">
            <h1 className="text-[18px] font-medium">Task Screenshot</h1>
            <div className="flex">
            <Image
    width={200}
    src={img} 
  />
                <Image
    width={200}
    src={img} 
  />
               <Image
    width={200}
    src={img} 
  />
          
            </div>
        </div>
        <div className="flex justify-end gap-5 mr-10">
        <p className="py-3 cursor-pointer px-20 rounded-xl text-red-500 border-2 border-red-600">Cancel</p>
        <p  className="py-3 cursor-pointer px-20 rounded-xl bg-[#318130] text-white">Approved</p>
      </div>
      </div>
      
    </div>
  );
};

export default RegisterTaskDetails;
