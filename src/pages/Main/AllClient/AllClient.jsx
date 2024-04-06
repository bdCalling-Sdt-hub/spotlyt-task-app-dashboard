import { ConfigProvider, DatePicker, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BsInfoCircle } from "react-icons/bs";
import { useGetAllUserQuery } from '../../../redux/features/getAllUserApi';
import { render } from 'react-dom';
import Loading from '../../../components/Loading';

const AllClient = () => {
  const [startDate,setStartDate] =  useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [client, setClient] = useState();
    const {data,isLoading,isSuccess} = useGetAllUserQuery(currentPage,startDate);
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
          render: (text, record, index) => index + 1,
        },
        {
          title: "Client Name",
          dataIndex: "fullName",
          key: "fullName",
          render: (_, record) => (
            <div className="flex gap-2 items-center">
              <img
                className="w-[34px] h-[34px] rounded-full"
                src={`${url}${record?.image?.url}`}
                alt=""
              />
              <p className="font-medium">{record.fullName}</p>
            </div>
          ),
        },
        // {
        //   title: 'Phone',
        //   dataIndex: 'phone',
        //   key: 'phone',
        // },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
            title: "Full Address",
            key: "address",
            dataIndex: "address",
            render: (_, record) => (
              <>  { !record?.address ? "N/A" :  record?.address}</>
            )
          },
        {
          title: "Date",
          key: "date",
          dataIndex: "date",
          render: (_, record) => (
            <p>{record?.createdAt?.split("T")[0]}</p>
          )
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
      const onChange = (date, dateString) => {
        console.log(date, dateString);
        setStartDate(dateString)
      };
      const handleChangePage = (page) => {
        setCurrentPage(page);
        console.log(page);
      };
    return (
        <div className=" ml-[24px]">
      <div className=" flex justify-between items-center">
        <h1 className="text-[30px] font-medium">All Client</h1>
        <DatePicker
          className="custom-date-picker"
          onChange={onChange}
          picker="month"
          suffixIcon
        />
      </div>
      <div className=" rounded-t-lg mt-[24px] shadow-2xl">
        <div className="flex py-[22px] mx-[20px] justify-between items-center">
          <p className=" text-[24px] font-medium">Client List</p>
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
            <p>Client Name:</p>
            <p>
              {client?.fullName}
            </p>
          </div>
          {/* <div className="flex justify-between border-b py-[16px]">
            <p>Task Name:</p>
            <p>
              {client?.task}
            </p>
          </div> */}
          <div className="flex justify-between border-b py-[16px]">
            <p>Email:</p>
            <p>
              {client?.email}
            </p>
          </div>
          <div className="flex justify-between py-[16px]">
            <p>Full Address:</p>
            <p>
              { !client?.address ? "N/A" :  client?.address}
            </p>
          </div>
          {/* <div className="flex justify-between items-center pt-[16px]">
            <p>Payment:</p>
            <p className="px-[15px] py-[10px] bg-[#318130] rounded-lg">
              {client?.amount}
            </p>
          </div> */}

        </div>
      </div>
      </Modal>
        </div>
    );
}

export default AllClient;
