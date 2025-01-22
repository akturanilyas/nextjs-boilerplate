import { baseApi } from '../../baseApi';
import { ENDPOINT } from '@/api/endpoints';
import { setUser } from '@/states/slices/mainSlice';
import { ACCESS_TOKEN } from '@/constants/localStorage.constant';
import { HttpMethod } from '@/enums/httpMethod.enum';

export const AuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<void, void>({
      query: () => ({ url: ENDPOINT.LOGOUT, method: HttpMethod.POST }),
      async onQueryStarted(_, { dispatch }) {
        dispatch(setUser(undefined));
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.replace('/');
      },
    }),
  }),
});

export const { useLogoutMutation } = AuthApi;
