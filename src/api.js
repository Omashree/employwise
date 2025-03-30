import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});

export const login = (email, password) => {
  return api.post("/login", { email, password });
};

export const getUsers = (page = 1) => {
  return api.get(`/users?page=${page}`);
};

export const updateUser = (id, userData) => {
  return api.put(`/users/${id}`, userData);
};

export const deleteUser = (id) => {
  return api.delete(`/users/${id}`);
};
