import axios from "axios";

const URL = "http://localhost:8000";
export const addUser = async (user) => {
  try {
    return await axios.post(`${URL}/add`, user);
  } catch (error) {
    console.log("error while calling add api", error);
  }
};
export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${URL}/${id}`);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${URL}/${id}`);
};
export const editUser = async (id, user) => {
  return await axios.put(`${URL}/${id}`, user);
};
