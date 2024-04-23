import React from 'react';
import { Button, Form, Input } from "antd";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import baseURL from '../../../config';
import Swal from 'sweetalert2';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const AddCategory = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    const handleAddService = async (values) => {
        const data = {
            ...values,
            serviceId: id
        }
        try {
            const response = await baseURL.post(`/service/category`, data, {
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
                navigate('/services', { replace: true });
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
    }
    return (
        <div>
            <h1>Add Category</h1>
            <div className="ml-[24px] overflow-auto">
        <div className="mt-[32px] flex items-center pb-3 gap-2 cursor-pointer">
          <MdOutlineKeyboardArrowLeft
            onClick={() => navigate("/")}
            size={34}
          />
          <h1 className="text-[24px] text-primary font-semibold">
          Add Category
          </h1>
        </div>
        <div className="mt-[20px]">
          <Form
            name="basic"
            labelCol={{ span: 22 }}
            wrapperCol={{ span: 40 }}
            layout="vertical"
            initialValues={{
              // remember: true,
            }}
            onFinish={handleAddService}
            //   onFinishFailed={handleCompanyInformationFailed}
            autoComplete="off"
          >
            <div className="flex flex-col gap-[24px]">
            <div className="flex-1">
                <Form.Item
                  label={
                    <span className="text-[#222222] text-[18px] font-medium">
                      Add Category
                    </span>
                  }
                  name="name"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input Categories!",
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
            </div>
        </div>
    );
}

export default AddCategory;
