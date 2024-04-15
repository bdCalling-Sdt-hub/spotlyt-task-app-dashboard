import { DatePicker } from "antd";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useGetPaiQuery } from "../redux/features/getPaiApi";
import { useGetChatQuery } from "../redux/features/getChartApi";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 300 },
];

const COLORS = ["#318130", "#75AB74"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartRatio = () => {
  const {data:pai,isLoading,isError} = useGetPaiQuery();
  const {data:chat,} = useGetChatQuery();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  console.log(pai);
  return (
    <div className="mt-[24px] shadow-2xl rounded-2xl">
      <div className="flex justify-between p-[16px] border-b-2">
        <div>
          <h1 className="text-[20px] text-black font-medium">User Ratio</h1>
        </div>
        {/* <div className="">
          <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="year"
            suffixIcon
          />
        </div> */}
      </div>

      <div className="flex justify-center items-center py-10 px-5">
        <PieChart width={250} height={160}>
          <Pie
            data={pai?.data?.attributes}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex-1">
          <div className="mb-[24px]">
            <div className="flex items-center gap-2">
              <p className="w-6 h-5 bg-[#318130]"></p> <p>This Months Client</p>
            </div>
            <p className="text-[18px] text-center">{pai?.data?.attributes[0]?.value}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="w-6 h-5 bg-[#75AB74]"></p>{" "}
              <p>This Months Employees</p>
            </div>
            <p className="text-[18px] text-center">{pai?.data?.attributes[1]?.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartRatio;
