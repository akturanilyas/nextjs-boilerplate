import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/types/user.type';

type MainSlice = {
  user: User | undefined;
};

const initialState: MainSlice = {
  user: undefined,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = mainSlice.actions;
