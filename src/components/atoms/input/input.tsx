import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AsyncSelect from "react-select/async";
import { getWeatherDetails } from "../../../redux/weather/action";
import "./input.scss";

export const Input = () => {
  const dispatch = useDispatch();

  const handleChange = (value: any) => {
    if (!value) {
      return;
    }
    let cityList = window.localStorage.getItem("CITY_ID");
    if (cityList) {
      const city: Array<number> = JSON.parse(cityList);

      if (city.includes(value.id)) {
        return;
      }

      city.push(value.id);
      dispatch(getWeatherDetails(value.id));
      localStorage.setItem("CITY_ID", JSON.stringify(city));
    } else {
      const city = [value.id];
      localStorage.setItem("CITY_ID", JSON.stringify(city));
      dispatch(getWeatherDetails(value.id));
    }
  };

  const loadOptions = async (inputText: string, callback: Function) => {
    if (inputText.length === 0) {
      return;
    }

    const response = await fetch(process.env.PUBLIC_URL + `/assets/city.json`);
    const res = await response.json();
    let matches = res.filter((place: any) => {
      const regex = new RegExp(`^${inputText}`, "gi");
      return place.value.match(regex);
    });
    callback(matches);
  };

  return (
    <div className="input-container">
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        placeholder="Enter city name"
        isClearable={true}
        onChange={handleChange}
      />
    </div>
  );
};
