'use client';

import { ThemeProvider } from 'next-themes';
import { createContext, useMemo } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

const AppContext = createContext({});

const Providers = ({ children }: { children: React.ReactNode; }) => {
    const queryClient = useMemo(() => new QueryClient(), []);

    return (
        <AppContext.Provider value={{}}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ThemeProvider>
        </AppContext.Provider>
    );
};

export default Providers;