import { useState, useEffect } from "react"
import { getJoke } from "../../services/data"
import "./Joke.css"

const Joke = () => {

  const [joke, setJoke] = useState("")

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await getJoke();
      setJoke(response.joke)
      console.log(response)
    }
    fetchJoke();
  }, [])

  return (
    <div>

      <h3 className="user-component-title">Doctor-prescribed laughter</h3>
      <div className="joke">
      <p className="joke-text">{joke}</p>
      </div>
    </div>
  )
}

export default Joke
