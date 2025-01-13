'use client';

import { createGlobalState } from '@/utils/globalStateCreator';

type UserState = {
  name: string;
  isSignedIn: boolean;
};

export const useUserState = createGlobalState<UserState>('user');
