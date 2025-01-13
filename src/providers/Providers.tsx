'use client';

import { isServer, MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { QueryKey } from '@/enums/QueryKey';

function makeQueryClient() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onSettled() {},
      onError(error) {
        console.log('error', error);
        // Toast.error(`API Error: ${error.message}`);
      },
    }),
    mutationCache: new MutationCache({
      onError(error, _, __, mutation) {
        const { mutationKey } = mutation.options;

        console.log(error);
        // Toast.error(`API Mutation Error ${mutationKey ? `: ${mutation}` : ''}`);
      },
    }),
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return queryClient;
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}

export default function Providers({ children }: { children: ReactNode }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  queryClient.setQueryData([QueryKey.USER], { name: 'Darius', isSignedIn: true });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
