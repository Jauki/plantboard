'use client';

import React, { useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RoomProvider } from '@/context/RoomContext';

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <RoomProvider>
        <SessionProvider>{children}</SessionProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </RoomProvider>
    </QueryClientProvider>
  );
}
