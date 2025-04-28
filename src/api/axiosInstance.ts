import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mogazoa-api.vercel.app/13-3/',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
