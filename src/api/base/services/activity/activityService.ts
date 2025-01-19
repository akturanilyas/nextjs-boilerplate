import { baseApi } from '../../baseApi';
import { ActivityQueryParams } from './activityService.interface';
import { City } from '@/types/city.type';
import { ENDPOINT } from '@/api/endpoints';
import { HttpMethod } from '@/enums/httpMethod.enum';
import { Get } from '@/api/commonService.interface';

export const ActivityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query<Array<City>, Get<ActivityQueryParams>>({
      query({ query }) {
        console.log('amkslö');

        return {
          url: ENDPOINT.CITIES,
          method: HttpMethod.GET,
          data: { params: query },
        };
      },
    }),
  }),
});

export const { useGetCitiesQuery } = ActivityApi;
