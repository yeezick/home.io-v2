import { useState } from "react";
import { addTodo } from "../../services/todos";

import TodoItem from "./todoItem/TodoItem"
import "./Todo.css";

const Todo = ({ user, setUser }) => {
  const [todoForm, setTodoForm] = useState({
    input: "",
    user_id: 0
  })

  if (!user) {
    return <p> loading</p>;
  }

  const handleChange = (e) => {
    const {value} = e.target
    setTodoForm({
      input: value,
      user_id: user.id
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newTodo = await addTodo(todoForm, user.id)
    setUser((prevState) => {
      return {
        ...prevState,
        todos: [...user.todos, newTodo]
      }
    })
    setTodoForm({
      input: "",
      user_id: 0
    })
  }

  return (
    <div>
      <h3>On your agenda:</h3>
      {user.todos.map((item, id) => (
        <TodoItem setUser={setUser} user={user} item={item} key={id}/>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          onChange={(e) => {
            handleChange(e);
          }}
          value={todoForm.input}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Todo;
