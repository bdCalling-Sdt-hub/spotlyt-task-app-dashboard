import { Button, Form, Input } from "antd";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useGetReferAmountQuery } from "../../../redux/features/getReferAmount";
import Loading from "../../../components/Loading";

const AddReferAmount = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetReferAmountQuery();
  const [amount, setAmount] = useState();
  const fetchData = async () => {
    try {
      const response = await baseURL.get(`referral/amount`);
      setAmount(response?.data?.data?.attributes?.amount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
    //   setAmount(data?.data?.attributes?.amount);
    }
    fetchData();
  }, [data, isSuccess]);
  if (isLoading) {
    return <Loading />;
  }

 

  console.log(amount);
  const handleAddReferAmount = async (values) => {
    console.log("add refer amount", values);
    try {
      const response = await baseURL.post(`referral/amount`, values);
      console.log(response);
      if (response?.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: response?.data?.message,
        });
        fetchData();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: error?.response?.data?.message,
      });
    }
  };
  return (
    <div className="ml-[24px]">
      <div
        onClick={() => navigate("/settings")}
        className="flex cursor-pointer  items-center mt-[40px] mb-[30px]"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
        <h1 className="text-[20px] font-medium">Add Refer Amount</h1>
      </div>
      <h1 className="text-2xl font-bold mb-5">Amount: {amount}</h1>
      <div className="">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
            initialValues={{
              remember: true,
              amount: amount, // Set the default value of the amount field
            }}
          onFinish={handleAddReferAmount}
          //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex flex-col gap-[24px]">
            <div className="flex-1">
              <Form.Item
                label={
                  <span className="text-[#222222] text-[18px] font-medium">
                    Refer Amount
                  </span>
                }
                name="amount"
                className="flex-1"
                rules={[
                  {
                    //  required: true,
                    message: "Please input your Price!",
                  },
                ]}
              >
                <Input
                  placeholder="Refer Amount"
                  className="p-4 bg-[white] rounded w-full justify-start border-2 border-[#318130] mt-[12px] items-center gap-4 inline-flex"
                  type="number"
                //   defaultValue={amount}
                />
              </Form.Item>
            </div>
          </div>

          <Button
            // onClick={handleAddMembership}
            htmlType="submit"
            className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer h-[60px] bg-[#318130] text-white rounded-lg"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddReferAmount;
