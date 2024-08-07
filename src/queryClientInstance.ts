import { QueryClient } from "@tanstack/react-query";

export const queryClientInstance = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: Infinity,
      },
      mutations:{
        retry: false
      }
    },
  });