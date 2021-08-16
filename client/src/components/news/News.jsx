import { useState, useEffect } from "react"
import { getNews } from "../../services/data"
import "./News.css"

const News = () => {

  const [news, setNews] = useState({})
  useEffect(() => {
    const fetchNews = async () => {
      const response = await getNews();
      console.log(response)
    }
    fetchNews()
  },[])

  return (
    <div>
      I am the news.
    </div>
  )
}

export default News
