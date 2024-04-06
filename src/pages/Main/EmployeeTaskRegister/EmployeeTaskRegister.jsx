import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useGetEmployeeTaskRegisterQuery } from "../../../redux/features/getEmployeeTaskRegister";
import { render } from "react-dom";

const EmployeeTaskRegister = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [client, setClient] = useState();
  const {data:employeeRegister,isSuccess,isLoading,isError} = useGetEmployeeTaskRegisterQuery()
//   const handleView = (value) => {
//     setClient(value);
//     console.log(value);
//     setIsModalOpen(true);
//   };
const navigate = useNavigate()
const url = import.meta.env.VITE_API_URL;
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
            src={`${url}${record?.userId.image?.url}`}
            alt=""
          />
          <p className="font-medium">{record?.userId.fullName}</p>
        </div>
      ),
    },
    // {
    //   title: 'Phone',
    //   dataIndex: 'phone',
    //   key: 'phone',
    // },
    {
      title: "Task Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Task Link",
      dataIndex: "link",
      key: "link",
      render: (_, record) => (
        record?.taskId?.taskLink
      )
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, record) => (
        record?.createdAt?.split("T")[0]
      )
    },
    {
      title:"Status",
      dataIndex:"status",
      key:"status",
      render: (_, record) => (
        
          record?.taskId?.status === "pending" ? <p className="px-5 w-[100px] py-2 bg-[#F5F5F5] text-[#F7931E] cursor-pointer rounded-md">{record?.taskId?.status}</p> : record?.taskId?.status === "rejected" ? <p className="px-5 py-2 bg-[#F5F5F5] text-[red] cursor-pointer rounded-md">{record?.taskId?.status}</p> :  <p className="px-5 py-2 bg-[#BFD8BF] text-[#318130] cursor-pointer rounded-md">{record?.taskId?.status}</p>
        
       
      )
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
           
          <BsInfoCircle
            onClick={() => navigate(`/employees-task-register/${record?.key}`)}
            size={18}
            className="text-[#318130] cursor-pointer"
          />

          {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
        </Space>
      ),
    },
  ];
  console.log(employeeRegister);
 
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className=" ml-[24px]">
      <div className=" flex justify-between items-center">
        <h1 className="text-[30px] font-medium">Employees Task Register</h1>
        <DatePicker
          className="custom-date-picker"
          onChange={onChange}
          picker="month"
          suffixIcon
        />
      </div>
      <div className=" rounded-t-lg mt-[24px] shadow-2xl">
        <div className="flex py-[22px] mx-[20px] justify-between items-center">
          <p className=" text-[24px] font-medium">Task Register List</p>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#318130",
                headerColor: "white",
                headerBorderRadius: 2,
              },
            },
          }}
        >
          <Table
            pagination={{
              position: ["bottomCenter"],
            }}
            columns={columns}
            dataSource={employeeRegister?.data?.attributes?.tasks}
          />
        </ConfigProvider>
      </div>
      {/* <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon
      >
        <div>
          <div
            style={{ fontFamily: "Aldrich" }}
            className="flex justify-center items-center gap-2 flex-col border-b pt-10 border-b-gray-300"
          >
            <img
              className="w-[140px] h-[140px] rounded-full "
              src={client?.img}
              alt=""
            />
            <p className="text-white text-[16px] mb-[16px]">{client?.name}</p>
          </div>
          <div
            style={{ fontFamily: "Aldrich" }}
            className="p-[20px] text-white"
          >
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>{client?.date}</p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Employee Name:</p>
              <p>{client?.name}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Employee NID Number:</p>
              <p>{client?.nidNumber}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Email:</p>
              <p>{client?.email}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Country:</p>
              <p>{client?.country}</p>
            </div>
            <div className="flex justify-center items-center pt-[16px]">
              <p className="px-[15px] py-[10px] bg-[#318130] rounded-lg">
                Approve Employee
              </p>
            </div>
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default EmployeeTaskRegister;
