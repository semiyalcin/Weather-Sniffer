export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: string;
  name: string;
  cod: number;
}

export interface Result {
  city: string;
  feelsLike: number;
  humidity: number;
  pressure: number;
  temp: number;
  tempMax: number;
  tempMin: number;
  weather: string;
  sunset: string;
  sunrise: string;
  cloudiness: number;
}
