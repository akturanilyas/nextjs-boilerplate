'use client';

import { createGlobalState } from '@/utils/globalStateCreator';
import { GlobalState } from '@/enums/GlobalState';

type LoadingState = {
  count: number;
};

const initialState: LoadingState = {
  count: 0,
};

export const useLoadingState = createGlobalState<LoadingState>(GlobalState.LOADING, initialState);
