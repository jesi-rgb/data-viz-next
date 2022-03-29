import EChartsReact from "echarts-for-react";
import { countBy } from "lodash";

const BarChartVideos = (videoData) => {
  let outputData = [];

  videoData.data.items.map((v) => {
    outputData.push({
      title: v.snippet.title,
      id: v.id,
      viewCount: v.statistics.viewCount,
    });
  });

  const barChartOpts = {
    dataset: [
      {
        dimensions: ["title", "id", "viewCount"],
        source: outputData,
      },
      {
        transform: {
          type: "sort",
          config: { dimension: "viewCount", order: "desc" },
        },
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: { left: "10%", containLabel: true, height: 300, bottom: "10%" },
    xAxis: {
      type: "value",
      axisLabel: { interval: 0 },
    },
    yAxis: { type: "category", axisLabel: { interval: 0 } },
    series: {
      type: "bar",
      barwidth: "60%",
      encode: { x: "viewCount", y: "title" },
      datasetIndex: 1,
    },
  };

  return (
    <>
      <EChartsReact option={barChartOpts} />
    </>
  );
};

export default BarChartVideos;
