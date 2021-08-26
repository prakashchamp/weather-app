import React from "react";
import { DailyData } from "../../../redux/weather/models";
import { DayCard } from "../../atoms/dayCard/dayCard";
import { Graph } from "../../atoms/graph/graph";
import "./dayCard.scss";

interface DayCardListProps {
  data: DailyData[];
  isForecast: boolean;
}

export const DayCardList: React.FC<DayCardListProps> = ({
  data,
  isForecast,
}) => {
  return (
    <div data-testid="day-list" className="day-list-container">
      <h2 data-testid="day-list-heading">
        {isForecast ? "Forecast" : "History"}
      </h2>
      <div className="day-list">
        {data &&
          data.map((item) => <DayCard key={item.timestamp} data={item} />)}
      </div>
      <div className="chart">
        <Graph data={data} />
      </div>
    </div>
  );
};
