import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

export const getAllTasks = async () => {
  return await axios.get(API_URL);
};

export const createTask = async (task) => {
  return await axios.post(API_URL, task);
};

export const updateTask = async (id, task) => {
  return await axios.put(`${API_URL}/${id}`, task);
};

export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
