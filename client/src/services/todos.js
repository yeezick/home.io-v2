import api from "./apiConfig"

export const getUserTodos = async (userID) => {
  const res = await api.get(`/users/${user_id}/todos`)
  return res.data
}

export const addTodo = async (newTodo, userID) => {
  const res = await api.post(`/users/${user_id}/todos`, {todo: newTodo})
  return res.data
}

export const updateTodo = async (todoID, updatedTodo) => {
  const res = await api.put(`/todos/${todoID}`, {todo: updatedTodo})
  return res.data
}

export const deleteTodo = async (todoID) => {
  const res = await api.delete(`/todos/${todoID}`)
  return res.data
}