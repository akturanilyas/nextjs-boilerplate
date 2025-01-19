'use client';
import { createApi } from '@reduxjs/toolkit/query/react';
import { ACCESS_TOKEN } from '@/constants/localStorage.constant';
import { ApiRequestProvider } from '@/providers/ApiRequestProvider';
import { API_PREFIX } from '../prefixes';
import { ProvideTag } from '@/enums/apiServiceTag.enum';

const apiRequestProvider = new ApiRequestProvider({
  baseURL: 'http://localhost:3000',
  prefix: API_PREFIX.API,
  storageAuthKey: ACCESS_TOKEN,
});

export const baseApi = createApi({
  reducerPath: API_PREFIX.API,
  baseQuery: apiRequestProvider.requester(),
  endpoints: () => ({}),
  tagTypes: Object.keys(ProvideTag),
});
