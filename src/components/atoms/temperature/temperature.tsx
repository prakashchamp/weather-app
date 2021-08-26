import React from "react";
import { SunType, TemperatureType } from "../../../redux/weather/models";
import { getFTime } from "../../../utils/dateTime";
import "./temperature.scss";

interface TemperatureProps {
  isTemp: boolean;
  tempData?: TemperatureType;
  sunData?: SunType;
}

export const Temperature: React.FC<TemperatureProps> = (props) => {
  const { isTemp, tempData, sunData } = props;
  const sunrise = sunData && getFTime(sunData.sunrise);
  const sunset = sunData && getFTime(sunData?.sunset);
  return (
    <div data-testid="temperature" className="card card-highlight">
      <h3 data-testid="temp-heading">
        {isTemp ? "Temperature" : " Sunrise & Sunset"}
      </h3>
      <div className="temp-container">
        <i
          className="wi wi-direction-up
"
        ></i>
        <div className="minmax">
          <p>{isTemp ? "Max" : "Sunrise"}</p>
          <p>{isTemp ? tempData?.max_temp + " C" : sunrise}</p>
        </div>
      </div>
      <div className="temp-container">
        <i
          className="wi wi-direction-down
"
        ></i>
        <div className="minmax">
          <p>{isTemp ? "Min" : "Sunset"}</p>{" "}
          <p>{isTemp ? tempData?.min_temp + " C" : sunset}</p>
        </div>
      </div>
    </div>
  );
};
