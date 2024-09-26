'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './comps/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

function ClientLayout({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
          },
        },
      })
  );

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem={true}
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        {/* @todo - refactor this into  SiteHeader component*/}
        <div className='relative flex min-h-screen flex-col'>
          <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 items-center'>
              <Navbar />
            </div>
          </header>

          <div className='flex-1'>{children}</div>
        </div>
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--offWhite)',
            },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default ClientLayout;
