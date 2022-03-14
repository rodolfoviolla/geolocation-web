export type IconNameType = 
  | '01d' 
  | '01n' 
  | '02d' 
  | '02n' 
  | '03d' 
  | '03n' 
  | '04d' 
  | '04n' 
  | '09d' 
  | '09n' 
  | '10d' 
  | '10n' 
  | '11d' 
  | '11n' 
  | '13d' 
  | '13n' 
  | '50d' 
  | '50n';

export type WeatherType = {
	icon: IconNameType;
  description: string;
  temperature: number;
};

export type OpenWeatherResponseDataType = {
  main: {
    temp: number;
  };
  weather: WeatherType[];
}

export type GetCurrentWeatherByCoordsFnType = (args: GeolocationCoordinates) => Promise<OpenWeatherResponseDataType>;