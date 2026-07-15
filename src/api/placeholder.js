import axios from "axios";

const apiPlaceholder = axios.create({    
    baseURL: import.meta.env.VITE_APP_API_PLACEHOLDER,
});

export default apiPlaceholder;