import axios, { AxiosInstance, Method, ResponseType } from 'axios';
import { ApiError } from './AxiosProvider.interface';
import { ApiErrorUseCase } from '@/enums/error.enum';

export class AxiosProvider {
  // Variables
  axiosInstance: AxiosInstance;
  baseURL: string | undefined;
  headers: Record<string, string | number | boolean> | undefined;
  isAlreadyFetchingAccessToken: boolean | undefined;
  subscribers: Array<(accessToken: string) => void>;
  additionalSuffixParams: Record<string, unknown> | undefined;
  storageAuthKey: string;

  constructor({
    baseURL,
    headers,
    storageAuthKey,
    additionalSuffixParams,
  }: {
    baseURL: string;
    headers?: Record<string, string | number | boolean>;
    storageAuthKey: string;
    additionalSuffixParams?: Record<string, unknown>;
  }) {
    this.axiosInstance = axios.create();
    this.storageAuthKey = storageAuthKey;
    this.baseURL = baseURL;
    this.setHeaders(headers);
    this.setAccessToken();
    this.additionalSuffixParams = additionalSuffixParams;
    this.setResponseInterceptors();

    // Default Values
    this.subscribers = [];
    this.isAlreadyFetchingAccessToken = false;
  }

  private setHeaders(_headers: Record<string, string | number | boolean> | undefined) {
    this.headers = _headers || {
      Accept: 'application/json',
    };
  }

  private onAccessTokenFetched(accessToken: string) {
    this.subscribers = this.subscribers.filter((callback: (accessToken: string) => void) => callback(accessToken));
  }

  private addSubscriber(callback: (accessToken: string) => void) {
    this.subscribers.push(callback);
  }

  private clearSubscribers() {
    this.subscribers = [];
  }

  public setAccessToken() {
    // Const raw = localStorage.getItem(this.storageAuthKey);

    // const auth = (raw?.length && JSON.parse(raw)) || null;

    // auth && (this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${auth.access_token}`);
  }

  private setAdditionalSuffixParams() {
    return {
      ...this.additionalSuffixParams,
    };
  }

  private setResponseInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response) => response?.data || response,
      async (error) => {
        const errorResponse = error?.response;
        const errorStatusCode = errorResponse?.status;
        const errorMessage = errorResponse?.data?.description || errorResponse?.data?.message;

        const apiError: ApiError = {
          errorLabel: errorMessage,
          // TODO: Add error title
          errorTitle: 'Error',
          useCase: ApiErrorUseCase.SHOW_MESSAGE,
          statusCode: errorStatusCode,
        };

        return Promise.reject(apiError);
      },
    );
  }

  public async start({
    method,
    url,
    prefix,
    headers,
    body,
    params,
    rest,
  }: {
    method: Method;
    url: string;
    prefix?: string;
    headers?: Record<string, unknown> | unknown;
    body?: Record<string, unknown> | string | undefined | unknown;
    params?: Record<string, unknown> | string | undefined | unknown;
    rest?: Record<string, Record<string, unknown>>;
  }) {
    this.setAccessToken();
    const queryParams = typeof params === 'object' ? params : {};

    const _params = rest?.extraOptions?.withoutAdditionalQueryParams
      ? queryParams
      : { ...this.setAdditionalSuffixParams(), ...queryParams };

    const axiosResponse = await this.axiosInstance({
      method,
      url,
      headers: { ...this.headers, ...(headers || {}) },
      baseURL: `${this.baseURL}${prefix || ''}`,
      data: body,
      params: _params,
      responseType: rest?.extraOptions?.responseType as ResponseType,
      ...rest,
    });

    return axiosResponse;
  }
}
