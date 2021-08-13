import api from "./apiConfig"

export const updateApi = async (id, updateApiList) => {
  const res = await api.put(`/apis/${id}`, {api: updateApiList})
  return res.data
}
