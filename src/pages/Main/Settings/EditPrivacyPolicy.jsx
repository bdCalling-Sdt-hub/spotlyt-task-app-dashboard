
import { Form, Input, Button } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const EditPrivacyPolicy = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  

  const handleUpdate = ()=>{
    
  } 

  return (
    <div className="relative ml-[24px]">
      <div className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
        <MdOutlineKeyboardArrowLeft
          className=""
          onClick={() => navigate("/settings/privacy-policy")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">
          Edit Privacy Policy
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
        style={{
          marginTop: "30px",
          backgroundColor: "#318130",
          color: "#fff",
          height: "50px",
        }}
      >
        Update
        </Button>
      </div>
    </div>
  );
};

export default EditPrivacyPolicy;