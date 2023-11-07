import axios, { AxiosInstance } from 'axios';

const apiBaseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://plantboard.vercel.com'
    : 'http://localhost:3000';

const axiosClient: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export default axiosClient;
