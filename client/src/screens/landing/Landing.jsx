import { Link } from "react-router-dom";

import Weather from "../../components/weather/Weather"
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <section className="landing">
        <div className="landing-content">
          <h2 className="landing-title">
            Home is where <i>you</i> are
          </h2>
          <p className="landing-text">Now you never have to be far.</p>
        </div>
      </section>
      <hr />
      <section className="description">
        <h2 className="description-title">Welcome Home</h2>
        <div className="description-info">
          <p className="description-info-text">
            It’s in our interest to give you only the things you want. That’s
            why we only display data You think is relevant from our broad list
            of public API’s including:
          </p>
          <ul className="description-list">
            <li>Recipes for food</li>
            <li>NASA's picture of the day</li>
            <li>Top 10 CryptoCurrency</li>
            <li>& even the weather!</li>
          </ul>
          <Weather />
        </div>
        <div className="description-incentive">
          <p>
            There’s rarely a bad time to clean your room, just as there’s always
            a good time to redesign it! <br /> <br />
            Home.io gives you the opportunity to decorate your safe place in a
            way that’s personal to you. This way, you always feel right at home.
          </p>
        </div>
      </section>
      <hr />
      <section className="registration">
        <div className="registration-text">
          <p>
            You deserve a safe place, wherever you go. <br />
            <br />
            Why not take it with you?
          </p>
        </div>
        <Link to="/signup">
          <button className="registration-button">Create your space</button>
        </Link>
      </section>
      <hr />
    </div>
  );
};

export default Landing;
