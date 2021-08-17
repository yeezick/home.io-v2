import { useState, useEffect } from "react"
import { getQuote } from "../../services/data"
import "./Quote.css"

const Quote = () => {

  const [quote, setQuote] = useState({})

  useEffect(()=> {
    const fetchQuote = async () => {
      const response = await getQuote()
      setQuote(response)
      console.log(response)
    }
    fetchQuote()
  },[])

  return (
    <div>
      <h3 className="user-components-title"> Quote</h3>
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
    </div>
  )
}

export default Quote
