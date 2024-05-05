import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useGetAboutQuery } from "../../../redux/features/getAboutApi";

const AboutUs = () => {
  const {data,isLoading,isSuccess} = useGetAboutQuery();
    const navigate = useNavigate()
    const content = data?.data?.attributes[0]?.content
    console.log(data);
    console.log(content);
    return (
        <div className="relative ml-[24px] ">
        <div className=" mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
       <MdOutlineKeyboardArrowLeft
        className="text-black"
      onClick={() => navigate("/settings")}
      size={34}
    />
        <h1 className="text-[24px] text-primary font-semibold text-black">
          About Us
        </h1>
      </div>
    
      <div className=" text-justify mt-[24px] max-h-[80%] overflow-y-auto border-2 border-[#318130] p-2 text-black " dangerouslySetInnerHTML={{ __html: content }}>
      </div>
     
    
        
      
    <Link to='/settings/edit-about-us' className="absolute text-center bottom-[-60px] bg-gradient-to-r from-[#318130] via-[#318130] to-[#318130] 
        text-white  mt-5 py-3 rounded-lg w-full text-[18px] font-medium  duration-200">Edit</Link>
        </div>
    );
}

export default AboutUs;
