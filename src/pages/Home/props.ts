import { GoogleMapsResponseResultsType } from "../../services/googleMapsApi/interface";
import googleMaps from "../../services/googleMapsApi/resources";
import openWeather from "../../services/openWeatherApi/resources";

import { GetFormattedAddressFnType, GetFormattedWeatherFnType } from "./interface";

const formatLocationData = (fetchedAddress: GoogleMapsResponseResultsType) => fetchedAddress.address_components
  .filter(({ types }) => types.includes('country') || types.includes('administrative_area_level_2'))
  .reduce((prev, curr) => {
    const newValue = { [curr.types.includes('administrative_area_level_2') ? 'city' : 'country']: curr.short_name };

    return { ...prev, ...newValue };
  }, { city: '', country: '' });

export const getFormattedAddress: GetFormattedAddressFnType = async (coords) => {
  const { results } = await googleMaps.getAddressByCoords(coords);
  const fetchedAddress = results[0];
  const location = formatLocationData(fetchedAddress);

  return { formattedAddress: fetchedAddress.formatted_address, ...location  };
};

export const getFormattedWeather: GetFormattedWeatherFnType = async (coords) => {
  const { main: { temp }, weather } = await openWeather.getCurrentWeatherByCoords(coords);

  return { 
    // ...{ ...weather[0], icon: '01d' },
    ...weather[0], 
    temperature: Math.round(temp) 
  };
}