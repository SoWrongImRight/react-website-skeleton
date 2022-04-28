import { ReactChild } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

export const ArticleQueryProvider = (props: any) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}