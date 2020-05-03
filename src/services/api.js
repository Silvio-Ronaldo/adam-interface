import axios from 'axios';

const api = axios.create({
    baseURL: "https://adam-backend.herokuapp.com"
});

export default api;