import { IconLock } from '@tabler/icons-react';
import { Button, Form, Input } from 'antd';

import { HiOutlineMailOpen } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import resetPassword from '../../assets/forgotImg.png';
import logo from "../../assets/logo2.png"
import { GoArrowLeft } from "react-icons/go";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const onFinish = (values)=>{
        console.log(values);
        navigate("/auth/verify")
      }
    return (
        <div className="mx-[310px] px-[115px] py-[120px] rounded-xl border-2 border-[#318130] shadow-2xl">
      <div className="flex gap-[120px]">
        <div className="flex items-center">
          <img src={resetPassword} alt="" />
        </div>
        <div>

        <div className="w-[500px]">
        <img src={logo} alt="" />
        <div className="flex items-center gap-2">
            <Link to="/auth">
              {" "}
              <GoArrowLeft className="text-[32px]" />
            </Link>

            <h1 className="text-[32px] font-medium my-[24px]">
              Forgot password
            </h1>
          </div>
        <p className=" text-16 mt-[24px] mb-[32px]">Enter the email address associated with your account. We'll send you an OTP to your email. </p>
        <Form
          name="normal_login"
          // className="login-form"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            label={
                <span className=" text-[16px] font-medium">
                  Email
                </span>
              }
            
            rules={[
              {
                required: true,
                message: "Please Input Your Email!",
              },
            ]}
          >
            <Input
              size="large"  
              placeholder="Enter Your Email"
              name="email"
              prefix={
                <HiOutlineMailOpen
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
              required
              bordered={false}
            />
          </Form.Item> 
      
          <Form.Item>
            <Button
              htmlType="submit"
              className="block w-[500px] h-[56px] px-2 py-4 mt-2 text-white bg-gradient-to-r from-[#318130] to-[#318130] rounded-lg hover:bg-[#318130]"
              >
            
              Send OTP
            </Button>
            {/* <Link to="/dashboard"
              // type="primary"
              // htmlType="submit"
              className="block text-center w-[350px] h-[56px] px-2 py-4 mt-2 hover:text-white text-white bg-[#3BA6F6] rounded-lg"
            >
              Log In
            </Link> */}
          </Form.Item>
        </Form>
       </div>
     


        </div>
      </div>
      
        </div>
    );
}

export default ForgotPassword;
