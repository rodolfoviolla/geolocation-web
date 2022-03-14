import axios from 'axios';

import { GOOGLE_MAPS_API_URL } from '../../constants';

export const googleMapsApi = axios.create({
  baseURL: GOOGLE_MAPS_API_URL
});