// import EChartsReact from "echarts-for-react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarChartRecharts(videoData) {
  let outputData = [];

  videoData.data.items.map((v) => {
    outputData.push({
      title: v.snippet.title,
      truncatedTitle: [...v.snippet.title].slice(0, 10).join("") + "...",
      id: v.id,
      viewCount: v.statistics.viewCount,
    });
  });

  console.log(outputData);

  return (
    <BarChart
      width={730}
      height={250}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      data={outputData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" angle={-45} padding={{ top: 100 }} />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="viewCount" fill="#8884d8" />
    </BarChart>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-slate-600 text-white p-5 rounded-sm">
        <p className="label">{`${label}: ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
