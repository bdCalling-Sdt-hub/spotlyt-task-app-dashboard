import { FaFacebook } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";


const ViewInstagram = () => {
    return (
        <div>
        {/* <h1 className="text-3xl text-center text-[#318130]">View Facebook</h1> */}
        <div className="w-[80%] mx-auto border-2 rounded-lg border-[#318130]">
            <h1 className="text-3xl bg-[#318130;] p-4 text-center text-white">{`Organic Social Media Advertising`}</h1>
            <div className="px-4 bg-[#EAF2EA]">
                <h1 className="py-2 text-2xl text-[#318130;] font-medium">Categories:</h1>
                <h1 className="flex gap-2 items-center text-xl bg-[#318130;] w-[30%] py-2 px-4 text-white justify-center font-bold rounded-md"><IoLogoInstagram /> Instagram</h1>
                <div>
                    <h1 className="py-2 text-2xl text-[#318130] font-medium">Services:</h1>
                    <ul className="py-1 ml-5">
                        <li className="my-1 text-xl flex items-center gap-2"><FaDotCircle className="text-[15px] text-[#318130;]" /> Instagram</li>
                        <li className="my-1 text-xl flex items-center gap-2"><FaDotCircle className="text-[15px] text-[#318130;]" /> Instagram</li>
                        <li className="my-1 text-xl flex items-center gap-2"><FaDotCircle className="text-[15px] text-[#318130;]" /> Instagram</li>
                    </ul>
                </div>
            </div>
            <div className="flex rounded-b-lg justify-around py-2 gap-2 px-5 bg-[#EAF2EA]">
                <p className="text-xl w-full px-5 py-2  bg-[red] rounded-lg text-white font-bold text-center cursor-pointer">Delete</p>
                <p className="text-xl px-5 w-full py-2 bg-[#43a841] rounded-lg text-white font-bold text-center cursor-pointer">Edit Service</p>
            </div>
        </div>
    </div>
    );
}

export default ViewInstagram;
