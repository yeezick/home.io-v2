
// components
import Cat from "../../components/cat/Cat.jsx"
import Crypto from "../../components/crypto/Crypto.jsx"
import Fact from "../../components/fact/Fact.jsx"
import Food from "../../components/food/Food.jsx"
import Joke from "../../components/joke/Joke.jsx"
import News from "../../components/news/News.jsx"
import Quote from "../../components/quote/Quote.jsx"
import Todo from "../../components/todo/Todo.jsx"
import Weather from "../../components/weather/Weather.jsx"

import "./UserHome.css"

const UserHome = () => {
  return (
    <div>
      I should be the User's home!
      <Cat/>
      <Crypto/>
      <Fact/>
      <Food/>
      <Joke/>
      <News/>
      <Quote/>
      <Todo/>
      <Weather/>
    </div>
  )
}

export default UserHome
