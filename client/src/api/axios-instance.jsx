import axios from "axios";


const axiosInstance  = axios.create({
    baseUrl:'http://localhost:3000/api'
});

axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

        if(accessToken){
            config.headers.Authorization = `Barear ${accessToken}`;     
        }
      return config;
    },
    (err)=>Promise.reject(err)
    
);
export default axiosInstance;
