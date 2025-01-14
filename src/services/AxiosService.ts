import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export type RequestInterface<T> = { config?: AxiosRequestConfig<T> } & Pick<AxiosRequestConfig, 'data' | 'params'> &
  Required<Pick<AxiosRequestConfig, 'url' | 'method'>>;

export type BeforeRequestCallback = () => void;
export type AfterRequestCallback = () => void;

export class AxiosService {
  private axiosInstance: AxiosInstance;
  private baseUrl: string;
  private headers?: Record<string, string | number | boolean>;
  private beforeRequestCallbacks: { [key: string]: BeforeRequestCallback } = {};
  private afterRequestCallbacks: { [key: string]: AfterRequestCallback } = {};

  constructor({ axiosInstance, baseURL }: { axiosInstance?: AxiosInstance; baseURL: string }) {
    this.axiosInstance = axiosInstance || Axios.create();
    this.baseUrl = baseURL;
    this.headers = {};

    this.setRequestInterceptor();
    this.setResponseInterceptor();
  }

  setBaseURL(baseURL: string) {
    this.axiosInstance.defaults.baseURL = baseURL;
  }

  setHeader(headers: Record<string, string | number | boolean>) {
    this.headers = { ...this.headers, ...headers };
  }

  setBeforeRequestCallbacks({ key, callback }: { key: string; callback: BeforeRequestCallback }) {
    this.beforeRequestCallbacks = { ...this.beforeRequestCallbacks, [key]: callback };
  }

  setAfterRequestCallbacks({ key, callback }: { key: string; callback: AfterRequestCallback }) {
    this.afterRequestCallbacks = { ...this.afterRequestCallbacks, [key]: callback };
  }

  async req<T>(req: RequestInterface<T>) {
    const { config = {}, params, data, method, url } = req;
    const { axiosInstance, baseUrl, headers } = this;

    Object.keys(this.beforeRequestCallbacks).forEach((key) => {
      this.beforeRequestCallbacks[key]();
    });

    const response = await axiosInstance({
      baseURL: baseUrl,
      headers,
      ...config,
      params,
      data,
      method,
      url,
    });

    Object.keys(this.afterRequestCallbacks).forEach((key) => {
      this.afterRequestCallbacks[key]();
    });

    return response;
  }

  private setRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        console.log('Request started');

        return config;
      },
      (error) => {
        console.error('Request interceptor error:', error);

        return Promise.reject(error);
      },
    );
  }

  private setResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        console.log('Response interceptor:', response);

        return response;
      },
      (error) => {
        console.error('Response interceptor error:', error);

        return Promise.reject(error);
      },
    );
  }
}

export const globalAxiosService = new AxiosService({ baseURL: 'http://localhost:3000/api' });

export default globalAxiosService;
