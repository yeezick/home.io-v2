import axios from "axios" 

// may need this for reference 
// export const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//   },
// };

export const getCatPic = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search")
    const imgUrl = response.data[0].url;
    return imgUrl
  } catch (error) {
    console.log(error)
  }
}

export const getCrypto = async () => {
  try {
    const response = await axios.get("http://cors-lite.herokuapp.com/https://api.coincap.io/v2/assets?limit=10") 
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// export const getFact = async () => {
//   try {
    
//   } catch (error) {
    
//   }
// }

// export const getFood = async () => {
//   try {
    
//   } catch (error) {
    
//   }
// }

// export const getJoke = async () => {
//   try {
    
//   } catch (error) {
    
//   }
// }

// export const getNews = async () => {
//   try {
    
//   } catch (error) {
    
//   }
// }

// export const getQuote = async () => {
//   try {
    
//   } catch (error) {
    
//   }
// }

// export const getWeather = async () => {
//   try {
    
//   } catch (error) {
    
//   }
// }