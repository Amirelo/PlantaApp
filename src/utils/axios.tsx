import axios from 'axios';

const url = 'https://something.com/';

export const axiosInstance = axios.create({
  baseURL: url,
});
