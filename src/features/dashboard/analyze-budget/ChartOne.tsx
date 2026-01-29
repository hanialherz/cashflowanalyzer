"use client";
import {
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  Line,
} from "recharts";

import CustomTooltip from "@/components/CustomTooltip";

interface props {
  spendings: { id: number; name: string; category: string; amount: number }[];
}

const ChartOne = ({ spendings }: props) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={spendings ?? []}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#292929"
            fill="#72c3fc"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default ChartOne;
