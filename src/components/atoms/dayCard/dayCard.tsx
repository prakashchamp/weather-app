import React from "react";
import { DailyData } from "../../../redux/weather/models";
import { getForecastDT, getMonthYear } from "../../../utils/dateTime";
import "./dayCard.scss";

interface DayCardProps {
  data: DailyData;
}

export const DayCard: React.FC<DayCardProps> = ({ data }) => {
  return (
    <div data-testid="day-card" className="card day-card">
      <h3>{data && getForecastDT(data.timestamp)}</h3>
      <p>{data && getMonthYear(data.timestamp)}</p>
      <div className="day-temp">
        <i className="wi wi-time-3"></i>
        <p data-testid="temp">{data.temperature.temp} C</p>
      </div>
      <div className="day-minmax-container">
        <div className="day-minmax">
          <i className="wi wi-direction-up"></i>
          <div className="minmax">
            <p>Max</p>
            <p data-testid="max-temp">{data.temperature.max_temp} C</p>
          </div>
        </div>
        <div className="day-minmax">
          <i className="wi wi-direction-down"></i>
          <div className="minmax">
            <p>Min</p>
            <p data-testid="min-temp">{data.temperature.min_temp} C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export {};
