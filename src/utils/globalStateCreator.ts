import { useQuery, useQueryClient } from '@tanstack/react-query';

export function createGlobalState<T>(queryKey: unknown, initialData: T | null = null) {
  return function () {
    const queryClient = useQueryClient();

    const { data } = useQuery({
      // eslint-disable-next-line @tanstack/query/exhaustive-deps
      queryKey: [queryKey],
      queryFn: () => Promise.resolve(initialData),
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    });

    function setData(payload: Partial<T> | ((prev: Partial<T>) => T)) {
      queryClient.setQueryData([queryKey], payload);
    }

    function resetData() {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      queryClient.refetchQueries({
        queryKey: [queryKey],
      });
    }

    return { data, setData, resetData };
  };
}
