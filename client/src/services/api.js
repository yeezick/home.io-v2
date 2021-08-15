import api from "./apiConfig"

export const userApiList = async (id) => {
  const res = await api.get(`/apis/${id}`)
  return res.data
}

export const updateApi = async (id, updateApiList) => {
  const res = await api.put(`/apis/${id}`, {api: updateApiList})
  return res.data
}
