import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react"
import PuffLoader from 'react-spinners/PuffLoader';

import { OPEN_WEATHER_URL } from "../../constants";
import { AddressType } from "../../services/googleMapsApi/interface";
import { WeatherType } from "../../services/openWeatherApi/interface";
import { getFormattedAddress, getFormattedWeather } from "./props";

import { Address, City, Container, Content, Country, HeaderDate, Description, Footer, Header, HeaderHour, Image, Location, Temperature, Divider, spinnerProps } from "./styles";

export function Home() {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [address, setAddress] = useState<AddressType>();
  const [weather, setWeather] = useState<WeatherType>();

  const fetchDataFromCoords = async (coords?: GeolocationCoordinates) => {
    if (!coords?.latitude || !coords?.longitude) return;
    
    const fetchedAddress = await getFormattedAddress(coords);
    const fetchedWeather = await getFormattedWeather(coords);

    setAddress(fetchedAddress);
    setWeather(fetchedWeather);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords(coords);
    });
  }, []);

  useEffect(() => {
    fetchDataFromCoords(coords);
  }, [coords]);

  const weatherIconUrl = useMemo(() => weather?.icon ? `${OPEN_WEATHER_URL}/img/wn/${weather.icon}@4x.png` : '', [weather?.icon]);

  const hasCoords = coords?.latitude && coords?.longitude;
  const hasAddress = address?.formattedAddress && address?.city && address?.country;
  const hasWeather = weather?.icon && weather?.description;
  const hasTemperature = weather?.temperature !== undefined;
  const isLoading = !hasCoords || !hasAddress || !hasWeather || !hasTemperature;

  if (isLoading) return <h3>Carregando...</h3>;

  const currDate = format(new Date(), 'dd LLL');
  const currHour = format(new Date(), 'HH:mm');

  return (
    <Container iconName={weather.icon}>
      <Header iconName={weather.icon}>
        <HeaderHour>{currHour}</HeaderHour>
        <HeaderDate>{currDate}</HeaderDate>
      </Header>
      <Content>
        {!weatherIconUrl ? <Image src={weatherIconUrl} alt="weather icon" /> : <PuffLoader {...spinnerProps(weather.icon)} />}
        <Temperature>{weather.temperature}°C</Temperature>
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