import { useEffect, useState } from "react"
import { GOOGLE_MAPS_API_TOKEN, OPEN_WEATHER_API_TOKEN, OPEN_WEATHER_URL } from "./constants";
import { googleMapsApi } from "./services/googleMapsApi";
import { openWeatherApi } from "./services/openWeatherApi";

export type WeatherType = {
  description: string;
	icon: string;
};

const capitalizeFirstLetter = (string: string) => string && string[0].toUpperCase() + string.slice(1);

export function App() {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [address, setAddress] = useState('');
  const [weather, setWeather] = useState<WeatherType>();
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords(coords);
    });
  }, []);

  useEffect(() => {
    if (!coords?.latitude || !coords?.longitude) return;    
    
    const { latitude, longitude } = coords;

    const getAddress = async () => {
      const { data } = await googleMapsApi.get(`geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_TOKEN}`);

      setAddress(data.results[0].formatted_address);
    };

    const getCurrentWeather = async () => {
      const { data } = await openWeatherApi.get(`weather?units=metric&lang=pt_br&lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_TOKEN}`);

      setWeather(data.weather[0]);
      setTemperature(Math.round(data.main.temp));
    }

    getAddress();
    getCurrentWeather();
  }, [coords]);

  const isLoading = !coords?.latitude || !coords?.longitude || !address || !weather?.icon || !weather?.description;

  return isLoading 
    ? <h3>Carregando...</h3> 
    : (
      <div>
        <h3>Coordenadas</h3>
        <p>
          <b>Latitude</b>: {coords.latitude}
        </p>
        <p>
          <b>Longitude</b>: {coords.longitude}
        </p>
        <p>
          <b>Endereço</b>: {address}
        </p>
        <img src={`${OPEN_WEATHER_URL}/img/wn/${weather.icon}@2x.png`} alt={'Weather icon'} />
        <p>
          <b>Temperatura</b>: {temperature}°C
        </p>
        <p>
          <b>Tempo</b>: {capitalizeFirstLetter(weather.description)}
        </p>
      </div>
    );
}