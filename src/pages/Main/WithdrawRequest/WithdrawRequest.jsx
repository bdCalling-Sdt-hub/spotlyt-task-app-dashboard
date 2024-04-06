import { ConfigProvider, DatePicker, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BsInfoCircle } from "react-icons/bs";
import { useGetAllWithdrawalQuery } from '../../../redux/features/getAllWithdrawalApi';
import baseURL from '../../../config';
import Swal from 'sweetalert2';
import Loading from '../../../components/Loading';

const WithdrawRequest = () => {
  const [startDate,setStartDate] =  useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [client, setClient] = useState();
    const {data,isLoading,isSuccess} = useGetAllWithdrawalQuery({currentPage})
    const handleView = (value) => {
        setClient(value);
        console.log(value)
        setIsModalOpen(true);
      };

      if(isLoading){
        return <Loading/>
      }
      const url = import.meta.env.VITE_API_URL
      const list = data?.data?.attributes?.results;
      console.log(list);
    const columns = [
        {
          title: "#SI",
          dataIndex: "si",
          key: "si",
          render: (text, record, index) => currentPage == 1 ? index + 1 : (index + 1) + ((currentPage-1)*10),
        },
        {
          title: "Employee Name",
          dataIndex: "name",
          key: "name",
          render: (_, record) => (
            <div className="flex gap-2 items-center">
              <img
                className="w-[34px] h-[34px] rounded-full"
                src={`${url}${record?.userId?.image?.url}`}
                alt=""
              />
              <p className="font-medium">{record?.userId?.fullName}</p>
            </div>
          ),
        },
        // {
        //   title: 'Phone',
        //   dataIndex: 'phone',
        //   key: 'phone',
        // },
        {
          title: "Bank Name",
          dataIndex: "bankName",
          key: "bankName",
        },
        {
          title: "A/C Type",
          dataIndex: "accountType",
          key: "accountType",
        },
        {
            title: "Withdraw Amount",
            key: "withdrawAmount",
            dataIndex: "withdrawAmount",
            // render:(_,record)=>(<p>{record?.withdrawAmount}</p>)
            render: (_, record) => (
              <div className="flex gap-2 items-center">
                <p className="font-medium">{record?.withdrawalAmount}</p>
              </div>
            ),
          },
          {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render:(_,record)=>(<>
                <p className={`text-green-500 font-bold`}>
                  {record?.status}
                </p>
            </>)
  
          },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
             
                <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[#318130] cursor-pointer" />
              
              {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
            </Space>
          ),
        },
      ];
      console.log(data);
      // const data = [
      //   {
      //     key: "1",
      //     si: 1,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //       key: "2",
      //       si: 2,
      //       name: "John Brown",
      //       img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //       task: "Request Facebook Like ",
      //       date: "02-24-2024",
      //       email: "ahad.aiman@gmail.com",
      //       country: "New York",
      //       status:"Approve",
      //       nidNumber: 50041231541,
      //       bankName:"International Bank",
      //       accountType:"Saving",
      //       withdrawAmount:"500"
      //     },
      //     {
      //       key: "3",
      //       si: 3,
      //       name: "John Brown",
      //       img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //       task: "Request Facebook Like ",
      //       date: "02-24-2024",
      //       email: "ahad.aiman@gmail.com",
      //       country: "New York",
      //       status:"Approve",
      //       nidNumber: 50041231541,
      //       bankName:"International Bank",
      //       accountType:"Saving",
      //       withdrawAmount:"500"
      //     },
      //   {
      //     key: "4",
      //     si: 4,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //     key: "5",
      //     si: 5,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //     key: "6",
      //     si: 6,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //     key: "7",
      //     si: 7,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //     key: "8",
      //     si: 8,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //     key: "9",
      //     si: 9,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //     key: "10",
      //     si: 10,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //     key: "11",
      //     si: 11,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      //   {
      //     key: "12",
      //     si: 12,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     country: "New York",
      //     status:"Approve",
      //     nidNumber: 50041231541,
      //     bankName:"International Bank",
      //     accountType:"Saving",
      //     withdrawAmount:"500"
      //   },
      // ];
      // const onChange = (date, dateString) => {
      //   console.log(date, dateString);
      // };
      const handleApprove = async(id) =>{
        console.log(id);


        try {
          const response = await baseURL.post(`/withdrawal/${id}`,{},
          {
            headers: {
              "Content-Type": "application/json",
              authentication: `Bearer ${localStorage.getItem("token")}`,
            }
          }
        );
        console.log(response);
        if(response?.data?.code === 200){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: response?.data?.message,
            showConfirmButton: false,
            timer: 1500,
          });
         
        }
        window.location.reload();

        } catch (error) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: error?.response?.data?.message,
            showConfirmButton: false,
            timer: 1500,
          })
        }
       
      }
      const handleCancel = async (id) => {
        try {
          const response = await baseURL.patch(`/withdrawal/${id}`,{},
          {
            headers: {
              "Content-Type": "application/json",
              authentication: `Bearer ${localStorage.getItem("token")}`,
            }
          }
        );
        // console.log(response);
        if(response?.data?.code === 200){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: response?.data?.message,
            showConfirmButton: false,
            timer: 1500,
          });
         
        }
        window.location.reload();

        } catch (error) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: error?.response?.data?.message,
            showConfirmButton: false,
            timer: 1500,
          })
        }
      }
      const handleChangePage = (page) => {
        setCurrentPage(page);
        console.log(page);
      };
    return (
        <div className=" ml-[24px]">
        <div className=" flex justify-between items-center">
          <h1 className="text-[30px] font-medium">Withdrawal Request</h1>
          {/* <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="month"
            suffixIcon
          /> */}
        </div>
        <div className=" rounded-t-lg mt-[24px] shadow-2xl">
          <div className="flex py-[22px] mx-[20px] justify-between items-center">
            <p className=" text-[24px] font-medium">Withdrawal Reques List</p>
          </div>
          <ConfigProvider
    theme={{
      components: {
        Table: {
          headerBg: "#318130",
          headerColor:"white",
          headerBorderRadius: 2,
        },
      },
    }}
  >
  <Table
            pagination={{
              position: ["bottomCenter"],
              current: currentPage,
              pageSize:data?.data?.attributes?.limit,
              total:data?.data?.attributes?.totalResults,
              showSizeChanger: false,
              onChange: handleChangePage,
            }}
            columns={columns}
            dataSource={list}
          />
          </ConfigProvider>
        </div>
        <Modal
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          footer={[]}
          closeIcon
        >
        <div>
          <div className="flex justify-center items-center gap-2 flex-col border-b pt-10 border-b-gray-300">
            <img className="w-[140px] h-[140px] rounded-full " src={`${url}${client?.userId?.image?.url}`} alt="" />
            <p className="text-white text-[16px] mb-[16px]">{client?.userId?.fullName}</p>
          </div>
          <div className="p-[20px] text-white">
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>
                {client?.createdAt?.split("T")[0]}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Employee Name:</p>
              <p>
                {client?.userId?.fullName}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Bank Name:</p>
              <p>
                {client?.bankName}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>A/C Type:</p>
              <p>
                {client?.accountType}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Withdraw Amount:</p>
              <p>
                {client?.withdrawalAmount
}
              </p>
            </div>
            <div className="flex justify-between py-[16px]">
              <p>Earned Amount:</p>
              <p>
                R {client?.userId?.rand}
                
              </p>
            </div>
      
      {
        client?.status === "Pending" ? <div className="flex justify-center gap-10 items-center pt-[16px]">
        <p onClick={()=>handleApprove(client?._id)} className="px-[55px] cursor-pointer py-[10px] bg-[#318130] rounded-lg">
          Approve
        </p>
        <p onClick={()=>handleCancel(client?._id)} className="px-[55px] cursor-pointer py-[10px] text-[#318130] bg-[white] border-2 border-[#318130] rounded-lg">
         Cancel
        </p>
      </div> : ""
      }
           
          </div>
        </div>
        </Modal>
        </div>
    );
}

export default WithdrawRequest;
