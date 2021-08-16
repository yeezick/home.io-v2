import { useState, useEffect } from "react";
import { addTodo } from "../../services/todos";

import TodoItem from "./todoItem/TodoItem";
import "./Todo.css";

const Todo = ({ user, toggleRender, setToggleRender }) => {
  const [todoForm, setTodoForm] = useState({
    input: "",
    user_id: 0,
  });

  useEffect(() => {
    console.log("pls")
  }, [])

  if (!user) {
    return <p> loading</p>;
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoForm({
      input: value,
      user_id: user.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo(todoForm, user.id);
    await setToggleRender(!toggleRender);
  };

  return (
    <div>
      <h3>On your agenda:</h3>
      {user.todos.map((item, id) => (
        <TodoItem
          item={item}
          key={id}
          toggleRender={toggleRender}
          setToggleRender={setToggleRender}
        />
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
