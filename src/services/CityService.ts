import { City } from '@/types/city.type';
import { globalAxiosService } from '@/services/AxiosService';
import { HttpMethod } from '@/enums/HttpMethod';

export class CityService {
  static async getAll(): Promise<Array<City>> {
    const { data } = await globalAxiosService.req({ url: '/cities', method: HttpMethod.GET });

    return data;
  }
}
