const API_KEY = "228f92c07f860b0fe3b016594116f17a";

export const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;

export const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?exclude={minutely,hourly,alerts}&units=metric&appid=${API_KEY}`;

export const historyURL = `https://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&appid=${API_KEY}`;
