import React from "react";
import "./card.scss";
import { useHistory } from "react-router-dom";
import { WeatherDetailsType } from "../../../redux/weather/models";
import { getMonthBasedTime } from "../../../utils/dateTime";
import { useDispatch } from "react-redux";
import { deleteSelectedCity } from "../../../redux/weather/action";

interface CardProps {
  cityData: WeatherDetailsType;
}
export const Card: React.FC<CardProps> = (props) => {
  const { cityData } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push(`/city/${cityData?.id}`);
  };

  console.log(cityData);

  const deleteCity = (event: any) => {
    event?.preventDefault();
    event?.stopPropagation();
    let cityList = window.localStorage.getItem("CITY_ID");
    if (cityList) {
      let cities: Array<number> = JSON.parse(cityList);

      if (cities.includes(cityData.id)) {
        cities = cities.filter((city) => city !== cityData.id);
        localStorage.setItem("CITY_ID", JSON.stringify(cities));
      }
    }

    dispatch(deleteSelectedCity(cityData.id));
  };

  const time = getMonthBasedTime(cityData?.timestamp);

  return (
    <div className="card city" onClick={() => handleClick()}>
      <h4 className="card-header">{cityData?.city}</h4>
      <i className="wi wi-time-1 time-icon"></i>
      <p className="card-time">{time}</p>
      <h3 className="card-deg">{cityData?.temperature.temp} C</h3>
      <p className="card-weather">{cityData?.weather}</p>
      <span className="delete" onClick={(event) => deleteCity(event)}>
        x
      </span>
    </div>
  );
};
