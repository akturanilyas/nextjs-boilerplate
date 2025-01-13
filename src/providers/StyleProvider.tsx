'use client';

import { PrimeReactProvider } from 'primereact/api';
import { usePassThrough } from 'primereact/passthrough';
import Tailwind from 'primereact/passthrough/tailwind';
import { ReactNode } from 'react';

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const CustomTailwind = usePassThrough(
    Tailwind,
    {
      panel: {
        title: {
          className: 'leading-none font-light text-2xl',
        },
      },
    },
    {
      mergeSections: true,
      mergeProps: false,
    },
  );

  return <PrimeReactProvider value={{ pt: CustomTailwind, unstyled: true }}>{children}</PrimeReactProvider>;
};
