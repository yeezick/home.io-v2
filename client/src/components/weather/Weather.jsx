import { useState, useEffect } from "react";
import { getWeather } from "../../services/data";
import "./Weather.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    const getWeatherData = async () => {
      await navigator.geolocation.getCurrentPosition((position) => {
        setLong(position.coords.longitude);
        setLat(position.coords.latitude);
      });
      const data = await getWeather(lat, long);
      const { current, hourly, minutely } = data.data;
      setWeatherData({
        current: current,
        hourly: hourly,
        minutely: minutely,
      });
    };
    getWeatherData();
  }, []);
  if (!weatherData) {
    return <h2> loading....</h2>;
  }
  console.log(weatherData);
  // for current
  const { current, hourly, minutely } = weatherData;

  return (
    <div>
      {/* current */}
      <div className="weather-daily">
        <p>Desc: {current.weather[0].description}</p>
        <p>Temp: {current.temp} </p>
        <p>Feels like: {current.feels_like}</p>
        <p>humidity: {current.humidity}</p>
        <p>Sunrise: {current.sunrise} </p>
        <p>Sunset: {current.sunset}</p>
      </div>

      {/* hourly 
      - needs to be broken down further by mappign through each hour
      */}
      <div className="weather-hourly">
    <p>Chance of rain: {hourly[0].pop}</p>
    <p>Temp: {hourly[0].temp}</p>
      </div>

      {/* minutely */}
      <div className="weather-minutely">
      <p>Chance of rain: {minutely[0].precipitation}</p>
      </div>
    </div>
  );
};

export default Weather;
