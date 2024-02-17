import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

axiosInstance.interceptors.request.use(function (config) {
  console.log("Request sent:", config);
  return config;
});

export default axiosInstance;
