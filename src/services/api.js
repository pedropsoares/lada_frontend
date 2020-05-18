import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3000/",
});


export default api;