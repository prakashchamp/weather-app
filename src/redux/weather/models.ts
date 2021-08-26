export const key = "weather";

export const initialState: WeatherStoreType = {
  inProgress: false,
  cities: [],
  apiFailed: false,
};

export type WeatherStoreType = {
  inProgress: boolean;
  cities: Array<WeatherDetailsType>;
  apiFailed: boolean;
};

export type WeatherDetailsType = {
  city: string;
  humidity: number;
  id: number;
  sun: SunType;
  temperature: TemperatureType;
  timestamp: number;
  weather: string;
  wind: WindType;
  coord: Coordinates;
  forecast: HistoryForecast[];
  history: HistoryForecast[];
};

export type TemperatureType = {
  max_temp: number;
  min_temp: number;
  temp: number;
};

export type WindType = {
  deg: number;
  speed: number;
};

export type SunType = {
  sunrise: number;
  sunset: number;
};

export type DailyData = {
  timestamp: number;
  temperature: TemperatureType;
};

export type HistoryForecast = {
  timestamp: number;
  temperature: {
    temp: number;
    max_temp: number;
    min_temp: number;
  };
};

export type Coordinates = {
  lon: number;
  lat: number;
};
