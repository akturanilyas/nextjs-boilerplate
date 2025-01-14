import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '@/enums/QueryKey';
import { CityService } from '@/services/CityService';

export function useCities() {
  const query = useQuery({ queryKey: [QueryKey.CITIES], queryFn: () => CityService.getAll() });

  return query;
}
