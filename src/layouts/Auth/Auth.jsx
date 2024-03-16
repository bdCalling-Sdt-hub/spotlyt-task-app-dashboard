import { Outlet } from "react-router-dom";


const Auth = () => {
  return (
    <div className="bg-[white] min-h-screen flex justify-center items-center">
      <Outlet/>
    </div>
  );
};

export default Auth;
