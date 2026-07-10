import axios from "axios";

console.log("api2:",import.meta.env.VITE_APP_API_RICK_AND_MORTY);
const api = axios.create({    
    baseURL: import.meta.env.VITE_APP_API_RICK_AND_MORTY,
});

export default api;