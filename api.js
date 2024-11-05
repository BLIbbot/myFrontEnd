import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-first-backend-p0gm.onrender.com/api",
  timeout: 5000,
});

export default apiClient;