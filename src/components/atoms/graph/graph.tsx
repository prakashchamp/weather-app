import React from "react";
import { Line } from "react-chartjs-2";
import { DailyData } from "../../../redux/weather/models";
import { getDay } from "../../../utils/dateTime";

interface GraphProps {
  data: DailyData[];
}

export const Graph: React.FC<GraphProps> = ({ data }) => {
  const tempData: number[] = [];
  let labelData: string[] = [];

  data.forEach((item: any) => {
    tempData.push(item.temperature.temp);
    labelData.push(getDay(item.timestamp));
  });
  const graphData = {
    labels: [...labelData],
    datasets: [
      {
        label: "Temperature",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "purple",
        borderWidth: 2.5,
        data: [...tempData],
      },
    ],
  };

  return (
    <div>
      <Line
        data={graphData}
        options={{
          title: {
            display: true,
            text: "Average Temperature",
            fontSize: 30,
          },
        }}
      />
    </div>
  );
};
