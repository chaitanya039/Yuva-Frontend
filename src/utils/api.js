import axios from "axios";

// Detect environment
const isProduction = import.meta.env.MODE === 'production';

// Set base URL conditionally
const baseURL = isProduction
  ? import.meta.env.VITE_API_BASE_URL
  : 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

// Attach token for every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("customer_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Automatically handle form data content type
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

export default api;
