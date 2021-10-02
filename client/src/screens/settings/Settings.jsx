import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { updateApi } from "../../services/api";
import { getUserTodos } from "../../services/todos";
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
    weather: true,
  });

  useEffect(() => {
    if (user && user.apis) {
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
    const { id } = user;
    const userApiList = await updateApi(id, apiList);
    const userTodoList = await getUserTodos(id)
    setUser((prevUser) => {
      return {
        ...prevUser,
        apis: [userApiList],
        todos: [...userTodoList]
      };
    });
    history.push(`/welcome`);
  };

  return (
    <div className="settings">
      <h2 className="settings-title">Decorate your place</h2>
      <form className="settings-form" onSubmit={(e) => handleSubmit(e)}>
        <p className="settings-subtitle">
          We’re not interested in anything You’re not interested in. Below, you
          can toggle what data you’d like displayed on your page and customize
          it before we create your place!
        </p>
    
        <p className="settings-subtext">
          What data would you like to see?
        </p>

        <div className="checklist">
          <div className="checklist-item">
            <input
            className="checklist-input"
              type="checkbox"
              id="cat"
              name="cat"
              onChange={(e) => handleChange(e)}
              checked={!!apiList.cat}
            />
            <label className="checklist-label" htmlFor="cat">

              <b>Cat</b> - random cat photo, (very popular).
            </label>
          </div>

          <div className="checklist-item">
            <input
            className="checklist-input"
              type="checkbox"
              id="crypto"
              name="crypto"
              onChange={(e) => handleChange(e)}
              checked={!!apiList.crypto}
            />
            <label className="checklist-label" htmlFor="crypto">
              <b>Crypto</b> - a list of the top 10 trending crypto currencies.
            </label>
          </div>

          <div className="checklist-item">
            <input
            className="checklist-input"
              type="checkbox"
              id="cosmic"
              name="cosmic"
              onChange={(e) => handleChange(e)}
              checked={!!apiList.cosmic}
            />
            <label className="checklist-label" htmlFor="cosmic">
              <b>Cosmic</b> - NASA's photo of the day (with details).
            </label>
          </div>

          <div className="checklist-item">
            <input
            className="checklist-input"
              type="checkbox"
              id="food"
              name="food"
              onChange={(e) => handleChange(e)}
              checked={!!apiList.food}
            />
            <label className="checklist-label" htmlFor="food">
              <b>Food</b> - if you're not sure what's for dinner, this can help you
              out.
            </label>
          </div>

          <div className="checklist-item">
            <input
            className="checklist-input"
              type="checkbox"
              id="joke"
              name="joke"
              onChange={(e) => handleChange(e)}
              checked={!!apiList.joke}
            />
            <label className="checklist-label" htmlFor="joke"><b>Joke</b> - don't worry, they're SFW.</label>
          </div>

          <div className="checklist-item">
            <input
            className="checklist-input"
              type="checkbox"
              id="news"
              name="news"
              onChange={(e) => handleChange(e)}
              checked={!!apiList.news}
            />
            <label className="checklist-label" htmlFor="news">
              <b>News</b> - headlines from around the world!
            </label>
          </div>

          <div className="checklist-item">
            <input
            className="checklist-input"
              type="checkbox"
              id="quote"
              name="quote"
              onChange={(e) => handleChange(e)}
              checked={!!apiList.quote}
            />
            <label className="checklist-label" htmlFor="quote">
              <b>Quote</b> - sometimes it's a pick-me-up, sometimes it's an incentive
              to get introspective.
            </label>
          </div>

          {/* <input
          type="checkbox"
          id="weather"
          name="weather"
          onChange={(e) => handleChange(e)}
          checked={!!apiList.weather}
          />
          <label htmlFor="weather">weather</label> 
        <p>If you have chosen to use the weather api, the browser will prompt to use your location, please allow to receive weather data.</p> */}
        </div>
        <button className="settings-button" type="submit">Take me home</button>
      </form>
    </div>
  );
};

export default Settings;
