import { useState, useEffect } from "react";
import { getWeather } from "../../services/data";
import "./Weather.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    const getWeatherData = async () => {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;

        const data = await getWeather(lat, long);
        const { current, hourly, minutely, timezone_offset } = data.data;

        const today = new Date().toDateString();

        setDate(today);
        setWeatherData({
          timezone_offset,
          current: current,
          hourly: hourly,
          minutely: minutely,
        });
      });
    };
    getWeatherData();
  }, []);

  if (!weatherData) {
    return null;
  }

  const { current, hourly, minutely } = weatherData;

  const readableTime = (ms) => {
    return new Date(ms * 1000).toLocaleTimeString();
  };

  const prettifyDate = (currDate) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    
    const currDayNum = new Date().getDay();

    const splitDate = currDate.split(" ");
    splitDate[0] = days[currDayNum] + ",";
    splitDate[1] += ".";
    splitDate[2] += ",";
    return splitDate.join(" ");
  };

  const prettifyDesc = (currDesc) => {
    return currDesc[0].toUpperCase() + currDesc.slice(1)
  }

  return (
    <div>
      {/* current */}
      <h3 className="user-component-title"> Today's Forecast</h3>
      <div className="weather">
        <div className="weather-daily">
          <p className="weather-title">{prettifyDate(date)}</p>
          <p className="weather-desc">{prettifyDesc(current.weather[0].description)}</p>
          <p className="weather-temp">Temperature: <br/> <span className="weather-data">{current.temp}</span></p>
          <p className="weather-humidity">Humidity:<span className="weather-data">{current.humidity}%</span></p>
          <p className="weather-sunrise">
            Sunrise:<span className="weather-data">{readableTime(current.sunrise)}</span> 
          </p>
          <p className="weather-sunset">
            Sunset: <span className="weather-data">{readableTime(current.sunset)}</span>
          </p>
        </div>

        {/* hourly 
      - needs to be broken down further by mappign through each hour
      */}
        {/* <div className="weather-hourly">
    <p>Chance of rain: {hourly[0].pop}</p>
    <p>Temp: {hourly[0].temp}</p>
  </div> */}

        {/* minutely */}
        {/* <div className="weather-minutely">
      <p>Chance of rain: {minutely[0].precipitation}</p>
    </div> */}
      </div>
    </div>
  );
};

export default Weather;
