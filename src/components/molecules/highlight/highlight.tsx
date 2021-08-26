import React from "react";
import { WeatherDetailsType } from "../../../redux/weather/models";
import { Temperature } from "../../atoms/temperature/temperature";
import { Wind } from "../../atoms/wind/wind";
import "./highlight.scss";

interface HighlightProps {
  city: WeatherDetailsType;
}
export const Highlight: React.FC<HighlightProps> = (props) => {
  const { city } = props;
  return (
    <div className="highlight-container">
      <h2 className="highlight-heading">Today's Highlight</h2>
      <div className="highlight-list">
        <Temperature isTemp={true} tempData={city?.temperature} />
        <Wind isWind={true} windData={city?.wind} />
        <Temperature isTemp={false} sunData={city?.sun} />
        <Wind isWind={false} humidityData={city?.humidity} />
      </div>
    </div>
  );
};
