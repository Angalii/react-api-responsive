import axios from "axios";

const api = axios.create({    
    baseURL: import.meta.env.VITE_APP_API_RICK_AND_MORTY,
});

export default api;