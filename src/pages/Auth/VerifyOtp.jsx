import { Button, Form, Input } from "antd";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useNavigate,  } from "react-router-dom";
import logo from "../../assets/logo2.png"
import otpImg from "../../assets/otv.png";
import { useState } from "react";
import OTPInput from "react-otp-input";


const VerifyOtp = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate()
  const handleReset = () => {
   
    
    // const email= localStorage.getItem("resetEmail");
    // if(email){
    //   dispatch(forgetPassword({email : email}));
    // }
    
  };
  const handleMatchOtp = ()=>{
    navigate('/auth/update-password')
  }
    return (
        <div className="mx-[310px] px-[115px] py-[120px] rounded-xl border-2 border-[#318130] shadow-2xl">
      <div className="flex gap-[120px]">
        <div className="flex items-center">
          <img src={otpImg} alt="" />
        </div>
        <div>

        <div className="w-[500px]">
        <img src={logo} alt="" />
        <div className="flex items-center gap-2">
            <Link to="/auth/forgot-password">
              {" "}
              <GoArrowLeft className="text-[32px]" />
            </Link>

            <h1 className="text-[32px] font-medium my-[24px]">
              Verify OTP
            </h1>
          </div>
        <p className=" text-16 mt-[24px] mb-[32px]">We'll send a verification code to your email. Check your inbox and enter the code here.</p>
        <div className="space-y-7 fit-content object-contain">
          <div className="flex items-center gap-2  outline-none focus:border-blue-400 object-contain w-[500px]">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                height: "60px",
                background: "transparent",
                width: "60px",
                border: "1px solid #318130",
                marginRight: "28px",
                outline: "none",
              }}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="flex justify-between w-[500px]">
            <p className="text-[white] text-[16px] font-medium">
              Didn’t receive the code?
            </p>
            <p
              onClick={handleReset}
              className="cursor-pointer text-[#318130] text-[16px] font-medium"
            >
              Resend
            </p>
          </div>

          <button  onClick={handleMatchOtp} className="block w-[500px] h-[56px] px-2 py-4 mt-2 text-white bg-gradient-to-r from-[#318130] to-[#318130] rounded-lg hover:bg-[#318130]">
            Verify
          </button>
        </div>
       </div>
     


        </div>
      </div>
      
        </div>
    );
}

export default VerifyOtp;
