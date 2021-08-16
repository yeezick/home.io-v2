import { useEffect } from "react"
import { getCat } from "../../services/data"
import "./Cat.css"

const Cat = () => {

  useEffect(() => {
    const fetchCat = async () => {
      const response = getCat();
      console.log(response)
    }
    fetchCat()
  },[])

  return (
    <div>
      I'm a cat
    </div>
  )
}

export default Cat
