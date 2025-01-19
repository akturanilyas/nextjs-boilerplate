'use client';

import createWebStorage from 'redux-persist/es/storage/createWebStorage';

const createNoopStorage = () => ({
  getItem(key: string): Promise<string | null> {
    return Promise.resolve(null);
  },
  setItem(key: string, value: string) {
    return Promise.resolve(value);
  },
  removeItem(key: string): Promise<void> {
    return Promise.resolve();
  },
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

export default storage;
