import { useState, useEffect } from "react";
import { deleteTodo, updateTodo } from "../../../services/todos";

import "./TodoItem.css";

// todo:
// make todo item deleteable
// item should be deleted from user list on clickck of x (button for now)
// make todo item editable
// item shoould turn into input box on click of "penci icon"(button for now)

const TodoItem = ({ item, toggleRender, setToggleRender }) => {
  // console.log("item:", item);
  const [updateTodoForm, setUpdateTodoForm] = useState({
    input: "",
    user_id: 0,
  });

  const [editState, setEditState] = useState(false);

  useEffect(() => {
    console.log(editState);
    if (item) {
      setUpdateTodoForm({
        input: item.input,
        user_id: item.user_id,
      });
    }
  }, [editState, toggleRender]);

  const handleDelete = async () => {
    await deleteTodo(item.id);
    await setToggleRender(!toggleRender)
  };

  const handleEdit = async (e) => {
    const { value } = e.target;
    setUpdateTodoForm({
      input: value,
      user_id: item.user_id
    })
  };
  
  const handleUpdate = async () => {
    await updateTodo(item.id, updateTodoForm)
    setEditState(!editState)
  }

  return (
    <div>
      <button onClick={handleDelete}>delete</button>
      <form>
        {!editState ? (
          <p onClick={() => setEditState(!editState)}>{item.input}</p>
        ) : (
          <div>
            <input
              type="text"
              value={updateTodoForm.input}
              onChange={(e) => {
                handleEdit(e);
              }}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default TodoItem;
