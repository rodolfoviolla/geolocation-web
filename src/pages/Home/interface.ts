import { AddressType } from "../../services/googleMapsApi/interface";
import { IconNameType, WeatherType } from "../../services/openWeatherApi/interface";

export type PropsWithIconNameType = {
  iconName: IconNameType;
}

export type GetFormattedAddressFnType = (coords: GeolocationCoordinates) => Promise<AddressType>;

export type GetFormattedWeatherFnType = (coords: GeolocationCoordinates) => Promise<WeatherType>;