import React from "react";
import { Button, Dropdown, Form, Input, Select } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const AddFacebook = () => {
  const data = [
    {
      key: "1",
      value: "socialMedia",
      label: "Social Media",
    },
    {
      key: "2",
      value: "video",
      label: "Video",
    },
    {
      key: "3",
      value: "corporate",
      label: "Corporate",
    },
  ];
  const navigate = useNavigate();

  const handleAddService = async (values) => {
    console.log(values);
    try {
      const response = await baseURL.post(`/service`, values, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage?.getItem("token")}`,
        },
      });

      console.log("cccccccccc",response);

      if (response.status == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
          navigate('/services', { replace: true });
          setInterval(() => {
            window.location.reload();
          },1600)
     
      }
    } catch (error) {
      console.log("Registration Fail", error?.response?.data?.message);
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div className="ml-[24px] overflow-auto">
      <div className="mt-[32px] flex items-center pb-3 gap-2 cursor-pointer">
        <MdOutlineKeyboardArrowLeft onClick={() => navigate("/services")} size={34} />
        <h1 className="text-[24px] text-primary font-semibold">Add Service</h1>
      </div>
      <div className="mt-[20px]">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={
            {
              // remember: true,
            }
          }
          onFinish={handleAddService}
          //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex flex-col gap-[24px]">
            <div className="flex-1">
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Service Title
                  </span>
                }
                name="name"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Title!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price Per Service"
                  className="p-4 bg-[white]
                rounded w-full 
                justify-start 
                border-2
                border-[#318130]
                mt-[12px]
                items-center 
                gap-4 inline-flex"
                  type="text"
                />
              </Form.Item>
            </div>
            {/* <div className="flex-1">
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Facebook
                  </span>
                }
                name="type"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your Price!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price Per Service"
                  className="p-4 bg-[white]
                rounded w-full 
                justify-start 
                border-2
                border-[#318130]
                mt-[12px]
                items-center 
                gap-4 inline-flex "
                  type="text"
                  defaultValue={"Facebook"}
                  readOnly
                />
              </Form.Item>
            </div> */}

            <div className="flex-1">
              <Form.Item
                name="type"
                label={
                  <span className=" text-[18px] ">Service Type</span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Service Type!",
                  },
                ]}
              >
                <Select
                  className="py-6 bg-[white]
                rounded w-full 
                justify-start 
                border-2
                border-[#318130]
                mt-[12px]
                items-center 
                gap-4 inline-flex"
                >
                  {data?.map((item) => (
                    <>
                      <Select.Option value={item?.value}>
                        {item?.label}
                      </Select.Option>
                    </>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[#222222] text-[18px] font-medium mb-[12px]"
              >
                * Services
              </label>

              {/* {features.map((value, index) => {
                return (
                  <Input
                    key={index}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder="Features"
                    className="p-4 bg-[white]
                  rounded w-full 
                  justify-start 
                  border-none
                  mt-[12px]
                  items-center 
                  gap-4 inline-flex outline-none focus:border-none"
                    type="text"
                  />
                );
              })} */}

              <Form.List
                name="description"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 2) {
                        return Promise.reject(
                          new Error("At least 2 passengers")
                        );
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        required={true}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message:
                                "Please input passenger's Feature or delete this field.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Add Facebook Services"
                            // style={{
                            //   width: '100%',
                            // }}
                            className="p-4 bg-[white]
                      rounded
                      justify-start w-[96%]
                      border-2 border-[#318130]
                      mt-[12px]
                      items-center 
                      gap-4 inline-flex"
                          />
                        </Form.Item>

                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        className="bg-[#318130] text-white h-[50px]"
                        onClick={() => add()}
                        style={{
                          width: "100%",
                        }}
                        icon={<PlusOutlined />}
                      >
                        Add Services
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
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
  );
};

export default AddFacebook;
