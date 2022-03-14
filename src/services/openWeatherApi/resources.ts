import { OPEN_WEATHER_API_TOKEN } from "../../constants";

import { openWeatherApi } from ".";
import { GetCurrentWeatherByCoordsFnType, OpenWeatherResponseDataType } from "./interface";

const getCurrentWeatherByCoords: GetCurrentWeatherByCoordsFnType = async ({ latitude, longitude }) => {
  const { data } = await openWeatherApi.get<OpenWeatherResponseDataType>(`weather?units=metric&lang=pt_br&lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_TOKEN}`);

  return data;
}

const resources = {
  getCurrentWeatherByCoords,
};

export default resources;