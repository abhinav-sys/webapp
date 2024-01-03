// src/services/api.js

import axios from 'axios';

const baseURL = 'http://localhost:5000/api/dns'; // Update with your backend URL

const api = axios.create({
  baseURL,
});

export const getDnsRecords = () => api.get('/dns');
// Add more functions for other CRUD operations as needed

export default api;