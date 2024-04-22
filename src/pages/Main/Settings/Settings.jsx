import { Button, Form, Input, Modal, Switch } from "antd";
import logo from "../../../assets/logo.png";
import {
  IconChevronLeft,
  IconChevronRight,
  IconLock,
  IconMail,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { GoArrowLeft } from "react-icons/go";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { HiOutlineMailOpen } from "react-icons/hi";


const Settings = () => {
    const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [form] = Form.useForm();
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("admin"))
    setEmail(user?.email)
  },[])

  const settingsItem = [

    // {
    //   title: "Notification",
    //   path: "notification",
    // },
    {
      title: "Change password",
      path: "change-password",
    },
    
    {
        title: "Privacy Policy",
        path: "privacy-policy",
      },
      {
        title: "Terms & Conditions",
        path: "terms-and-conditions",
      },
      {
        title: "About us",
        path: "about-us",
      },
      {
        title: "Add Interest",
        path: "add-interest",
      },
      {
        title: "Refer Amount",
        path: "refer-amount",
      },
  ]; 


  const handleNavigate = (value) => {
    if (value === "notification") {
      return;
    }
    // else if (value === "hidden-fee") {
    //   return;
    // }
    // else if (value === "hidden-fee-percentage") {
    //   setModelTitle("Set hidden fee percentage");
    //   setIsModalOpen(true);
    // }
    else if (value === "change-password") {
      setModelTitle("Change password");
      setIsModalOpen(true);
    } else {
      navigate(`/settings/${value}`);
    }
  };

  const handleChangePassword = async (values) =>{
    console.log(values);
    const data = {
      oldPassword: values?.oldPassword,
      newPassword: values?.newPassword,
    };
    try {
      const response = await baseURL.post(`/auth/change-password`, data);

      console.log(response.data);
      if (response.data.code == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/settings`);
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
}  
const handleVerifyOtp = async (e) =>{
  e.preventDefault();
  try {
    const response = await baseURL.post(`/auth/verify-email`, {
      email: email,
      oneTimeCode: otp,
    });

    console.log(response.data);
    const token = response?.data?.data?.attributes.tokens?.access.token;
    console.log(token);
    if (response.data.code == 200) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", response?.data?.data?.attributes?.user);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      // navigate(`/set_new_password/${email}`);
      setModelTitle("Reset Password");
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
}
const handleResetPassword = async (values) =>{
    console.log(values);
    const data = { email: email, password: values?.password };
    console.log(data);
    try {
      const response = await baseURL.post(`/auth/reset-password`, data);

      console.log(response.data);
      if (response.data.code == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalOpen(false);
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
}
const handleForgetPassword = async (values) =>{
    console.log(values);
    try {
      const response = await baseURL.post(`/auth/forgot-password`, values);
      if (response.data.code == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setModelTitle("Verify OTP");
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
}
    return (
        <div className="ml-[24px] mt-[60px]">
        {settingsItem.map((setting, index) => (
          <div
            key={index}
            className="border border-[#318130] py-4 mb-2 px-4 text-sm rounded-lg bg-[#F7F7F7] text-[#318130] flex items-center justify-between cursor-pointer"
            onClick={() => handleNavigate(setting.path)}
          >
            <h2>{setting.title}</h2>
            <h2>
              {setting.path === "notification" ? (
                <Switch
                  defaultChecked
                  onChange={onChange}
                  // style={{ background: "#0071e3" }}
                />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </h2>
          </div>
        ))}
        <Modal
          title={
            <div
              onClick={() => setIsModalOpen(false)}
              // style={{fontFamily:'Aldrich'}}
              className="flex items-center cursor-pointer text-white px-[60px] pt-[60px]"
            >
               
              <div className="object-contain">
                <img src={logo} alt="" />
                <div className="flex items-center gap-2">
                  <Link to="/settings">
                    {" "}
                    <GoArrowLeft className="text-[24px] text-white" />
                  </Link>
  
                  <h1 className="text-[24px] text-white font-medium my-[24px]">
                    {modelTitle}
                  </h1>
                </div>
              </div>
            </div>
          }
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          footer={[]}
        >
         
  
          {modelTitle === "Change password" && (
            <div className="px-[60px] pb-[60px]">
              <p className="text-[14px] mb-[14px] text-[white]">
                Your password must be 8-10 character long.{" "}
              </p>
              <Form
                form={form}
                name="dependencies"
                autoComplete="off"
                style={{
                  maxWidth: 600,
                }}
                layout="vertical"
                className="space-y-4 fit-content object-contain"
                onFinish={handleChangePassword}
              >
                <Form.Item
                  name="oldPassword"
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
                    placeholder="Enter Your old Password"
                    name="oldPassword"
                    prefix={
                      <IconLock
                        className="mr-2 bg-white  rounded-full p-[6px]"
                        size={28}
                        color="#318130"
                      />
                    }
                    className="p-4 bg-[#FFE7EA4F]
                    rounded w-full 
                    justify-start 
                    mt-[12px]
                    text-white 
                     outline-none focus:border-none border-[#FA1131]"
                    bordered={false}
                  />
                </Form.Item>
  
                <Form.Item
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    // onChange={handleChange}
                    placeholder="Set Your New Password"
                    name="newPassword"
                    prefix={
                      <IconLock
                        className="mr-2 bg-white rounded-full p-[6px]"
                        size={28}
                        color="#318130"
                      />
                    }
                    className="p-4 bg-[#FFE7EA4F]
                    rounded w-full 
                    justify-start 
                    mt-[12px]
                    text-white 
                     outline-none focus:border-none border-[#FA1131]"
                    bordered={false}
                  />
                </Form.Item>
  
                {/* Field */}
                <Form.Item
                  name="reenterPassword"
                  dependencies={["newPassword"]}
                  rules={[
                    {
                      required: true,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The new password that you entered do not match!"
                          )
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
                    className="p-4 bg-[#FFE7EA4F]
                    rounded w-full 
                    justify-start 
                    mt-[12px]
                    text-white 
                     outline-none focus:border-none border-[#FA1131]"
                    bordered={false}
                  />
                </Form.Item>
                <p className=" text-[#FA1131] font-medium">
                  <button onClick={() => setModelTitle("Forgot password")}>
                    Forgot Password
                  </button>
                </p>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    className="block w-full h-[56px] px-2 py-4 mt-2 text-white bg-[#318130] rounded-lg"
                  >
                    Update password
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
  
          {modelTitle === "Forgot password" && (
            <div  className="px-[60px] pb-[60px]">
              <Form
                initialValues={{
                  remember: true,
                }}
                onFinish={handleForgetPassword}
                className="space-y-7 fit-content object-contain"
              >
                <div className="">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter your email"
                      name="email"
                      prefix={
                        <HiOutlineMailOpen
                          className="mr-2 bg-white rounded-full p-[6px]"
                          size={28}
                          color="#318130"
                        />
                      }
                      className="p-4 bg-[#FFE7EA4F]
                      rounded w-full 
                      justify-start 
                      mt-[12px]
                      text-white 
                       outline-none focus:border-none border-[#FA1131]"
                      bordered={false}
                    />
                  </Form.Item>
                </div>
                <Form.Item>
                  {/* <Button
                    type="primary"
                    htmlType="submit"
                    className="block w-full h-[56px] px-2 py-4 mt-2 text-white bg-[#FA1131] rounded-lg"
                  >
                    Send OTP
                  </Button> */}
                  <Button
                   
                    htmlType="submit"
                    className="block w-full h-[56px] px-2 py-4 mt-2 text-white bg-[#318130] rounded-lg"
                  >
                    Send OTP
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
  
          {modelTitle === "Verify OTP" && (
            <div className="px-[60px] pb-[60px]">
              <form onSubmit={handleVerifyOtp}>
                <p className="text-[16px] mb-[14px] text-[white]">
                  Please enter your email address to recover your account.
                </p>
                <div className="">
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputStyle={{
                        height: "50px",
                        background: "transparent",
                        width: "50px",
                        border: "1px solid #318130",
                        marginRight: "20px",
                        outline: "none",
                        color:"white"
                      }}
                    renderInput={(props) => <input {...props} />}
                  />
                  <p className="flex items-center justify-between mt-2 mb-6">
                    Didn’t receive code?
                    <button className="font-medium text-[#318130]">Resend</button>
                  </p>
                </div>
  
                <button
                  type="submit"
                  className="bg-[#318130]
              w-full
              text-white mt-5 py-3 rounded-lg duration-200 h-14"
                >
                  Verify
                </button>
              </form>
            </div>
          )}
  
          {modelTitle === "Reset Password" && (
            <div className="px-[60px] pb-[60px]">
                     <Form
              form={form}
              name="dependencies"
              autoComplete="off"
              style={{
                maxWidth: 600,
              }}
              layout="vertical"
              className="space-y-4 fit-content object-contain"
              onFinish={handleResetPassword}
            >
              <Form.Item
                name="enter_password"
                rules={[
                  {
                    required: true,
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
                  className="p-4 bg-[#FFE7EA4F]
                      rounded w-full 
                      justify-start 
                      mt-[12px]
                      text-white 
                       outline-none focus:border-none border-[#FA1131]"
                  bordered={false}
                />
              </Form.Item>
  
              {/* Field */}
              <Form.Item
                name="password"
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
                        new Error(
                          "The new password that you entered do not match!"
                        )
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
                  className="p-4 bg-[#FFE7EA4F]
                  rounded w-full 
                  justify-start 
                  mt-[12px]
                  text-white 
                   outline-none focus:border-none border-[#FA1131]"
                  bordered={false}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  
                  htmlType="submit"
                  className="block w-full h-[56px] px-2 py-4 mt-2 text-white bg-[#318130] rounded-lg"
                >
                  Update password
                </Button>
              </Form.Item>
            </Form>
            </div>
           
          )}
        </Modal>
        </div>
    );
}

export default Settings;
