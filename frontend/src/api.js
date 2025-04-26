import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Ensure this matches your backend URL
});

export default API;