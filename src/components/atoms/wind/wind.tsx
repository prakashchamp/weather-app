import React from "react";
import { WindType } from "../../../redux/weather/models";
import { getWindDirection } from "../../../utils/windDirection";
import "./wind.scss";

interface WindProps {
  isWind: boolean;
  windData?: WindType;
  humidityData?: number;
}

export const Wind: React.FC<WindProps> = (props) => {
  const { isWind, windData, humidityData } = props;
  const direction = windData && getWindDirection(windData.deg);
  return (
    <div data-testid="wind" className="card card-highlight">
      <h3 data-testid="wind-heading">{isWind ? "Wind Status" : "Humidity"}</h3>
      <p className="wind-speed">
        <span>{isWind ? windData?.speed : humidityData}</span>
        {isWind ? "km/h" : "%"}
      </p>
      <p className="wind-direction">
        {isWind && <i className="wi wi-direction-right"></i>}
        {direction || "Normal"}
      </p>
    </div>
  );
};
