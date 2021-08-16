import { useState, useEffect } from "react"
import { getFood } from "../../services/data"
import  "./Food.css"

const Food = () => {

  const [food, setFood] = useState({})
  const [refresh, setRefresh] = useState(false)

   useEffect(() => {
    const fetchFood = async () => {
      const response = await getFood()
      setFood(response.recipes[0])
    }
    fetchFood();
  }, [refresh])

  // Todo: food summary is written in markdown, please resolve
  // console.log(food)

  return (
    <div>
      <h2>Food:</h2>
      <img src={food.image} alt={food.title}/>
      <p> Name: {food.title} </p>
      <p>Author: {food.creditsText}</p>
      <p>Servings: {food.servings}</p> 
      <p>Cook time: {food.readyInMinutes}</p> 
      <p> Vegetarian: {(food.vegetarian) ? "Yes" : "No"}</p>
      {/* <p> Summary: {(food.summary)}</p> */}
      <p> URL to full recipe: {food.spoonacularSourceUrl}</p>
    <button onClick={() => setRefresh(!refresh)}>Refresh</button>
    </div>
  )
}

export default Food
