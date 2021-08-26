import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setInterval } from "timers";
import { Loader } from "../../components/atoms/loader/loader";

import { Home } from "../../components/templates/home/home";
import { getWeatherDetails, updateApiStatus } from "../../redux/weather/action";
import {
  getAPIStatus,
  getCities,
  getInProgress,
} from "../../redux/weather/selectors";

export const HomePage = () => {
  const data = useSelector(getCities);
  const hasApiFailed = useSelector(getAPIStatus);
  const isLoading = useSelector(getInProgress);
  const dispatch = useDispatch();
  const history = useHistory();

  const updateCities = useCallback(() => {
    let cityList = window.localStorage.getItem("CITY_ID");
    if (cityList) {
      const city: Array<number> = JSON.parse(cityList);
      city.forEach((id: number) => {
        dispatch(getWeatherDetails(id));
      });
    }
  }, []);

  useEffect(() => {
    updateCities();
    const interval = setInterval(() => {
      updateCities();
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [updateCities]);

  if (hasApiFailed) {
    history.push("/contact");
    dispatch(updateApiStatus());
  }

  return (
    <div>
      {isLoading && <Loader />}
      <Home data={data} />
    </div>
  );
};
