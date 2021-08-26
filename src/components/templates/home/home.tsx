import React from "react";
import { WeatherDetailsType } from "../../../redux/weather/models";
import { Input } from "../../atoms/input/input";

import { WeatherCards } from "../../molecules/weatherCards/weatherCards";
import "./home.scss";

interface HomeProps {
  data: WeatherDetailsType[];
}

export const Home: React.FC<HomeProps> = (props) => {
  const { data } = props;

  return (
    <div className="home-container">
      <h1 className="home-heading">Weather App</h1>
      <Input />
      <WeatherCards data={data} />
    </div>
  );
};
