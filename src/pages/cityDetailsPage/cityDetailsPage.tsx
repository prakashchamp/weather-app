import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Loader } from "../../components/atoms/loader/loader";
import { CityDetails } from "../../components/templates/cityDetails/cityDetails";
import { getWeatherDetails, updateApiStatus } from "../../redux/weather/action";
import {
  getAPIStatus,
  getCities,
  getInProgress,
} from "../../redux/weather/selectors";

export const CityDetailsPage = () => {
  const data = useSelector(getCities);
  const hasApiFailed = useSelector(getAPIStatus);
  const isLoading = useSelector(getInProgress);
  const history = useHistory();

  const { id } = useParams<{ id: string }>();
  const city = data.find((item) => item.id === +id);
  const dispatch = useDispatch();

  const updateCities = useCallback(() => {
    let cityList = window.localStorage.getItem("CITY_ID");
    if (cityList) {
      const city: Array<number> = JSON.parse(cityList);
      city.forEach((id: number) => {
        dispatch(getWeatherDetails(id));
        console.log("dispatch");
      });
    }
  }, []);

  if (hasApiFailed) {
    history.push("/contact");
    dispatch(updateApiStatus());
  }

  useEffect(() => {
    updateCities();
  }, [updateCities]);

  return (
    <div>
      {isLoading && <Loader />}
      {city && <CityDetails city={city} />}
    </div>
  );
};
