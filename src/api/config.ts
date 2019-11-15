import axios from 'axios';
import { alphaTypes, categoryTypes } from './filterTypes';

export const baseUrl = 'http://localhost:4000';

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => console.log(err, '网络错误')
);

export { axiosInstance, alphaTypes, categoryTypes };