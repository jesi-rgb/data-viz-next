import EChartsReact from "echarts-for-react";
import React from "react";
import { countBy } from "lodash";
const CalendarHeatMap = ({ data }) => {
  const [option, setOption] = React.useState({});

  let dates;
  let groups;
  let refinedData = [];

  if (data) {
    let tweets = data.data;
    dates = tweets.map((t) => new Date(t.created_at));

    groups = countBy(
      dates,
      (d) => new Date(d.getFullYear(), d.getMonth(), d.getDay())
    );

    Object.entries(groups).forEach(([k, v]) => {
      refinedData.push([new Date(k), v]);
    });
  }

  React.useEffect(() => {
    const bubbleChartOptions = {
      title: {
        top: 30,
        left: "center",
        text: "lets fucking go",
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 50,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ["auto", 13],

        range: [new Date(2021, 11), new Date(2022, 12)],
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: true },
      },
      series: [
        {
          type: "heatmap",
          coordinateSystem: "calendar",
          calendarIndex: 0,
          data: refinedData,
        },
      ],
    };

    setOption(bubbleChartOptions);
  }, []);
  return (
    <>
      <EChartsReact option={option} />
    </>
  );
};
export default CalendarHeatMap;
