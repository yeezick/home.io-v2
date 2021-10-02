import { useState, useEffect } from "react"
import { getQuote } from "../../services/data"
import "./Quote.css"

const Quote = () => {

  const [quote, setQuote] = useState({})

  useEffect(()=> {
    const fetchQuote = async () => {
      const response = await getQuote()
      setQuote(response)
    }
    fetchQuote()
  },[])
  

  return (
    <div>
      <h3 className="user-component-title"> Enlightenment or Introspection?</h3>
      <div className="quote">
      <p className="quote-text">"{quote.quote}"</p>
      <p className="quote-author">- {quote.author}</p>
      </div>
    </div>
  )
}

export default Quote
