import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useGetServicesCategoryQuery } from "../../../redux/features/getServicesCategoryApi";
import Loading from "../../../components/Loading";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import baseURL from "../../../config";
import { FaEdit } from "react-icons/fa";
const AddServices = () => {
  const { data, isError, isLoading, isSuccess } = useGetServicesCategoryQuery();
  const navigate = useNavigate()
  if (isLoading) {
    return <Loading />;
  }

  console.log(data?.data?.attributes?.length);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await baseURL.delete(`/service/category?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if (response?.status === 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000); 
      
  }
} catch (error) {
  console.log(error?.response?.data?.message);
  Swal.fire({
    icon: "error",
    title: "Error...",
    text: error?.response?.data?.message,
    footer: '<a href="#">Why do I have this issue?</a>',
  });
}
  }

  const handleCartDelete = async (id) => {
    console.log(id);
    try {
      const response = await baseURL.delete(`/service?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  
  })
  console.log(response);
  if (response?.status === 200) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: response?.data?.message,
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1600);
  }

}catch(error){
  console.log(error?.response?.data?.message);
  Swal.fire({
    icon: "error",
    title: "Error...",
    text: error?.response?.data?.message,
    footer: '<a href="#">Why do I have this issue?</a>',
  });
}
  }
  return (
    <div>
      <div className="my-10 ml-[24px]">
        {
          data?.data?.attributes?.length <= 2  && <Link
          to={"/services/add"}
          className="text-3xl cursor-pointer text-center px-10 rounded-md text-[#318130] border-2 py-5 my-10 border-[#318130]"
        >
          Add Services
        </Link>
        }
        
      </div>

      {data?.data?.attributes?.map((item) => {
        return (
          <div key={item?._id} className="my-10">
            {/* <h1 className="text-3xl text-center text-[#318130]">View Facebook</h1> */}
            <div className="w-[80%] mx-auto border-2 rounded-lg border-[#318130]">
              <h1 className="text-3xl bg-[#318130;] p-4 text-center text-white">{item?.name}</h1>
              <div className="px-4 bg-[#EAF2EA]">
                <h1 className="py-2 text-2xl text-[#318130;] font-medium">
                  Categories:
                </h1>
                <div className="flex gap-2">
                {
                    item?.Categories?.map((itemCategory,index) => {
                      if(itemCategory?.name){
                        return (
                          <div key={
                            index
                          } className="flex gap-5 items-center text-xl bg-[#318130;]  py-2 px-4 text-white justify-center font-bold rounded-md">
                           <Link to={`/categoryService/${itemCategory?.id}`} >
                      <h1 key={index} >
                {itemCategory?.name}
              </h1>
                      </Link>

                       <MdDelete onClick={() => handleDelete(itemCategory?.id)} className="text-[35px] cursor-pointer text-[red]"/>
                          </div>
                        )
                      } else{
                        return (
                          
                     <></>
                          
                      )
                      }
                        
                    })
                }
                <FaRegPlusSquare onClick={() => navigate(`/addCategoryService/${item?._id}`)} className="text-[65px] cursor-pointer text-[#318130]"/>
                </div>
                
                
                <div>
                  <h1 className="py-2 text-2xl text-[#318130] font-medium">
                    Services:
                  </h1>
                  <ul className="py-1 ml-5">
                    {
                        item?.description.map((item,index) => {
                            return (
                                <li key={index} className="my-1 text-xl flex items-center gap-2">
                                  <FaDotCircle className="text-[15px] text-[#318130;]" />{" "}
                                  {item}
                                </li>
                            )
                        })
                    }
                  
                  </ul>
                </div>
              </div>
              <div className="flex rounded-b-lg justify-around py-2 gap-2 px-5 bg-[#EAF2EA]">
                <p  onClick={() => handleCartDelete(item?._id)} className="text-xl w-full px-5 py-2  bg-[red] rounded-lg text-white font-bold text-center cursor-pointer">
                  Delete
                </p>
                <p onClick={() => navigate(`/editService/${item?._id}`)} className="text-xl px-5 w-full py-2 bg-[#43a841] rounded-lg text-white font-bold text-center cursor-pointer">
                  Edit Service
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddServices;
