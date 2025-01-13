import Axios, { AxiosRequestConfig } from 'axios';

const globalAxiosService = Axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const apiClient = {
  get: <T>(route: string, config?: AxiosRequestConfig<T>) =>
    globalAxiosService.get(route, {
      signal: config?.signal,
      params: config?.params,
    }),
  post: <T>(route: string, data: T, config: AxiosRequestConfig<T>) =>
    globalAxiosService.post(route, data, { signal: config?.signal }),
  put: <T>(route: string, data: T, config: AxiosRequestConfig<T>) =>
    globalAxiosService.put(route, data, { signal: config?.signal }),
  patch: <T> (route: string, data: T, config: AxiosRequestConfig<T>) =>
    globalAxiosService.patch(route, data, { signal: config?.signal }),
};

