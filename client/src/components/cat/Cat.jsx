import { useEffect, useState } from "react"
import { getCatPic } from "../../services/data"
import "./Cat.css"

const Cat = () => {

  const [catPic, setCatPic] = useState("")

  useEffect(() => {
    const fetchCat = async () => {
      const imgUrl = await getCatPic();
       setCatPic(imgUrl)
    }
    fetchCat()
  },[])

  return (
    <div>
      <img className="cat-pic" src={catPic} alt="random cat"/>
    </div>
  )
}

export default Cat