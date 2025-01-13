import { City } from '@/types/city.type';
import { apiClient } from '@/services/AxiosService';

export class CityService {
 static async getAll({ signal }: { signal?: AbortSignal}): Promise<Array<City>> {
   const { data } = await apiClient.get('cities', { signal });

   return data;
  }
}
