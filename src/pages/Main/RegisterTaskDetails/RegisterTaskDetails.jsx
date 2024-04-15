/* eslint-disable react/jsx-key */
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../../assets/inbox.png"
import { Image } from 'antd';
import { useGetSingleEmployeeTaskRegisterQuery } from "../../../redux/features/getSingleEmployeeRegisterTask";
import baseURL from "../../../config";
import Swal from "sweetalert2";
const RegisterTaskDetails = () => {
  const {id} = useParams();
  console.log(id);
  const {data,isSuccess,isLoading,isError} = useGetSingleEmployeeTaskRegisterQuery(id)
  const navigate = useNavigate();
  console.log(data);
  const url = import.meta.env.VITE_API_URL;
  const handleReject = (id) => {
    console.log(id);
    try {
      const response = baseURL.put(`/tasks/register/admin?id=${id}&status=rejected`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      console.log(response);
      if (response?.data?.code === 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/employees-task-register");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Try Again...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      })
    }
  }
  const handleApprove = (id) => {
    console.log(id);
    try {
      const response = baseURL.put(`/tasks/register/admin?id=${id}&status=accepted`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      console.log(response);
      if (response?.data?.code === 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/employees-task-register");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Try Again...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      })
    }
  }
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
                <p>{data?.data?.attributes?.userId?.createdAt?.split("T")[0]}</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Employees Name:</p>
                <p>{data?.data?.attributes?.userId?.fullName}</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Employees NID Number:</p>
                <p>{data?.data?.attributes?.userId?.nidNumber}</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Email:</p>
                <p>{data?.data?.attributes?.userId?.email}</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Address:</p>
                <p>{data?.data?.attributes?.userId?.address || "N/A"}</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[20px] font-medium">Task Details</p>
            <div>
              <div className="flex justify-between items-center my-[14px]">
                <p>Task Name:</p>
                <p>{data?.data?.attributes?.taskId?.name}</p>
              </div>
              <div className="flex justify-between items-center mb-[14px]">
                <p>Task Link:</p>
                <p>{data?.data?.attributes?.taskId?.taskLink}</p>
              </div>
              <div className="flex justify-between items-center  mb-[14px]">
                <p>Target:</p>
                <p>{data?.data?.attributes?.taskId?.quantity}</p>
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
                <p>R {data?.data?.attributes?.taskId?.price * data?.data?.attributes?.taskId?.quantity}</p>
              </div>

            </div>
          </div>
        </div>
        <div className="mx-[40px]">
            <h1 className="text-[18px] font-medium">Task Screenshot</h1>
            <div className="flex">
              {
                data?.data?.attributes?.image?.map(img => (
                  <Image
                  width={200}
                  src={`${url}${img?.url}`} 
                />
                ))
              }
            
                
          
            </div>
        </div>
        <div className="flex justify-end gap-5 mr-10">
        <p onClick={()=>handleReject(data?.data?.attributes?._id)} className="py-3 cursor-pointer px-20 rounded-xl text-red-500 border-2 border-red-600">Cancel</p>
        <p onClick={()=>handleApprove(data?.data?.attributes?._id)}  className="py-3 cursor-pointer px-20 rounded-xl bg-[#318130] text-white">Approved</p>
      </div>
      </div>
      
    </div>
  );
};

export default RegisterTaskDetails;
