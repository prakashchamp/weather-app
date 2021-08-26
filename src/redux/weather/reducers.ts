import {
  Action,
  DELETE_SELECTED_CITY,
  FORECAST_DETAILS_FAILED,
  FORECAST_DETAILS_SUCCESS,
  GET_FORECAST_DETAILS,
  GET_HISTORY_DETAILS,
  GET_WEATHER_DETAILS,
  HISTORY_DETAILS_FAILED,
  HISTORY_DETAILS_SUCCESS,
  UPDATE_API_STATUS,
  WEATHER_DETAILS_FAILED,
  WEATHER_DETAILS_SUCCESS,
} from "./action";
import { WeatherStoreType } from "./models";
import { initialState } from "./models";

export default function weatherReducer(
  state: WeatherStoreType = initialState,
  action: Action
): WeatherStoreType {
  switch (action.type) {
    case GET_WEATHER_DETAILS:
      return {
        ...state,
        inProgress: true,
      };

    case WEATHER_DETAILS_FAILED:
    case HISTORY_DETAILS_FAILED:
    case FORECAST_DETAILS_FAILED:
      console.log("e");
      return {
        ...state,
        apiFailed: true,
        inProgress: false,
      };

    case WEATHER_DETAILS_SUCCESS:
      const cityList = [...state.cities];
      const cityIndex = cityList.findIndex(
        (city) => city.id === action.data.id
      );
      if (cityIndex !== -1) {
        cityList[cityIndex] = action.data;
      } else {
        cityList.push(action.data);
      }
      return {
        ...state,
        cities: [...cityList],
        inProgress: false,
        apiFailed: false,
      };

    case GET_HISTORY_DETAILS:
      return {
        ...state,
        inProgress: true,
      };

    case HISTORY_DETAILS_SUCCESS:
      const indexH = state.cities.findIndex((item) => item.id === action.id);
      const newArrayH = [...state.cities];
      newArrayH[indexH].history.push(action.data);

      return {
        ...state,
        cities: newArrayH,
        inProgress: false,
        apiFailed: false,
      };

    case GET_FORECAST_DETAILS:
      return {
        ...state,
        inProgress: true,
      };

    case FORECAST_DETAILS_SUCCESS:
      const index = state.cities.findIndex((item) => item.id === action.id);
      const newArray = [...state.cities];
      newArray[index].forecast = action.data;
      return {
        ...state,
        cities: newArray,
        inProgress: false,
        apiFailed: false,
      };

    case DELETE_SELECTED_CITY:
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.id),
      };

    case UPDATE_API_STATUS:
      return {
        ...state,
        apiFailed: false,
      };

    default:
      return state;
  }
}
