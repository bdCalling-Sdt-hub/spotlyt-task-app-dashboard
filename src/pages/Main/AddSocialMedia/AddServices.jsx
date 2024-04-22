import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useGetServicesCategoryQuery } from "../../../redux/features/getServicesCategoryApi";
import Loading from "../../../components/Loading";
import { FaRegPlusSquare } from "react-icons/fa";

const AddServices = () => {
  const { data, isError, isLoading, isSuccess } = useGetServicesCategoryQuery();
  const navigate = useNavigate()
  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return (
    <div>
      <div className="my-10 ml-[24px]">
        <Link
          to={"/services/add"}
          className="text-3xl cursor-pointer text-center px-10 rounded-md text-[#318130] border-2 py-5 my-10 border-[#318130]"
        >
          Add Services
        </Link>
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
                    item?.Categories.map((itemCategory,index) => {
                        return (
                            <>
                             <Link to={`/categoryService/${itemCategory?.id}`} className="flex gap-2 items-center text-xl bg-[#318130;] w-[30%] py-2 px-4 text-white justify-center font-bold rounded-md">
                        <h1 key={index} >
                  {itemCategory?.name}
                </h1>
                        </Link>
                        
                            </>
                       
                            
                        )
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
                <p className="text-xl w-full px-5 py-2  bg-[red] rounded-lg text-white font-bold text-center cursor-pointer">
                  Delete
                </p>
                <p className="text-xl px-5 w-full py-2 bg-[#43a841] rounded-lg text-white font-bold text-center cursor-pointer">
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
