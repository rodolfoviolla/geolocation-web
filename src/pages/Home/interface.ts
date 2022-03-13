import { themeColorsByIconName } from "./props";

type IconNameType = keyof typeof themeColorsByIconName;

export type WeatherType = {
	icon: IconNameType;
  description: string;
};

export type GoogleMapsResponseDataType = {
  results: {
    formatted_address: string;
    address_components: {
      short_name: string;
      types: string[];
    }[]
  }[]
};

export type AddressType = {
  formattedAddress: string;
  city: string;
  country: string;
}

export type PropsWithIconNameType = {
  iconName: IconNameType;
}