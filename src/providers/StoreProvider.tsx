'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, RootState } from '@/states/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types';
import { EnhancedStore } from '@reduxjs/toolkit';

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<EnhancedStore<RootState>>(undefined);
  const persistorRef = useRef<Persistor>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  if (!persistorRef.current) {
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistorRef.current}>{children}</PersistGate>
    </Provider>
  );
}
