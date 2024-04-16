import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useGetEmployeeTaskRegisterQuery } from "../../../redux/features/getEmployeeTaskRegister";
import { render } from "react-dom";
import Loading from "../../../components/Loading";

const EmployeeTaskRegister = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const {data:employeeRegister,isSuccess,isLoading,isError} = useGetEmployeeTaskRegisterQuery(currentPage);

  if (isLoading) {
    return <Loading/>;
  }
  const handleChangePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
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
        
          record?.status === "pending" ? <p className="px-2 text-center py-2 w-[100px] bg-[#F5F5F5] text-[#F7931E] cursor-pointer rounded-md">{record?.status}</p> : record?.status === "rejected" ? <p className="px-3 w-[100px]  text-center  py-2 bg-[#F5F5F5] text-[red] cursor-pointer rounded-md">{record?.status}</p> :  <p className="px-2 w-[100px]  py-2 bg-[#BFD8BF] text-[#318130]  text-center cursor-pointer rounded-md">{record?.status}</p>
        
       
      )
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
           
          <BsInfoCircle
            onClick={() => navigate(`/employees-task-register/${record?._id}`)}
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
          <p className="text-[24px] font-medium">Task Register List</p>
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
              pageSize: employeeRegister?.data?.attributes?.tasks?.limit, 
              showSizeChanger: false,
              onChange:handleChangePage,
              total:employeeRegister?.data?.attributes?.tasks?.totalResult
            }}
            columns={columns}
            dataSource={employeeRegister?.data?.attributes?.tasks}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default EmployeeTaskRegister;
