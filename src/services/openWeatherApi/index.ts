import axios from 'axios';

import { OPEN_WEATHER_API_URL } from '../../constants';

export const openWeatherApi = axios.create({
  baseURL: OPEN_WEATHER_API_URL
});