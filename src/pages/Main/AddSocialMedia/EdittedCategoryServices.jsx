import { Button, Form, Input } from "antd";
import React from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { useGetSingleServiceQuery } from "../../../redux/features/getSingleServiceApi";
import Loading from "../../../components/Loading";

const EdittedCategoryServices = () => {
    const {id} = useParams();
    const location = useLocation();
    console.log("location",location);
    const regex = /serviceCategoryId=([^&]*)/;
let match = location.search.match(regex); // Fixed: use location.search instead of location?search?

let id2 = match ? match[1] : null;

console.log("---------------", id2);
    // console.log(serviceCategoryId);
        console.log(id);
    
    const navigate = useNavigate();
    const {data,isLoading,isSuccess} = useGetSingleServiceQuery(id2);
    if(isLoading){
        return <Loading/>
    }
    console.log(data?.data?.attributes);

    const handleEditService = async (values) => {
        console.log(values);
        
        try {
            const response = await baseURL.put(`/service/category/single?id=${id2}`, values, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            console.log(response);
            if(response?.status == 200){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: response?.data?.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(`/categoryService/${id}`, { replace: true });
                setTimeout(() => {
                    window.location.reload()
                },1600)
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error...",
                text: error?.response?.data?.message,
                footer: '<a href="#">Why do I have this issue?</a>',
            })
        }
    
        console.log(data);
      };
    return (
        <div className="ml-[24px]">
        {/* <h1>This is add Service</h1> */}
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={
            {
              remember: true,
              name:data?.data?.attributes?.name,
              price:data?.data?.attributes?.price,
              min:data?.data?.attributes?.min,
              max:data?.data?.attributes?.max,
              subTitle:data?.data?.attributes?.subTitle,
            }
          }
          onFinish={handleEditService}
          //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex flex-col gap-[24px]">
            <div className="flex-1">
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Services Name
                  </span>
                }
                name="name"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Service!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="Add Services"
                  className="p-4 bg-[white]
                  rounded w-full 
                  justify-start 
                  border-2
                  border-[#318130]
                  mt-[12px]
                  items-center 
                  gap-4 inline-flex "
                  type="text"
                  initialValues={data?.data?.attributes?.name}
                  value={data?.data?.attributes?.name}
                  defaultValue={data?.data?.attributes?.name}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Price
                  </span>
                }
                name="price"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Price!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="Add Categories"
                  className="p-4 bg-[white]
                  rounded w-full 
                  justify-start 
                  border-2
                  border-[#318130]
                  mt-[12px]
                  items-center 
                  gap-4 inline-flex "
                  type="number"
                  defaultValue={data?.data?.attributes?.price}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Minimum Quantity
                  </span>
                }
                name="min"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Service!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="Add Categories"
                  className="p-4 bg-[white]
                  rounded w-full 
                  justify-start 
                  border-2
                  border-[#318130]
                  mt-[12px]
                  items-center 
                  gap-4 inline-flex "
                  type="number"
                  defaultValue={data?.data?.attributes?.min}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Maximum Quantity
                  </span>
                }
                name="max"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input quantity!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="Add Categories"
                  className="p-4 bg-[white]
                  rounded w-full 
                  justify-start 
                  border-2
                  border-[#318130]
                  mt-[12px]
                  items-center 
                  gap-4 inline-flex "
                  type="number"
                  defaultValue={data?.data?.attributes?.max}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Sub Title
                  </span>
                }
                name="subTitle"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Sub Title!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="Add Categories"
                  className="p-4 bg-[white]
                  rounded w-full 
                  justify-start 
                  border-2
                  border-[#318130]
                  mt-[12px]
                  items-center 
                  gap-4 inline-flex "
                  type="text"
                  defaultValue={data?.data?.attributes?.subTitle}
                />
              </Form.Item>
            </div>
          </div>
  
          <Button
            // onClick={handleAddMembership}
            htmlType="submit"
            className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer h-[60px] bg-[#318130] text-white rounded-lg"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
}

export default EdittedCategoryServices;
