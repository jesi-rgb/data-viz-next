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
      id: v.id,
      viewCount: v.statistics.viewCount,
    });
  });

  console.log(outputData);

  return (
    <BarChart width={500} height={1500} data={outputData} layout="vertical">
      <XAxis type="number" />
      <YAxis type="category" dataKey="title" />
      <Bar background label dataKey="viewCount" fill="#8884d8" />
    </BarChart>
  );
}
