import { ConfigProvider, DatePicker, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BsInfoCircle } from "react-icons/bs";
import { useGetVeryfyRequestListQuery } from '../../../redux/features/getVeryfyRequestListApi';
import baseURL from '../../../config';
import Swal from 'sweetalert2';
import Loading from '../../../components/Loading';
import { usePostNidApproveMutation } from '../../../redux/features/postNidApproveApi';
import { usePostNidRejectMutation } from '../../../redux/features/postNidRejectApi';


const VerifyRequest = () => {
  const {data:veryfyRequest,isLoading,isSuccess} = useGetVeryfyRequestListQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [client, setClient] = useState();
    const [setNidApprove,res] = usePostNidApproveMutation();
    const [setNidReject,resReject] = usePostNidRejectMutation()
    const handleView = (value) => {
        setClient(value);
        console.log(value)
        setIsModalOpen(true);
      };
      if(isLoading){
        return <Loading/>
      }
      const url = import.meta.env.VITE_API_URL

const list = veryfyRequest?.data?.attributes;
console.log(list);
    const columns = [
        {
          title: "#SI",
          dataIndex: "si",
          key: "si",
          render: (text, record, index) => index + 1,
        },
        {
          title: "Employee Name",
          dataIndex: "name",
          key: "name",
          render: (_, record) => (
            <div className="flex gap-2 items-center">
              <img
                className="w-[34px] h-[34px] rounded-full"
                src={`${url}${record?.image?.url}`}
                alt=""
              />
              <p className="font-medium">{record?.fullName}</p>
            </div>
          ),
        },
        // {
        //   title: 'Phone',
        //   dataIndex: 'phone',
        //   key: 'phone',
        // },
        {
          title: "Employee NID Number",
          dataIndex: "nidNumber",
          key: "nidNumber",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
            title: "Full Address",
            key: "address",
            dataIndex: "address",
            render:(_,record)=>(
             <p> 
             { record?.address ? record?.address : "N/A"}
            </p>
            )
          },
        {
          title: "Date",
          key: "date",
          dataIndex: "date",
          render: (_, record) => (
            <div>
              <p className="font-medium">{record?.createdAt.split("T")[0]}</p>
            </div>
          ),
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

      // const data = [
      //   {
      //     key: "1",
      //     si: 1,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //       key: "2",
      //       si: 2,
      //       name: "John Brown",
      //       img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //       task: "Request Facebook Like ",
      //       date: "02-24-2024",
      //       email: "ahad.aiman@gmail.com",
      //       address: "New York",
      //       nidNumber: 50041231541,
      //     },
      //     {
      //       key: "3",
      //       si: 3,
      //       name: "John Brown",
      //       img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //       task: "Request Facebook Like ",
      //       date: "02-24-2024",
      //       email: "ahad.aiman@gmail.com",
      //       address: "New York",
      //       nidNumber: 50041231541,
      //     },
      //   {
      //     key: "4",
      //     si: 4,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //     key: "5",
      //     si: 5,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //     key: "6",
      //     si: 6,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //     key: "7",
      //     si: 7,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //     key: "8",
      //     si: 8,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //     key: "9",
      //     si: 9,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //     key: "10",
      //     si: 10,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //     key: "11",
      //     si: 11,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      //   {
      //     key: "12",
      //     si: 12,
      //     name: "John Brown",
      //     img: "https://xsgames.co/randomusers/avatar.php?g=female",
      //     task: "Request Facebook Like ",
      //     date: "02-24-2024",
      //     email: "ahad.aiman@gmail.com",
      //     address: "New York",
      //     nidNumber: 50041231541,
      //   },
      // ];
      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
      const handleApprove = async (id) => {
        console.log(id);

        try {
          // const response = await baseURL.post(`/users/nidVerifyApproval?id=${id}`, {
          //   headers: {
          //     "Content-Type": "application/json",
          //     authorization: `Bearer ${localStorage.getItem("token")}`,
          //   },
          // })

          const response = await setNidApprove(id)


          console.log(response);
          if(response?.data?.code == 200){
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: `${response?.data?.message}`,
              showConfirmButton: false,
              timer: 1500
            })
            setIsModalOpen(false);
            // setTimeout(() => {
            //   window.location.reload();
            // }, 2000);
          }else{
            Swal.fire({
              position: 'top-center',
              icon: 'error',
              title: `${response?.data?.message}`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        } catch (error) {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: `${error?.response?.data?.message}`,
          showConfirmButton: false,
          timer: 1500
        })
        }
      }
      const handleCancel = async (id) => {
        console.log(id);
        try {
          // const response = await baseURL.post(`/users/nidVerifyReject?id=${id}`, {
          //   headers: {
          //     "Content-Type": "application/json",
          //     authorization: `Bearer ${localStorage.getItem("token")}`,
          //   },
          // })
          const response = await setNidReject(id)

          console.log(response);
          if(response?.data?.code == 200){
            Swal.fire({
              position: 'top-center',
              icon: 'cancel',
              title: `${response?.data?.message}`,
              showConfirmButton: false,
              timer: 1500
            })
            // setTimeout(() => {
            //   window.location.reload();
            // }, 2000);
            setIsModalOpen(false);
          }else{
            Swal.fire({
              position: 'top-center',
              icon: 'error',
              title: `${response?.data?.message}`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        } catch (error) {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: `${error?.response?.data?.message}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      console.log(veryfyRequest);
    return (
        <div className=" ml-[24px]">
        <div className=" flex justify-between items-center">
          <h1 className="text-[30px] font-medium">Verify Request List</h1>
          <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="month"
            suffixIcon
          />
        </div>
        <div className=" rounded-t-lg mt-[24px] shadow-2xl">
          <div className="flex py-[22px] mx-[20px] justify-between items-center">
            <p className=" text-[24px] font-medium">Verify Request List</p>
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
           pagination={false}
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
            <img className="w-[140px] h-[140px] rounded-full " src={`${url}${client?.image?.url}`} alt="" />
            <p className="text-white text-[16px] mb-[16px]">{client?.fullName}</p>
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
                {client?.fullName}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Employee NID Number:</p>
              <p>
                {client?.nidNumber}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Email:</p>
              <p>
                {client?.email}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Address:</p>
              <p>
                {client?.address ? client?.address : "N/A"}
              </p>
            </div>
            <div className="flex justify-center gap-10 items-center pt-[16px]">
              <p onClick={()=>handleApprove(client?.id)} className="px-[55px] cursor-pointer py-[10px] bg-[#318130] rounded-lg">
                Approve
              </p>
              <p onClick={()=>handleCancel(client?.id)} className="px-[55px] cursor-pointer py-[10px] text-[#318130] bg-[white] border-2 border-[#318130] rounded-lg">
               Cancel
              </p>
            </div>
  
          </div>
        </div>
        </Modal>
        </div>
    );
}

export default VerifyRequest;
