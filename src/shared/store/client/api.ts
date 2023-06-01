/* eslint-disable no-param-reassign */

import localStorage from 'redux-persist/es/storage';
import axios, { InternalAxiosRequestConfig } from 'axios';

const BASE_URL = 'https://library-cleverland-2jfze.ondigitalocean.app';

export const API = axios.create({
  // withCredentials: false,
  baseURL: BASE_URL,
});

API.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  const getToken = async () => {
    const user = await localStorage.getItem('token');

    if (user) {
      config.headers.Authorization = `Bearer ${user}`;
    }

    return config;
  };
  const res = getToken();

  return res;
});
