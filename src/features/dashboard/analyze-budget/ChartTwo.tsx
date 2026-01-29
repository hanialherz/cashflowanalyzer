"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface props {
  spendings: { id: number; name: string; category: string; amount: number }[];
}

const RADIAN = Math.PI / 180;

// Theme-based colors
export const COLORS = [
  "#72c3fc", // main
  "#5590d6", // main darker
  "#a1d4ff", // main lighter
  "#6c757d", // gray
  "#51575f", // gray darker
  "#8b9299", // gray lighter
  "#292929", // l-black
  "#1f1f1f", // l-black darker
  "#3c3c3c", // l-black lighter
  "#232323", // bg-shade
  "#1a1a1a", // bg-shade darker
  "#383838", // bg-shade lighter
];

// Custom label to show category + percentage
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

// Custom legend component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="flex flex-wrap gap-4 mt-2">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-foreground">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const ChartTwo = ({ spendings }: props) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={spendings ?? []}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={80}
            labelLine={true}
            label={renderCustomizedLabel}
          >
            <Tooltip />
            {spendings.map((entry, index) => (
              <Cell
                key={`cell-${entry.id}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          {/* Default legend; you can create a custom one if you want percentages in legend */}
          <Legend content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTwo;
