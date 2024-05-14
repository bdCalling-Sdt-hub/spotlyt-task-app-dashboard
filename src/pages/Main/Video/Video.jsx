import { ConfigProvider, DatePicker, Modal, Space, Table } from "antd";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useGetVideoQuery } from "../../../redux/features/getVideoApi";
import Loading from "../../../components/Loading";

const Video = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: video, isLoading, isError } = useGetVideoQuery(currentPage);
  const [client, setClient] = useState();
  const handleView = (value) => {
    setClient(value);
    console.log(value);
    setIsModalOpen(true);
  };
  if (isLoading) {
    return <Loading/>;
  }
  const url = import.meta.env.VITE_API_URL;
  console.log(video);
  console.log(video?.data?.attributes);
  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text, record, index) =>
        currentPage == 1 ? index + 1 : index + 1 + (currentPage - 1) * 10,
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
          <p className="font-medium">{record.user?.fullName}</p>
        </div>
      ),
    },
    {
      title: "Task Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Task Link",
      dataIndex: "taskLink",
      key: "link",
    },
    {
      title: "Target",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Total Rand",
      dataIndex: "rand",
      key: "rand",
      render: (_, record) => record?.count * record?.price,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BsInfoCircle
            onClick={() => handleView(record)}
            size={18}
            className="text-[#318130] cursor-pointer"
          />

          {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
        </Space>
      ),
    },
  ];

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleChangePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
  return (
    <div className=" ml-[24px]">
      <div className=" flex justify-between items-center">
        <h1 className="text-[30px] font-medium">Video Tasks</h1>
        {/* <DatePicker
          className="custom-date-picker"
          onChange={onChange}
          picker="month"
          suffixIcon
        /> */}
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
              pageSize: video?.data?.attributes?.limit,
              total: video?.data?.attributes?.totalResults,
              showSizeChanger: false,
              onChange: handleChangePage,
            }}
            columns={columns}
            dataSource={video?.data?.attributes?.tasks}
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
          <div
            style={{ fontFamily: "Aldrich" }}
            className="flex justify-center items-center gap-2 flex-col border-b pt-10 border-b-gray-300"
          >
            <img
              className="w-[140px] h-[140px] rounded-full "
              src={`${url}${client?.user?.image?.url}`}
              alt=""
            />
            <p className="text-white text-[16px] mb-[16px]">
              {client?.user?.fullName}
            </p>
          </div>
          <div
            style={{ fontFamily: "Aldrich" }}
            className="p-[20px] text-white"
          >
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>{client?.createdAt?.split("T")[0]}</p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Client Name:</p>
              <p>{client?.user?.fullName}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Task Name:</p>
              <p>{client?.name}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Task Link:</p>
              <p>{client?.taskLink}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Target:</p>
              <p>{client?.count || "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Total Rand:</p>
              <p>{client?.count * client?.price ||"N/A"}</p>
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
};

export default Video;
