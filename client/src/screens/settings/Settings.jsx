// this component has an example of a useEffect which rerenders when user state successfully loads

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { updateApi } from "../../services/api";
import "./Settings.css";

const Settings = ({ user, setUser }) => {
  const history = useHistory();
  const [apiList, setApiList] = useState({
    cat: false,
    crypto: false,
    cosmic: false,
    food: false,
    joke: false,
    news: false,
    quote: false,
    weather: false,
  });
  // const [weatherLocation, setWeatherLocation]

  useEffect(() => {
    if (user) {
      console.log(user);
      const { cat, crypto, cosmic, food, joke, news, quote, weather } =
        user.apis[0];

      setApiList({ cat, crypto, cosmic, food, joke, news, quote, weather });
    }
  }, [user]);

  if (!user) {
    return <h1> loading</h1>;
  }

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setApiList({
      ...apiList,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = user.apis[0];
    const userApiList = await updateApi(id, apiList);
    console.log("user:", userApiList);
    setUser((prevUser) => {
      return {
        ...prevUser,
        apis: [userApiList],
      };
    });
    history.push(`/welcome`);
  };


  // todo: the following code is meant for implementation of weather component. At this moment,the weather component is on hold because of time constraints. please return to this. 
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [status, setStatus] = useState(null);
  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus('Geolocation is not supported by your browser');
  //   } else {
  //     setStatus('Locating...');
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setStatus(null);
  //       setLat(position.coords.latitude);
  //       setLng(position.coords.longitude);
  //     }, () => {
  //       setStatus('Unable to retrieve your location');
  //     });
  //   }
  // }
  

  return (
    <div>
      <h1>Settings screen</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="checkbox"
          id="cat"
          name="cat"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.cat}
        />
        <label htmlFor="cat">cat</label>

        <input
          type="checkbox"
          id="crypto"
          name="crypto"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.crypto}
        />
        <label htmlFor="crypto">crypto</label>

        <input
          type="checkbox"
          id="cosmic"
          name="cosmic"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.cosmic}
        />
        <label htmlFor="cosmic">cosmic</label>

        <input
          type="checkbox"
          id="food"
          name="food"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.food}
        />
        <label htmlFor="food">food</label>

        <input
          type="checkbox"
          id="joke"
          name="joke"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.joke}
        />
        <label htmlFor="joke">joke</label>

        <input
          type="checkbox"
          id="news"
          name="news"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.news}
        />
        <label htmlFor="news">news</label>

        <input
          type="checkbox"
          id="quote"
          name="quote"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.quote}
        />
        <label htmlFor="quote">quote</label>

        <input
          type="checkbox"
          id="weather"
          name="weather"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.weather}
        />
        <label htmlFor="weather">weather</label>
        <p>If you have chosen to use the weather api, the browser will prompt to use your location, please allow to receive weather data.</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Settings;
