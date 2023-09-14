import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});
