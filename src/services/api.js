import axios from 'axios';

import { getAuthToken } from '../auth';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async config => {
  const token = getAuthToken();
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(config);
  return config;
});

export default api;