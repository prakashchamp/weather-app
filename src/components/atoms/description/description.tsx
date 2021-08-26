import React from "react";
import "./description.scss";
import { getDayBasedTime } from "../../../utils/dateTime";

interface DescriptionProps {
  city: {
    city: string;
    temp: number;
    weather: string;
    timestamp: number;
  };
}

export const Description: React.FC<DescriptionProps> = (props) => {
  const { city } = props;
  return (
    <div data-testid="description" className="description-container">
      <h1 className="description-heading">{city?.city}</h1>
      <i data-testid="clock-icon" className="wi wi-time-3"></i>
      <h2 className="description-deg">
        {city?.temp}
        <sup>o</sup>C
      </h2>
      <p data-testid="description-time" className="description-time">
        {city && getDayBasedTime(city.timestamp)}
      </p>
      <div className="description-weather">
        <i className="wi wi-day-cloudy"></i>
        <p>{city?.weather}</p>
      </div>
      <div className="description-rain">
        <i className="wi wi-day-fog"></i>
        <p>Rain - 0%</p>
      </div>
    </div>
  );
};
