import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

axiosInstance.interceptors.request.use( (config)=> {
  console.log(localStorage.getItem('jwtToken'))
  const token =localStorage.getItem('jwtToken')
  console.log(token,'token');
  if(token){
    config.headers.Authorization = `Bearer ${token}`
    return config;
  }
  (error)=>{
    return Promise.reject(error)
  }
  console.log("Request sent:", config);
});
export default axiosInstance;
