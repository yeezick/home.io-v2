import { useState, useEffect } from "react";
import { getWeather } from "../../services/data";
import "./Weather.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    const getWeatherData = async () => {
       await navigator.geolocation.getCurrentPosition((position) => {
         setLong(position.coords.longitude);
         setLat(position.coords.latitude);
        });
        const weather =  getWeather(lat, long);
      };
      getWeatherData();
    },[]);
  // const [weather, setWeather] = useState({})
  // if ("navigator" in geolocation) {

  //   navigator.geolocation((position) => {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //   })
  // }

  return <div>I'm the weather!</div>;
};

export default Weather;
