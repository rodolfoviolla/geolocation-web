export type GoogleMapsResponseResultsType = {
  formatted_address: string;
  address_components: {
    short_name: string;
    types: string[];
  }[]
}

export type GoogleMapsResponseDataType = {
  results: GoogleMapsResponseResultsType[];
};

export type AddressType = {
  formattedAddress: string;
  city: string;
  country: string;
}

export type GetAddressByCoordsFnType = (coords: GeolocationCoordinates) => Promise<GoogleMapsResponseDataType>;