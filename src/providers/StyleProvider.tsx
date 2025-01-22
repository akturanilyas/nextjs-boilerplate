'use client';

import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const StyleProvider = ({ children }: { children: ReactNode }) => (
  <PrimeReactProvider
    value={{
      pt: {
        ...Tailwind,
      },
      unstyled: true,
      ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge },
    }}
  >
    {children}
  </PrimeReactProvider>
);
