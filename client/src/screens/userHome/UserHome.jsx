// components
import Cat from "../../components/cat/Cat.jsx";
import Crypto from "../../components/crypto/Crypto.jsx";
import Fact from "../../components/fact/Fact.jsx";
import Food from "../../components/food/Food.jsx";
import Joke from "../../components/joke/Joke.jsx";
import News from "../../components/news/News.jsx";
import Quote from "../../components/quote/Quote.jsx";
import Todo from "../../components/todo/Todo.jsx";
import Weather from "../../components/weather/Weather.jsx";

import "./UserHome.css";

const UserHome = ({ user }) => {
  if (!user) {
    return <h1> loading....</h1>;
  }

  let apiList = user.apis[0];
  console.log("i am user apiList:" ,user.apis[0])
  return (
    <div>
      <h1>I should be the User's home!</h1>
      {!apiList.cat ? null : <Cat />}
      {!apiList.crypto ? null : <Crypto />}
      {!apiList.fact ? null : <Fact />}
      {!apiList.food ? null : <Food />}
      {!apiList.joke ? null : <Joke />}
      {!apiList.news ? null : <News />}
      {!apiList.quote ? null : <Quote />}
      {!apiList.todo ? null : <Todo />}
      {!apiList.weather ? null : <Weather />}
    </div>
  );
};

export default UserHome;
