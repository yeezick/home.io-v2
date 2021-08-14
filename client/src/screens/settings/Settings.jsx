import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import { updateApi } from "../../services/api"
import "./Settings.css"

const Settings = ({user}) => {

  const history = useHistory();
  const [apiList, setApiList] = useState({
    cat: false,
    crypto: false,
    fact: false,
    food: false,
    joke: false,
    news: false,
    quote: false,
    weather: false
  })
  const {id} = user.apis[0]

  const handleChange = (e) => {
    const {name, value} = e.target
    setApiList({
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() 
    await updateApi(id, apiList)
    history.push(`/welcome`)
  }
  // console.log("before:", user.apis)

  useEffect(() => {
    setApiList(user.apis[0])
  },[])

  return (
        <div>

      <h1>Settings screen</h1>
      <form onSubmit={(e) => handleSubmit(e)}>


        <button type="submit">
          Submit
        </button>
      </form>
        </div>
  )
}

export default Settings
