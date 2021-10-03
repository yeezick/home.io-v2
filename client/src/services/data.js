import axios from "axios";

// may need this for reference
// export const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//   },
// };

const cosmicKey = process.env.REACT_APP_COSMIC;
const foodKey = process.env.REACT_APP_FOOD;
const newsKey = process.env.REACT_APP_NEWS;
const weatherKey = process.env.REACT_APP_WEATHER;

export const getCatPic = async () => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    const imgUrl = response.data[0].url;
    return imgUrl;
  } catch (error) {
    console.log(error);
  }
};

export const getCrypto = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCosmic = async () => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${cosmicKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFood = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${foodKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getJoke = async () => {
  try {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getNews = async () => {
  try {
    const response = await axios.get(
      `https://api.mediastack.com/v1/news?access_key=${newsKey}&languages=en`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuote = async () => {
  try {
    const response = await axios.get(
      "https://inspiration.goprogram.ai/"
    );
    return response.data;
  } catch (error) {}
};

// weather calls needs to be made on front end due to weather app location necessity
export const getWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weatherKey}`
    );
      return response
  } catch (error) {}
};
