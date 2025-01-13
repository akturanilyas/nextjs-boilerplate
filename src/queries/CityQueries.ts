import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '@/enums/QueryKey';
import { CityService } from '@/services/CityService';

export function useCities() {
  const query = useQuery({ queryKey: [QueryKey.CITIES], queryFn: ({ signal }) => CityService.getAll({ signal }) });

  return query;
}
