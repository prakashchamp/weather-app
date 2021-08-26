import { combineReducers } from "redux";
import weatherReducer from "./weather/reducers";
import { key as WeatherKey } from "./weather/models";

export default combineReducers({
  [WeatherKey]: weatherReducer,
});
