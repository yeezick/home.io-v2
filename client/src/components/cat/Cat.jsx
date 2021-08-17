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
      <h3 className="user-component-title">Cats</h3>
      <div className="cat">
      <p className="cat-title">It is really, <b><i>really</i></b> hard to get cuter than this</p>
      <img className="cat-pic" src={catPic} alt="random cat"/>
      </div>
    </div>
  )
}

export default Cat