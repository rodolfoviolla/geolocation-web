import { format } from "date-fns";
import { useEffect, useState } from "react"

import { GOOGLE_MAPS_API_TOKEN, OPEN_WEATHER_API_TOKEN, OPEN_WEATHER_URL } from "../../constants";
import { googleMapsApi } from "../../services/googleMapsApi";
import { openWeatherApi } from "../../services/openWeatherApi";

import { AddressType, GoogleMapsResponseDataType, WeatherType } from "./interface";
import { Address, City, Container, Content, Country, HeaderDate, Description, Footer, Header, HeaderHour, Image, Location, Temperature, Divider } from "./styles";

export function Home() {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [address, setAddress] = useState<AddressType>();
  const [weather, setWeather] = useState<WeatherType>();
  const [temperature, setTemperature] = useState<Number>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords(coords);
    });
  }, []);

  useEffect(() => {
    if (!coords?.latitude || !coords?.longitude) return;
    
    const { latitude, longitude } = coords;

    const getAddress = async () => {
      const { data } = await googleMapsApi.get<GoogleMapsResponseDataType>(`geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_TOKEN}`);
      const fetchedAddress = data.results[0];

      const newAddress = fetchedAddress.address_components
        .filter(({ types }) => types.includes('country') || types.includes('administrative_area_level_2'))
        .reduce((prev, curr) => {
          const newValue = { [curr.types.includes('administrative_area_level_2') ? 'city' : 'country']: curr.short_name };

          return { ...prev, ...newValue };
        }, { city: '', country: '' });
      
      setAddress({ formattedAddress: fetchedAddress.formatted_address, ...newAddress  });
    };

    const getCurrentWeather = async () => {
      const { data } = await openWeatherApi.get(`weather?units=metric&lang=pt_br&lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_TOKEN}`);

      // setWeather({ ...data.weather[0], icon: '01n' });
      setWeather(data.weather[0]);
      setTemperature(Math.round(data.main.temp));
    }

    getAddress();
    getCurrentWeather();
  }, [coords]);

  const hasCoords = coords?.latitude && coords?.longitude;
  const hasAddress = address?.formattedAddress && address?.city && address?.country;
  const hasWeather = weather?.icon && weather?.description;
  const hasTemperature = temperature !== undefined;
  const isLoading = !hasCoords || !hasAddress || !hasWeather || !hasTemperature;

  if (isLoading) return <h3>Carregando...</h3>;

  const currDate = format(new Date(), 'dd LLL');
  const currHour = format(new Date(), 'HH:mm');
  const weatherIconUrl = `${OPEN_WEATHER_URL}/img/wn/${weather.icon}@4x.png`;

  return (
    <Container iconName={weather.icon}>
      <Header iconName={weather.icon}>
        <HeaderHour>{currHour}</HeaderHour>
        <HeaderDate>{currDate}</HeaderDate>
      </Header>
      <Content>
        <Image src={weatherIconUrl} alt="weather icon" />
        <Image />
        <Temperature>{temperature}°C</Temperature>
        <Description>{weather.description}</Description>
      </Content>
      <Divider />
      <Footer>
        <Address>{address.formattedAddress}</Address>
        <Location>
          <City>{address.city}</City>
          <Country>{address.country}</Country>
        </Location>
      </Footer>
    </Container>
  );
}