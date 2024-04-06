import { Spin } from "antd";

const Loading = ({size='large'}) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Spin size={size} />
    </div>
  );
};

export default Loading;