import { useState, useEffect } from "react";
import { deleteTodo, updateTodo } from "../../../services/todos";
// icons
import { VscClose } from "react-icons/vsc";
import { TiPencil } from "react-icons/ti";
import {HiOutlineClipboardCheck} from "react-icons/hi"

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
    if (deletedItem === "DELETED") {
      setUser((prevState) => {
        return {
          ...prevState,
          todos: user.todos.filter((todo) => todo.id !== item.id),
        };
      });
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
        todos: user.todos.map((todo) =>
          todo.id === item.id ? todoItem : todo
        ),
      };
    });
    setEditState(!editState);
  };

  return (
    <div className="todo-item">
      <VscClose onClick={handleDelete} />
      {!editState ? (
        <p>{item.input}</p>
      ) : (
        <div>
          <input
            type="text"
            value={updateTodoForm.input}
            onChange={(e) => {
              handleEdit(e);
            }}
          />
          <HiOutlineClipboardCheck className="update-icon" onClick={(e) => handleUpdate(e)} />
        </div>
      )}
      <TiPencil onClick={() => setEditState(!editState)} />
    </div>
  );
};

export default TodoItem;
