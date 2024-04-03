import { Form, Input, Button } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import baseURL from "../../../config";

const EditTramsAndCondition = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    const [content, setContent] = useState("");
    
  
    const handleUpdate = async ()=>{
      console.log(content);
      try {
        const response = await baseURL.post(`/terms`, {
          content
        },
        {
          headers: {
            "Content-Type": "application/json",
            authentication: `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
        if(response?.data?.code === 201){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: response?.data?.message,
            showConfirmButton: false,
            timer: 1500,
          });
  
        }
        navigate("/settings/privacy-policy")
        console.log(response);
      }catch(error){
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Try Again...",
          text: error?.response?.data?.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        })
      }
    } 
  
    return (
        <div className="relative ml-[24px]">
      <div className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft
          className=""
          onClick={() => navigate("/settings/terms-and-conditions")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">
          Edit Terms And Conditions
        </h1>
      </div>
      <div className="text-wrap w-full">
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
        className="text-wrap"
        style={{ width: '100%' }} 
      />
      <Button
        onClick={handleUpdate}
        block
        // style={{
        //   marginTop: "30px",
        //   backgroundColor: "#318130",
        //   color: "#fff",
        //   height: "50px",
        // }}
        className="mt-[30px] bg-[#318130] text-[white] h-[50px] hover:text-white "
      >
        
        Update
        </Button>
      </div>
      </div>
    );
}

export default EditTramsAndCondition;
