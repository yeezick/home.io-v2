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
      <p>{joke}</p>
    </div>
  )
}

export default Joke
