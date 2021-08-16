import axios from "axios" 

// may need this for reference 
// export const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//   },
// };

export const getCat = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search")
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

// export const getCrypto = async () => {
//   try {
    
//   } catch (error) {
    
//   }
// }

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