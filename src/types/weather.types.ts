export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  name: string;
  weather: Weather[];
  main: MainWeather;
  wind: Wind;
  sys: Sys;
  dt: number;
}

export interface ForecastItem {
  dt: number;
  main: MainWeather;
  weather: Weather[];
  dt_txt: string;
}

export interface ForecastData {
  list: ForecastItem[];
}