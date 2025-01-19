import { useAppSelector } from '@/hooks/useRedux';

export const useMain = () => useAppSelector((state) => state.main);
