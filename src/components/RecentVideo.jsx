import { ConfigProvider, Space, Table } from 'antd';
import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const columns = [
    {
      title: "SI",
      dataIndex: "si",
      key: "si",
    },
    {
      title: "Client Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Task Name",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            //   to={`/dashboard/appointments/appointment-details/${record?._id}`}
            to="/"
          >
            <BsInfoCircle size={18} className="text-[#318130] " />
          </Link>
        </Space>
      ),
    },
  ];
  
  const dataSource = [
    {
      key: "1",
      si: 1,
      name: "Ahad Hossain",
      age: 32,
      task: "Request Facebook Like ",
      amount: 15,
    },
    {
      key: "2",
      si: 2,
      name: "Ahad Hossain",
      age: 32,
      task: "Request Facebook Like ",
      amount: 15,
    },
    {
      key: "3",
      si: 3,
      name: "Ahad Hossain",
      age: 32,
      task: "Request Facebook Like ",
      amount: 15,
    },
    {
      key: "4",
      si: 4,
      name: "Ahad Hossain",
      age: 32,
      task: "Request Facebook Like ",
      amount: 15,
    },
  ];

const RecentVideo = () => {
    return (
        <div className="shadow-2xl">
      <div className="flex justify-between items-center text-white bg-[#318130] rounded-t-2xl px-[15px] py-[20px]">
        <p>Video</p>
        <Link to="/">See All</Link>
      </div>
      <div className="py-[12px] border-b-2">
        <p className="ml-[14px] font-medium">YOUTUBE </p>
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
<Table  pagination={false} columns={columns} dataSource={dataSource} />
</ConfigProvider>
      </div>
    </div>
    );
}

export default RecentVideo;
