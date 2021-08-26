import { IState } from "./../interface";
export const getWeatherStore = (store: IState) => store.weather;

export const getCities = (store: IState) => store.weather.cities;

export const getInProgress = (store: IState) => store.weather.inProgress;

export const getAPIStatus = (store: IState) => store.weather.apiFailed;
