import {useState,useEffect} from "react"
import { getCrypto } from "../../services/data"
import "./Crypto.css"


const Crypto = () => {

  const [cryptoData, setCryptoData] = useState([])
  
  useEffect(() => {
    const fetchCrypto = async () => {
      const response = await getCrypto()
      if (response === "undefined") {
        setTimeout(()=>{
          fetchCrypto()
        }, 240000)
      }
      setCryptoData(response.data)
    }
    fetchCrypto()
  }, [])
  if (!cryptoData) {
    <h2> loading </h2>
  }
  return (
    <div>
      {cryptoData.map((crypto, id) => (
        <div key={id}>
          <p>Name: {crypto.name}</p>
          <p>Symbol: {crypto.symbol} </p>
          <p> Price: {crypto.priceUsd} </p>
          <p>Percent change over 24 hours: {crypto.changePercent24Hr}</p>
          <hr/>
        </div>
  ))}
    </div>
  )
}

export default Crypto
