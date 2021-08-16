
import {deleteTodo} from "../../../services/todos"

import "./TodoItem.css"

// todo:
// make todo item deleteable 
  // item should be deleted from user list on clickck of x (button for now)
// make todo item editable 
  // item shoould turn into input box on click of "penci icon"(button for now)

const TodoItem = ({item}) => {
  console.log("item:",item)

  const handleDelete = async () => {
    await deleteTodo(item.id)
  }

  return (
    <div>
      <button onClick={() => handleDelete()}>delete</button>
      <p>{item.input}</p>
      <button>edit</button>
    </div>
  )
}

export default TodoItem
