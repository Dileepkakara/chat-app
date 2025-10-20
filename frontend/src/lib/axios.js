import axios from "axios";

const API_ORIGIN = import.meta.env.VITE_API_URL ??
  (import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://chat-backend-3-m788.onrender.com");

export const axiosInstance = axios.create({
  baseURL: API_ORIGIN.replace(/\/$/, "") + "/api",
  withCredentials: true,
});