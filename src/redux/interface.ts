import { WeatherStoreType } from "./weather/models";
import { key as weatherKey } from "./weather/models";

export interface IState {
  [weatherKey]: WeatherStoreType;
}
