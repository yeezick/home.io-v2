import { useState } from "react";
import { addTodo } from "../../services/todos";

import TodoItem from "./todoItem/TodoItem"
import "./Todo.css";

const Todo = ({ user }) => {
  const [todoForm, setTodoForm] = useState({
    input: "",
    user_id: 0
  })

  if (!user) {
    return <p> loading</p>;
  }
  console.log(user)
  const handleChange = (e) => {
    const {value} = e.target
    setTodoForm({
      input: value,
      user_id: user.id
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addTodo(todoForm, user.id)
  }


  return (
    <div>
      <h3>On your agenda:</h3>
      {user.todos.map((item, id) => (
        <TodoItem item={item} key={id}/>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Todo;
