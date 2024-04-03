import { ConfigProvider, DatePicker, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BsInfoCircle } from "react-icons/bs";


const VerifyRequest = () => {
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
          title: "Employee Name",
          dataIndex: "name",
          key: "name",
          render: (_, record) => (
            <div className="flex gap-2 items-center">
              <img
                className="w-[34px] h-[34px] rounded-full"
                src={record.img}
                alt=""
              />
              <p className="font-medium">{record?.name}</p>
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
          key: "task",
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
          },
        {
          title: "Date",
          key: "date",
          dataIndex: "date",
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
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
            key: "2",
            si: 2,
            name: "John Brown",
            img: "https://xsgames.co/randomusers/avatar.php?g=female",
            task: "Request Facebook Like ",
            date: "02-24-2024",
            email: "ahad.aiman@gmail.com",
            address: "New York",
            nidNumber: 50041231541,
          },
          {
            key: "3",
            si: 3,
            name: "John Brown",
            img: "https://xsgames.co/randomusers/avatar.php?g=female",
            task: "Request Facebook Like ",
            date: "02-24-2024",
            email: "ahad.aiman@gmail.com",
            address: "New York",
            nidNumber: 50041231541,
          },
        {
          key: "4",
          si: 4,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
          key: "5",
          si: 5,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
          key: "6",
          si: 6,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
          key: "7",
          si: 7,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
          key: "8",
          si: 8,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
          key: "9",
          si: 9,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
          key: "10",
          si: 10,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
          key: "11",
          si: 11,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
        {
          key: "12",
          si: 12,
          name: "John Brown",
          img: "https://xsgames.co/randomusers/avatar.php?g=female",
          task: "Request Facebook Like ",
          date: "02-24-2024",
          email: "ahad.aiman@gmail.com",
          address: "New York",
          nidNumber: 50041231541,
        },
      ];
      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
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
          <div className="flex justify-center items-center gap-2 flex-col border-b pt-10 border-b-gray-300">
            <img className="w-[140px] h-[140px] rounded-full " src={client?.img} alt="" />
            <p className="text-white text-[16px] mb-[16px]">{client?.name}</p>
          </div>
          <div className="p-[20px] text-white">
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
                {client?.address}
              </p>
            </div>
            <div className="flex justify-center gap-10 items-center pt-[16px]">
              <p className="px-[55px] cursor-pointer py-[10px] bg-[#318130] rounded-lg">
                Approve
              </p>
              <p className="px-[55px] cursor-pointer py-[10px] text-[#318130] bg-[white] border-2 border-[#318130] rounded-lg">
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
