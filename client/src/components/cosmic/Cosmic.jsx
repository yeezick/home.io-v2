import {useState, useEffect } from "react"
import { getCosmic } from "../../services/data"

import "./Cosmic.css"

const Cosmic = () => {

  const [cosmicData, setCosmicData] = useState("")

  useEffect(() => {
  const fetchCosmic = async () => {
    const response = await getCosmic();
    console.log(response)
    setCosmicData(response)
  }
  fetchCosmic()
  }, [])

  return (
    <div>
      <h3>Cosmic</h3>
      <p> Title: {cosmicData.title}</p>
      <img className="nasa-picture" src={cosmicData.url} alt="nasa's picture of the day"/>
      <p>Text: {cosmicData.explanation}</p>
      <p>Copyright: {cosmicData.copyright}</p>

    </div>
  )
}

export default Cosmic
