import { ConfigProvider, DatePicker, Modal, Space, Table } from 'antd';
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGetCorporateQuery } from "../redux/features/getCorporateApi";





const RecentCorporate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [client, setClient] = useState();
  const {data:corporate,isLoading,isSuccess} = useGetCorporateQuery()
  const handleView = (value) => {
      setClient(value);
      console.log(value)
      setIsModalOpen(true);
    };
    const url = import.meta.env.VITE_API_URL;
    const columns = [
      {
        title: "#SI",
        dataIndex: "si",
        key: "si",
        render: (text, record, index) => index + 1,
      },
      {
        title: "Client Name",
        dataIndex: "name",
        key: "name",
        render: (_, record) => (
          <div className="flex gap-2 items-center">
            <img
              className="w-[34px] h-[34px] rounded-full"
              src={`${url}${record?.user?.image?.url}`}
              alt=""
            />
            <p className="font-medium">{record.user?.fullName?.slice(0, 5)+"..."}</p>
          </div>
        ),
      },
      {
        title: "Task Name",
        dataIndex: "name",
        key: "name",
        render: (_, record) => <p>{record?.name?.slice(0, 5)+"..."}</p>,
      },
      {
        title: "Task Link",
        dataIndex: "taskLink",
        key: "taskLink",
        render: (_, record) => <p>{record?.taskLink?.slice(0, 5)+"..."}</p>,
      },
      {
          title: "Target",
          dataIndex: "quantity",
          key: "quantity",
        },
        {
          title: "Total Rand",
          dataIndex: "rand",
          key: "rand",
          render: (_, record) => (
            <p>{record?.quantity * record?.price}</p>
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
    return (
        <div className="shadow-2xl">
      <div className="flex justify-between items-center text-white bg-[#318130] rounded-t-2xl px-[15px] py-[20px]">
        <p>Corporate</p>
        <Link to="/tasks/corporate">See All</Link>
      </div>
      <div className="py-[12px] border-b-2">
        <p className="ml-[14px] font-medium">SURVEYS </p>
      </div>
      <div>
      <ConfigProvider
  theme={{
    components: {
      Table: {
        headerBg: "white",
        headerColor:"black",
        headerBorderRadius: 2,
      },
    },
  }}
>
<Table  pagination={false} columns={columns} dataSource={corporate?.data?.attributes?.tasks?.slice(0,4)} />
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
          <div  className="flex justify-center items-center gap-2 flex-col border-b pt-10 border-b-gray-300">
            <img className="w-[140px] h-[140px] rounded-full " src={`${url}${client?.user?.image?.url}`} alt="" />
            <p className="text-white text-[16px] mb-[16px]">{client?.user?.fullName}</p>
          </div>
          <div  className="p-[20px] text-white">
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>
                {client?.createdAt?.split("T")[0]}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Employee Name:</p>
              <p>
                {client?.user?.fullName}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Task Name:</p>
              <p>
                {client?.name}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Task Link:</p>
              <p>
                {client?.taskLink}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Target:</p>
              <p>
                {client?.quantity}
              </p>
            </div>
            <div className="flex justify-between py-[16px]">
              <p>Total Rand:</p>
              <p>
                {client?.quantity * client?.price}
              </p>
            </div>
            {/* <div className="flex justify-center items-center pt-[16px]">
              <p className="px-[15px] py-[10px] bg-[#318130] rounded-lg">
                Approve Task
              </p>
            </div> */}
  
          </div>
        </div>
        </Modal>
    </div>
    );
}

export default RecentCorporate;
