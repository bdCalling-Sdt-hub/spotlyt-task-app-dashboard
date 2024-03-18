import { Form, Input, Button } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const EditAboutUs = () => {
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
          onClick={() => navigate("/settings/about-us")}
          size={34}
        />
        <h1 className="text-[24px] text-primary font-semibold">
          Edit About Us
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
        className="mt-[30px] bg-[#318130] text-[white] h-[50px] hover:text-white "
      >
        Update
        </Button>
      </div>
    </div>
    );
}

export default EditAboutUs;
