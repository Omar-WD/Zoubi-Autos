// axiosClient.js
import axios from "axios";

const baseURL = window.REACT_APP_VITE_BE_URL || "https://elzoobiautohandel.onrender.com";

const axiosClient = axios.create({
  baseURL: baseURL + "/api",
  withCredentials: true,
});

export { axiosClient }; // Export axiosClient
