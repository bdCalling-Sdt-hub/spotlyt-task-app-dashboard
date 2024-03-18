import { ConfigProvider, DatePicker, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BsInfoCircle } from "react-icons/bs";

const Corporate = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [client, setClient] = useState();
    const handleView = (value) => {
        setClient(value);
        console.log(value)
        setIsModalOpen(true);
      };

      const columns = [
        {
          title: "#SI",
          dataIndex: "si",
          key: "si",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Client Name",
          dataIndex: "name",
          key: "name",
          render: (_, record) => (
            <div className="flex gap-2 items-center">
              <img
                className="w-[34px] h-[34px] rounded-full"
                src={record.img}
                alt=""
              />
              <p className="font-medium">{record.name}</p>
            </div>
          ),
        },
        {
          title: "Task Name",
          dataIndex: "task",
          key: "task",
        },
        {
          title: "Task Link",
          dataIndex: "link",
          key: "link",
        },
        {
            title: "Target",
            dataIndex: "target",
            key: "target",
          },
          {
            title: "Total Rand",
            dataIndex: "rand",
            key: "rand",
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
      const data = [
        {
          key: "1",
          si: 1,
          name: "John Brown",
          task:"Request Facebook Like",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
        {
            key: "2",
            si: 2,
            name: "John Brown",
            img: "https://xsgames.co/randomusers/avatar.php?g=female",
            task:"Request Facebook Like",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
          },
          {
            key: "3",
            si: 3,
            name: "John Brown",
            img: "https://xsgames.co/randomusers/avatar.php?g=female",
            task: "Request Facebook Like ",
            link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
          },
        {
          key: "4",
          si: 4,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
           date: "02-24-2024",
        },
        {
          key: "5",
          si: 5,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
        {
          key: "6",
          si: 6,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
        {
          key: "7",
          si: 7,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
        {
          key: "8",
          si: 8,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
        {
          key: "9",
          si: 9,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
        {
          key: "10",
          si: 10,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
        {
          key: "11",
          si: 11,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
        {
          key: "12",
          si: 12,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          link: "https://www.facebook.com/post Image",
          target:"500 Like",
          rand: "R3500.00",
          date: "02-24-2024",
        },
      ];
      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    return (
        <div className=" ml-[24px]">
        <div className=" flex justify-between items-center">
          <h1 className="text-[30px] font-medium">Corporate Tasks</h1>
          <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="month"
            suffixIcon
          />
        </div>
        <div className=" rounded-t-lg mt-[24px] shadow-2xl">
          <div className="flex py-[22px] mx-[20px] justify-between items-center">
            <p className=" text-[24px] font-medium">Task List</p>
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
            dataSource={data}
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
          <div  className="flex justify-center items-center gap-2 flex-col border-b pt-10 border-b-gray-300">
            <img className="w-[140px] h-[140px] rounded-full " src={client?.img} alt="" />
            <p className="text-white text-[16px] mb-[16px]">{client?.name}</p>
          </div>
          <div  className="p-[20px] text-white">
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>
                {client?.date}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Employee Name:</p>
              <p>
                {client?.name}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Task Name:</p>
              <p>
                {client?.task}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Task Link:</p>
              <p>
                {client?.link}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Target:</p>
              <p>
                {client?.target}
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Total Rand:</p>
              <p>
                {client?.rand}
              </p>
            </div>
            <div className="flex justify-center items-center pt-[16px]">
              <p className="px-[15px] py-[10px] bg-[#318130] rounded-lg">
                Approve Task
              </p>
            </div>
  
          </div>
        </div>
        </Modal>
        </div>
    );
}

export default Corporate;
