import { Button, DatePicker, Form, Input, Upload, message } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { LuImagePlus } from "react-icons/lu";
// import styles from "./EditProfile.module.css";
// import baseURL from "../../../config";
import Swal from "sweetalert2";
import { useGetUserQuery } from "../../../redux/features/getSingleUser";
import baseURL from "../../../config";
// import { useGetAllUserQuery } from "../../../redux/features/AllUser/getAllUser";
// import { useGetUserQuery } from "../../../redux/features/AllUser/getSingleUser";
// import Loading from "../../../components/Loading/Loading";

const EditProfileInformation = () => {
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const { data, isLoading } = useGetUserQuery(id);
    const user = data?.data?.attributes;
    console.log(user);
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
    const [imageUrl, setImageUrl] = useState(`${baseUrl}${user?.image?.url}`);
    //  const [imageUrl, setImageUrl] = useState();
    const [fileList, setFileList] = useState([]);
    useEffect(()=>{
      setImageUrl(`${baseUrl}${user?.image?.url}`)
      // setPhoneNumber(user?.phoneNumber)
    },[data])
    console.log(phoneNumber);
    // if (isLoading) {
    //   return <Loading />;
    // }
    const props = {
        action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
        listType: "picture",
        showUploadList: false, // Disable the default upload list
        beforeUpload(file) {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const img = document.createElement("img");
              img.src = reader.result;
              img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                ctx.fillStyle = "red";
                ctx.textBaseline = "middle";
                ctx.font = "33px Arial";
                ctx.fillText("", 20, 20);
                canvas.toBlob((result) => {
                  resolve(result);
                  setImageUrl(URL.createObjectURL(result));
                  // console.log(result);// Update the image URL
                });
              };
            };
          });
        },
      };
      const handleUpdateProfile = async (values) => {
        const updateProfile = {
          ...values,
          image: fileList[0]?.originFileObj,
          // dateOfBirth: `${values.dateOfBirth.$D}-${values.dateOfBirth.$M + 1}-${
          //   values.dateOfBirth.$y
          // }`,
          phoneNumber,
        };
        console.log(updateProfile);
        const formData = new FormData();
        formData.append("fullName", updateProfile?.fullName);
        // formData.append("email", updateProfile?.email);
        formData.append("phoneNumber", updateProfile?.phoneNumber);
        // formData.append("dateOfBirth", updateProfile?.dateOfBirth);
        if (fileList[0]?.originFileObj) {
          formData.append("image", fileList[0]?.originFileObj);
        }
        try {
          const response = await baseURL.patch(`/users/${id}`, formData);
          if (response.data.code == 200) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            localStorage.removeItem("admin");
            localStorage.setItem(
              "admin",
              JSON.stringify(response?.data?.data?.attributes)
            );
            console.log(response.data);
            // navigate('/dashboard/', { replace: true });
            setTimeout(()=>window.location.reload() , 1700);
            
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
        console.log(updateProfile);
      };
    return (
        <div >
      <div
        onClick={() => navigate("/profile-information")}
        className="flex cursor-pointer  items-center ml-[24px] mt-[40px] mb-[63px]"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
        <h1 className="text-[20px] font-medium">Edit Profile</h1>
      </div>
      <div className="ml-[24px] bg-white p-[36px] rounded-xl shadow-2xl">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={handleUpdateProfile}
        >
          <div className="flex ">
            <div className="w-[33%] ml-[24px] flex flex-col justify-center items-center gap-[30px]">
              <div className="w-[242px] h-[242px] relative rounded-full flex flex-col justify-center items-center">
                {/* <img
            className="w-[242px] h-[242px] rounded-full flex justify-center items-center backdrop-brightness-50"
            src={imageUrl}
            alt=""
          /> */}
                <Upload
                  {...props}
                  name="avatar"
                  listType="picture-circle"
                //   className={styles.avatarUploader}
                //   fileList={fileList}
                  // className={styles.ant-upload}
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                //   beforeUpload={beforeUpload}
                  onChange={({ fileList: newFileList }) => {
                    // console.log(fileList?.fileList[0].originFileObj);
                    setFileList(newFileList);
                  }}
                >
                  <img
                    className="w-[242px] h-[242px] rounded-full flex justify-center items-center opacity-50"
                    src={imageUrl}
                    alt=""
                  />

                  <Button
                    className="border-none text-[16px] text-[#3BA6F6] bg-[white] absolute text-primary hover:text-primary"
                    icon={<LuImagePlus size={17} className="text-[#3BA6F6]" />}
                  >
                    Change Picture
                  </Button>
                </Upload>
                <div>
                  {/* <Upload
              {...props}
              onChange={(info) => {
                if (info.file.status !== "uploading") {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === "done") {
                  message.success(
                    `${info.file.name} file uploaded successfully`
                  );
                } else if (info.file.status === "error") {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }}
            >
              <Button
                className="border-none text-[16px] text-[#3BA6F6] bg-[white] absolute text-primary hover:text-primary"
                icon={<LuImagePlus size={17} className="text-[#3BA6F6]"/>}
              >
                Change Picture
              </Button>
          </Upload> */}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[20px] text-[#4E4E4E]">
                  {user?.role?.toUpperCase()}
                 
                </p>
                <h1 className="text-[#222222] text-[30px] font-medium">
                  {user?.fullName?.toUpperCase()}
                
                </h1>
              </div>
            </div>

            <div className="flex-1 w-[66%]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex gap-[25px]">
                  <div className="flex-1">
                    <Form.Item
                      label={
                        <span className="text-[#222222] text-[18px] font-medium">
                          Name
                        </span>
                      }
                      name="fullName"
                      className="flex-1"
                      rules={[
                        {
                          required: true,
                          message: "Please input your First Name!",
                        },
                      ]}
                      initialValue={user?.fullName}
                    >
                      <Input
                        placeholder="Name"
                        className="p-4 bg-[#F7F7F7]
                         rounded w-full 
                         justify-start 
                         border-none
                         mt-[12px]
                         items-center 
                         gap-4 inline-flex
                          outline-none
                           focus:border-none
                            focus:bg-[#F7F7F7]
                             hover:bg-[#F7F7F7]"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="flex-1">
                  <Form.Item
                    label={
                      <span className="text-[#222222] text-[18px] font-medium">
                        Email
                      </span>
                    }
                    name="email"
                    className="flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                    initialValue={user?.email}
                  >
                    <Input
                      placeholder="Email"
                      disabled
                      className="p-4 bg-[#F7F7F7]
              mt-[12px]
               rounded w-full 
               justify-start 
               border-none
               items-center 
               gap-4 inline-flex outline-none focus:border-none focus:bg-[#F7F7F7] hover:bg-[#F7F7F7]"
                    />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor=""
                    className="text-[#222222] text-[18px] font-medium mb-[12px]"
                  >
                    Phone Number
                  </label>

                  <PhoneInput
                    placeholder="Enter phone number"
                    international
                    countryCallingCodeEditable={false}
                    style={{
                      marginTop: "12px",
                    }}
                    defaultCountry="US"
                    value={phoneNumber?.toString()}
                    onChange={setPhoneNumber}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            htmlType="submit"
            className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer h-[60px] bg-[#318130] text-white rounded-lg"
          >
            Update profile
          </Button>
        </Form>
      </div>
    </div>
    );
}

export default EditProfileInformation;
