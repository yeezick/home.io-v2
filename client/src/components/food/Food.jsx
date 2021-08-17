import { useState, useEffect } from "react";
import { getFood } from "../../services/data";
import {GiFoodTruck} from "react-icons/gi"
import {FiRefreshCcw} from "react-icons/fi"
import "./Food.css";

const Food = () => {
  const [food, setFood] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await getFood();
      setFood(response.recipes[0]);
    };
    fetchFood();
  }, [refresh]);

  // Todo: food summary is written in markdown, please resolve
  // console.log(food)

  return (
    <div>
      <h2 className="user-component-title">Food</h2>

      <div className="food">
        <p className="food-name"> {food.title} </p>
      <FiRefreshCcw className="food-refresh-icon" size={30} onClick={() => setRefresh(!refresh)}/>
        <img className="food-image" src={food.image} alt={food.title} />
        <p className="food-author"><b>By:</b> {food.creditsText}</p>
        <p className="food-serving"><b>Servings:</b> {food.servings}</p>
        <p className="food-time"><b>Ready in:</b> {food.readyInMinutes} minutes</p>
        <p className="food-veg"> <b>Vegetarian:</b> {food.vegetarian ? "Yes" : "No"}</p>
        {/* <p> Summary: {(food.summary)}</p> */}
        <p className="food-url"> <b>Want the full recipe? Follow the food truck!</b></p>
        <a className="food-url-icon" href={food.spoonacularSourceUrl} target="_blank" rel="noreferrer" > <GiFoodTruck size={60}/></a>
      </div>
    </div>
  );
};

export default Food;
