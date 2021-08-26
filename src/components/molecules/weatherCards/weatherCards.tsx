import React from "react";
import { WeatherDetailsType } from "../../../redux/weather/models";

import { Card } from "../../atoms/card/card";
import "./weatherCards.scss";

interface WeatheCardProps {
  data: WeatherDetailsType[];
}

export const WeatherCards: React.FC<WeatheCardProps> = (props) => {
  const { data } = props;
  return (
    <div className="weathercards-container">
      {data.map((item) => {
        return <Card key={item.id} cityData={item} />;
      })}
    </div>
  );
};
