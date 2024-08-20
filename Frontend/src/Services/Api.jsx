import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export const getPosts = async () => {
  return await axios.get(API_URL);
};

export const getPostByID = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createPost = async (post) => {
  return await axios.post(API_URL, post);
};

export const updatePost = async (post, id) => {
  return await axios.put(`${API_URL}/${id}`, post);
};

export const deletePost = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
