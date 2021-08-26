import { Dispatch } from "react";
import {
  Coordinates,
  DailyData,
  HistoryForecast,
  WeatherDetailsType,
} from "./models";
import {
  currentWeatherURL,
  forecastURL,
  historyURL,
} from "./weather.constants";

export const GET_WEATHER_DETAILS = `weather/GET_WEATHER_DETAILS`;
export const WEATHER_DETAILS_SUCCESS = `weather/WEATHER_DETAILS_SUCCESS`;
export const WEATHER_DETAILS_FAILED = `weather/WEATHER_DETAILS_FAILED`;
export const GET_HISTORY_DETAILS = `weather/GET_HISTORY_DETAILS`;
export const HISTORY_DETAILS_SUCCESS = `weather/HISTORY_DETAILS_SUCCESS`;
export const HISTORY_DETAILS_FAILED = `weather/HISTORY_DETAILS_FAILED`;
export const GET_FORECAST_DETAILS = `weather/GET_FORECAST_DETAILS`;
export const FORECAST_DETAILS_SUCCESS = `weather/FORECAST_DETAILS_SUCCESS`;
export const FORECAST_DETAILS_FAILED = `weather/FORECAST_DETAILS_FAILED`;
export const DELETE_SELECTED_CITY = `weather/DELETE_SELECTED_CITY`;
export const UPDATE_API_STATUS = "`weather/UPDATE_API_STATUS";

type GetWeatherDetailsType = {
  type: typeof GET_WEATHER_DETAILS;
};

type WeatherDetailsSuccessType = {
  type: typeof WEATHER_DETAILS_SUCCESS;
  data: WeatherDetailsType;
};

type WeatherDetailsFailedType = {
  type: typeof WEATHER_DETAILS_FAILED;
};

type GetHistoryDetailsType = {
  type: typeof GET_HISTORY_DETAILS;
};

type HistoryDetailsSuccessType = {
  type: typeof HISTORY_DETAILS_SUCCESS;
  data: HistoryForecast;
  id: number;
};

type HistoryDetailsFailedType = {
  type: typeof HISTORY_DETAILS_FAILED;
};

type GetForecastDetailsType = {
  type: typeof GET_FORECAST_DETAILS;
};

type ForecastDetailsSuccessType = {
  type: typeof FORECAST_DETAILS_SUCCESS;
  data: HistoryForecast[];
  id: number;
};

type ForecastDetailsFailedType = {
  type: typeof FORECAST_DETAILS_FAILED;
};

type DeleteSelectedCityType = {
  type: typeof DELETE_SELECTED_CITY;
  id: number;
};

type UpdateApiStatus = {
  type: typeof UPDATE_API_STATUS;
};

const modifyWeatherData = (data: any): WeatherDetailsType => {
  return {
    id: data.id,
    timestamp: data.dt,
    city: data.name,
    wind: data.wind,
    coord: data.coord,
    temperature: {
      temp: data.main.temp,
      max_temp: data.main.temp_max,
      min_temp: data.main.temp_min,
    },
    sun: {
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    },
    weather: data.weather[0].description,
    humidity: data.main.humidity,
    forecast: [],
    history: [],
  };
};

export const getWeatherDetails = (id: number) => {
  return (
    dispatch: Dispatch<
      | GetWeatherDetailsType
      | WeatherDetailsSuccessType
      | WeatherDetailsFailedType
    >
  ) => {
    dispatch({ type: GET_WEATHER_DETAILS });

    fetch(`${currentWeatherURL}&id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(weatherDetailsSuccess(modifyWeatherData(res)));
      })
      .catch((err) => {
        dispatch(weatherDetailsFailed());
        console.log(err);
      });
  };
};

export const weatherDetailsSuccess = (
  data: WeatherDetailsType
): WeatherDetailsSuccessType => ({
  type: WEATHER_DETAILS_SUCCESS,
  data,
});

export const weatherDetailsFailed = (): WeatherDetailsFailedType => ({
  type: WEATHER_DETAILS_FAILED,
});

const modifyHistoryData = (current: any, hourly: any): DailyData => {
  let max = -Infinity;
  let min = +Infinity;
  hourly.forEach((item: any) => {
    max = Math.max(max, item.temp);
    min = Math.min(min, item.temp);
  });

  return {
    timestamp: current.dt,
    temperature: {
      temp: current.temp,
      max_temp: max,
      min_temp: min,
    },
  };
};

export const getHistoryDetails = (id: number, coord: Coordinates) => {
  return (
    dispatch: Dispatch<
      | GetHistoryDetailsType
      | HistoryDetailsSuccessType
      | HistoryDetailsFailedType
    >
  ) => {
    dispatch({ type: GET_HISTORY_DETAILS });

    for (let index = 1; index <= 5; index++) {
      let date = new Date();
      date.setDate(date.getDate() - index);
      let timestamp = Math.trunc(date.getTime() / 1000);
      fetch(`${historyURL}&dt=${timestamp}&lat=${coord.lat}&lon=${coord.lon}`)
        .then((res) => res.json())
        .then((res) => modifyHistoryData(res.current, res.hourly))
        .then((res) => dispatch(historyDetailsSuccess(res, id)))
        .catch((err) => {
          dispatch(historyDetailsFailed());
        });
    }
  };
};

export const historyDetailsSuccess = (
  data: HistoryForecast,
  id: number
): HistoryDetailsSuccessType => ({
  type: HISTORY_DETAILS_SUCCESS,
  data,
  id,
});

export const historyDetailsFailed = (): HistoryDetailsFailedType => ({
  type: HISTORY_DETAILS_FAILED,
});

const modifyForecastData = (data: any): DailyData[] => {
  return data.map((item: any) => ({
    timestamp: item.dt,
    temperature: {
      temp: item.temp.day,
      max_temp: item.temp.max,
      min_temp: item.temp.min,
    },
  }));
};

export const getForecastDetails = (id: number, coord: Coordinates) => {
  return (
    dispatch: Dispatch<
      | GetForecastDetailsType
      | ForecastDetailsSuccessType
      | ForecastDetailsFailedType
    >
  ) => {
    dispatch({ type: GET_FORECAST_DETAILS });

    fetch(`${forecastURL}&lat=${coord.lat}&lon=${coord.lon}`)
      .then((res) => res.json())
      .then((res) => modifyForecastData(res.daily))
      .then((res) => dispatch(forecastDetailsSuccess(res, id)))
      .catch((err) => {
        dispatch(forecastDetailsFailed());
        console.log(err);
      });
  };
};

export const forecastDetailsSuccess = (
  data: HistoryForecast[],
  id: number
): ForecastDetailsSuccessType => ({
  type: FORECAST_DETAILS_SUCCESS,
  data,
  id,
});

export const forecastDetailsFailed = (): ForecastDetailsFailedType => ({
  type: FORECAST_DETAILS_FAILED,
});

export const deleteSelectedCity = (id: number): DeleteSelectedCityType => ({
  type: DELETE_SELECTED_CITY,
  id,
});

export const updateApiStatus = (): UpdateApiStatus => ({
  type: UPDATE_API_STATUS,
});

export type Action =
  | GetWeatherDetailsType
  | WeatherDetailsSuccessType
  | WeatherDetailsFailedType
  | GetHistoryDetailsType
  | HistoryDetailsSuccessType
  | HistoryDetailsFailedType
  | GetForecastDetailsType
  | ForecastDetailsSuccessType
  | ForecastDetailsFailedType
  | DeleteSelectedCityType
  | UpdateApiStatus;
