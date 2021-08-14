import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { updateApi } from "../../services/api";
import "./Settings.css";

const Settings = ({ user }) => {
  const history = useHistory();
  const [apiList, setApiList] = useState({
    cat: false,
    crypto: false,
    fact: false,
    food: false,
    joke: false,
    news: false,
    quote: false,
    weather: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setApiList({
      ...apiList,
      [name]: checked,
    });
  };
  console.log("apiList:", apiList);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = user.apis[0];
    await updateApi(id, apiList);
    history.push(`/welcome`);
  };

  return (
    <div>
      <h1>Settings screen</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="cat">cat</label>
        <input
          type="checkbox"
          id="cat"
          name="cat"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="crypto">crypto</label>
        <input
          type="checkbox"
          id="crypto"
          name="crypto"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="fact">fact</label>
        <input
          type="checkbox"
          id="fact"
          name="fact"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="food">food</label>
        <input
          type="checkbox"
          id="food"
          name="food"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="joke">joke</label>
        <input
          type="checkbox"
          id="joke"
          name="joke"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="news">news</label>
        <input
          type="checkbox"
          id="news"
          name="news"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="quote">quote</label>
        <input
          type="checkbox"
          id="quote"
          name="quote"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="weather">weather</label>
        <input
          type="checkbox"
          id="weather"
          name="weather"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor=""></label>
        <input
          type="checkbox"
          id=""
          name=""
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Settings;
