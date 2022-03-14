import { GOOGLE_MAPS_API_TOKEN } from "../../constants";

import { googleMapsApi } from ".";
import { GetAddressByCoordsFnType, GoogleMapsResponseDataType } from "./interface";

const getAddressByCoords: GetAddressByCoordsFnType = async ({ latitude, longitude }) => {
  const { data } = await googleMapsApi.get<GoogleMapsResponseDataType>(
    `geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_TOKEN}`
  );

  return data;
}

const resources = {
  getAddressByCoords,
};

export default resources;