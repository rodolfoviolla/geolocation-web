import { format, getHours } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react"
import PuffLoader from 'react-spinners/PuffLoader';
import { Button } from "../../components/Button";

import { OPEN_WEATHER_URL } from "../../constants";
import { AddressType } from "../../services/googleMapsApi/interface";
import { WeatherType } from "../../services/openWeatherApi/interface";
import { LoadingHomePagePropsType } from "./interface";
import { getFormattedAddress, getFormattedWeather } from "./props";

import { Address, City, Container, Content, Country, HeaderDate, Description, Footer, Header, HeaderHour, Image, Location, Temperature, Divider, spinnerProps } from "./styles";

function LoadingHomePage({ isDayTime, formattedCurrHour, formattedCurrDate }: LoadingHomePagePropsType) {
  return (
    <Container iconName={isDayTime ? '01d' : '01n'}>
      <Header iconName={isDayTime ? '01d' : '01n'}>
        <HeaderHour>{formattedCurrHour}</HeaderHour>
        <HeaderDate>{formattedCurrDate}</HeaderDate>
      </Header>
      <Content>
        <PuffLoader {...spinnerProps(isDayTime ? '01d' : '01n')} />
        <Description>Carregando</Description>
        <Button iconName={isDayTime ? '01d' : '01n'} text="Atualizar" disabled />
      </Content>
      <Divider />
      <Footer />
    </Container>
  );
}

export function Home() {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [address, setAddress] = useState<AddressType>();
  const [weather, setWeather] = useState<WeatherType>();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const fetchDataFromCoords = useCallback(async (coords?: GeolocationCoordinates) => {
    if (!coords?.latitude || !coords?.longitude) return;
    
    const fetchedAddress = await getFormattedAddress(coords);
    const fetchedWeather = await getFormattedWeather(coords);

    setAddress(fetchedAddress);
    setWeather(fetchedWeather);
  }, []);

  useEffect(() => {
    getCurrentCoords();
  }, []);

  useEffect(() => {
    fetchDataFromCoords(coords);
  }, [coords, fetchDataFromCoords]);

  const getCurrentCoords = () => {
    setCoords(undefined);
    setAddress(undefined);
    setWeather(undefined);
    setIsImageLoaded(false);

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords(coords);
    });
  };

  const weatherIconUrl = useMemo(() => weather?.icon ? `${OPEN_WEATHER_URL}/img/wn/${weather.icon}@4x.png` : '', [weather?.icon]);

  const hasCoords = coords?.latitude && coords?.longitude;
  const hasAddress = address?.formattedAddress && address?.city && address?.country;
  const hasWeather = weather?.icon && weather?.description;
  const hasTemperature = weather?.temperature !== undefined;
  const isLoading = !hasCoords || !hasAddress || !hasWeather || !hasTemperature;

  const formattedCurrHour = format(new Date(), 'HH:mm');
  const formattedCurrDate = format(new Date(), 'dd LLL');
  const currHour = getHours(new Date());
  const isDayTime = currHour > 6 && currHour < 19;

  if (isLoading) return <LoadingHomePage isDayTime={isDayTime} formattedCurrHour={formattedCurrHour} formattedCurrDate={formattedCurrDate} />;

  return (
    <Container iconName={weather.icon}>
      <Header iconName={weather.icon}>
        <HeaderHour>{formattedCurrHour}</HeaderHour>
        <HeaderDate>{formattedCurrDate}</HeaderDate>
      </Header>
      <Content>
        <Image src={weatherIconUrl} alt="weather icon" onLoad={() => setIsImageLoaded(true)} hidden={!isImageLoaded} />
        {!isImageLoaded && <PuffLoader {...spinnerProps(weather.icon)} />}
        
        <Temperature>{weather.temperature}°C</Temperature>
        <Description>{weather.description}</Description>
        <Button iconName={weather.icon} text="Atualizar" onClick={getCurrentCoords} />
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