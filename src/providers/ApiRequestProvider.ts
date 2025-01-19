import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { Method } from 'axios';
import { silentServices } from '@/api/silentServices';
import { decrease, increase } from '@/states/slices/loadingSlice';
import { setUser } from '@/states/slices/mainSlice';
import { BaseQueryFunctionParams } from './ApiRequestProvider.interface';
import { AxiosProvider } from './AxiosProvider';
import { ApiError } from './AxiosProvider.interface';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { ACCESS_TOKEN } from '@/constants/localStorage.constant';
import { ApiErrorUseCase } from '@/enums/error.enum';
import { payloadNormalizer } from '@/normalizers/payloadNormalizer';

export class ApiRequestProvider {
  api;
  prefix;

  constructor({
    baseURL,
    prefix,
    headers,
    storageAuthKey,
    additionalSuffixParams,
  }: {
    baseURL: string;
    prefix?: string;
    headers?: Record<string, string | number | boolean>;
    storageAuthKey: string;
    additionalSuffixParams?: Record<string, unknown>;
  }) {
    this.api = new AxiosProvider({
      baseURL,
      headers,
      storageAuthKey,
      additionalSuffixParams,
    });
    this.prefix = prefix;
  }

  private logout = (dispatch: ThunkDispatch<unknown, unknown, Action>) => {
    dispatch(setUser(undefined));
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.replace('/');
  };

  private exceptionHandler = (error: ApiError, dispatch: ThunkDispatch<unknown, unknown, Action>) => {
    if (error) {
      switch (error.useCase) {
        case ApiErrorUseCase.LOGOUT:
          this.logout(dispatch);
          break;
        case ApiErrorUseCase.SHOW_MESSAGE:
          break;
        default:
          break;
      }
    }
  };

  public requester
    = (): BaseQueryFn<BaseQueryFunctionParams> =>
    async ({ url, method, headers, data = {} }, { dispatch, endpoint }, extraOptions) => {
      const isSilentService = silentServices.includes(endpoint);

      try {
        !isSilentService && dispatch(increase());

        const _body = payloadNormalizer({
          data: data?.body as Record<string, object>,
          endpoint,
        });

        const result = await this.api.start({
          method: method as Method,
          url,
          prefix: this.prefix,
          body: _body,
          params: data?.params,
          headers,
          rest: {
            extraOptions,
          },
        });

        return { data: result?.data || result };
      } catch (error) {
        const apiError = error as ApiError;

        this.exceptionHandler(apiError, dispatch);

        return {
          error: apiError,
        };
      } finally {
        !isSilentService && dispatch(decrease());
      }
    };
}
