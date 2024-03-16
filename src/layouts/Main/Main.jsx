
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';


const Main = () => {
    return (
        <div className="flex p-[32px] min-h-screen">
            <Sidebar/>
      <div className="flex-1">
        <div className="ml-[24px]">
             <Header/>
        </div>
        <div className=''>

        <Outlet/>
        </div>
      </div>
    </div>
    );
}

export default Main;