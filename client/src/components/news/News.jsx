import { useState, useEffect } from "react"
import { getNews } from "../../services/data"
import {GiNewspaper} from "react-icons/gi"
import "./News.css"

// todo: halting work on news to prevent reaching maximum call stack for the day, currently displying data for 1 article, should give user option to select from multiple.

const News = () => {

  const [news, setNews] = useState({})
  const [displayNews, setDisplayNews] = useState({
    headline: "",
    author: "",
    date: "",
    text: "",
    url: ""
  })

  useEffect(() => {
    const fetchNews = async () => {
      const response = await getNews();
      setNews(response)
      const dateAsString = new Date(response.data[0].published_at).toLocaleDateString();
      setDisplayNews({
        headline: response.data[0].title,
        author: response.data[0].author,
        date: dateAsString,
        text: response.data[0].description,
        url: response.data[0].url
      })
    }
    fetchNews()
  },[])

  // const handleChange = (e) => {
  //   console.log(e)
  //   const {value} = e.target
  // }
  console.log(news)
  return (
    <div>
      <h3 className="user-component-title">Headlines Around the World</h3>
      <div className="news">
        <h4 className="news-headline">{displayNews.headline}</h4>
        {(displayNews.author === null || displayNews.author === "") ? null : <p className="news-author"><b>Posted by: </b>{displayNews.author}</p>}
        <p className="news-date"> <b>Posted on:</b> {displayNews.date} </p>
        <p className="news-text">{displayNews.text}</p>
        <p className="news-url">Want the full article? Click the newspaper!</p>
        <a className="news-icon" href={displayNews.url} target="_blank" rel="noreferrer"><GiNewspaper size={50}/></a>
        {/* <label htmlFor="news-dropdown">Want another article?</label>
        <select>
          {news.map((article) => (
            <option></option>
          ))
          }
        </select> */}
      </div>
    </div>
  )
}

export default News
