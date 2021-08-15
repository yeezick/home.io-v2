import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateApi, userApiList } from "../../services/api";
import "./Settings.css";

const Settings = ({ user }) => {
  let params = useParams();
  console.log("params:",params);

  const history = useHistory();
  const [apiList, setApiList] = useState({
    cat: false,
    crypto: false,
    fact: false,
    food: false,
    joke: false,
    news: false,
    quote: false,
    weather: false,
  });

  useEffect(() => {
    const setUserList = async () => {
      const id = localStorage.getItem("user_id")
      history.push(`/settings/${id}`)
      const userList = await userApiList(id)
      console.log(userList)
    }
    setUserList()
  },[])

  if (!user) {
    return <h1> loading</h1>;
  }
  // todo: attempting to auto-check checkboxes if user already has them toggled. need to also add value attribute to jsx.
 

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(e)
    setApiList({
      ...apiList,
      [name]: checked,
    });
  };
  // console.log("apiList:", apiList);
  // console.log("userApiList", user.apis[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user:", user);
    const { id } = user.apis[0];
    await updateApi(id, apiList);
    history.push(`/welcome`);
  };

  return (
    <div>
      <h1>Settings screen</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="checkbox"
          id="cat"
          name="cat"
          onChange={(e) => handleChange(e)}
          // checked
        />
        <label htmlFor="cat">cat</label>

        <input
          type="checkbox"
          id="crypto"
          name="crypto"
          onChange={(e) => handleChange(e)}
          // checked
        />
        <label htmlFor="crypto">crypto</label>

        <input
          type="checkbox"
          id="fact"
          name="fact"
          onChange={(e) => handleChange(e)}
          // checked
        />
        <label htmlFor="fact">fact</label>

        <input
          type="checkbox"
          id="food"
          name="food"
          onChange={(e) => handleChange(e)}
          // checked
        />
        <label htmlFor="food">food</label>

        <input
          type="checkbox"
          id="joke"
          name="joke"
          onChange={(e) => handleChange(e)}
          // checked
        />
        <label htmlFor="joke">joke</label>

        <input
          type="checkbox"
          id="news"
          name="news"
          onChange={(e) => handleChange(e)}
          // checked
        />
        <label htmlFor="news">news</label>

        <input
          type="checkbox"
          id="quote"
          name="quote"
          onChange={(e) => handleChange(e)}
          // checked
        />
        <label htmlFor="quote">quote</label>

        <input
          type="checkbox"
          id="weather"
          name="weather"
          onChange={(e) => handleChange(e)}
          // checked
        />
        <label htmlFor="weather">weather</label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Settings;
