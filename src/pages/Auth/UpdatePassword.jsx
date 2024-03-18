import { Button, Form, Input } from "antd";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png"
import updatePassImg from "../../assets/updatePassword.png";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { IconLock } from "@tabler/icons-react";
const UpdatePassword = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        navigate('/auth/update-password')
      };
    return (
        <div className="mx-[310px]  px-[115px] py-[120px] rounded-xl border-2 border-[#318130] shadow-2xl">
      <div className="flex gap-[120px]">
        <div className="flex items-center">
          <img src={updatePassImg} alt="" />
        </div>
        <div>

        <div className="w-[500px]">
        <img src={logo} alt="" />
        <div className="flex  items-center gap-2">
            <Link to="/auth/forgot-password">
              {" "}
              <GoArrowLeft className="text-[32px]"  />
            </Link>

            <h1 className="text-[32px] font-medium my-[24px]">
              Update Password
            </h1>
          </div>
        <Form
          form={form}

          name="dependencies"
          autoComplete="off"
          style={{
            maxWidth: 600,
          }}
          layout="vertical"
          className="space-y-4 fit-content object-contain"
          onFinish={onFinish}
        >
        

          <Form.Item
            name="enter_password"
            label={
                <span className="text-[16px] font-medium">
                  New Password
                </span>
              }
            rules={[
              {
                required: true,
                message: "Please Input Your Password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              // onChange={handleChange}
              placeholder="Set your password"
              name="set_password"
              prefix={
                <IconLock
                  className="mr-2 bg-white rounded-full p-[6px]"
                  size={28}
                  color="#318130"
                />
              }
              style={{
                borderBottom: "2px solid #4E4E4E",
                height: "52px",
                background: "#F6F6F6",
                outline: "none",
                marginBottom: "20px",
              }}
              bordered={false}
            />
          </Form.Item>

          {/* Field */}
          <Form.Item
            name="re_enter_password"
            label={
                <span className=" text-[16px] font-medium">
                 Confirm Password
                </span>
              }
           
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("enter_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Re-enter password"
              name="re_enter_password"
              prefix={
                <IconLock
                  className="mr-2 bg-white rounded-full p-[6px]"
                  size={28}
                  color="#318130"
                />
              }
              style={{
                borderBottom: "2px solid #4E4E4E",
                height: "52px",
                background: "#F6F6F6",
                outline: "none",
                marginBottom: "20px",
              }}
              bordered={false}
            />
          </Form.Item>
          <Form.Item>
            <Button
              
              htmlType="submit"
              className="block w-[500px] h-[56px] px-2 py-4 mt-2 text-white bg-gradient-to-r from-[#318130] to-[#318130] rounded-lg hover:bg-[#318130]"
            >
              Confirm
            </Button>
          </Form.Item>
        </Form>
       </div>
     


        </div>
      </div>
      
        </div>
    );
}

export default UpdatePassword;
