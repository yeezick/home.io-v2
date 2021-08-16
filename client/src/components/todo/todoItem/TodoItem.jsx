import { useState, useEffect } from "react";
import { deleteTodo, updateTodo } from "../../../services/todos";

import "./TodoItem.css";

// todo:
// make todo item deleteable
// item should be deleted from user list on clickck of x (button for now)
// make todo item editable
// item shoould turn into input box on click of "penci icon"(button for now)

const TodoItem = ({ item, user, setUser }) => {
  // console.log("item:", item);
  const [updateTodoForm, setUpdateTodoForm] = useState({
    input: "",
    user_id: 0,
  });

  const [editState, setEditState] = useState(false);

  useEffect(() => {
    if (item) {
      setUpdateTodoForm({
        input: item.input,
        user_id: item.user_id,
      });
    }
  }, [editState, item]);

  const handleDelete = async () => {
    const deletedItem = await deleteTodo(item.id);
    // console.log(deletedItem)
    if (deletedItem === "DELETED") {
      setUser((prevState) => {
        return {
          ...prevState,
          todos: user.todos.filter((todo) => todo.id !== item.id)
        }
      })
    }
      
  };

  const handleEdit = async (e) => {
    const { value } = e.target;
    setUpdateTodoForm({
      input: value,
      user_id: item.user_id,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const todoItem = await updateTodo(item.id, updateTodoForm);
    setUser((prevState) => {
      return {
        ...prevState,
        todos: user.todos.map((todo)=> todo.id === item.id ? todoItem : todo)
      }
    })
    setEditState(!editState);
  };

  return (
    <div>
      <button onClick={handleDelete}>delete</button>
      {!editState ? (
        <p onClick={() => setEditState(!editState)}>{item.input}</p>
      ) : (
        <form onSubmit={(e) => handleUpdate(e)}>
          <input
            type="text"
            value={updateTodoForm.input}
            onChange={(e) => {
              handleEdit(e);
            }}
          />
          <button>Update</button>
        </form>
      )}
    </div>
  );
};

export default TodoItem;
