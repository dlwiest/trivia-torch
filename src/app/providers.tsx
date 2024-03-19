'use client';

import { ThemeProvider } from 'next-themes';
import { createContext, useMemo } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { KeyModalProvider } from './context/KeyModalProvider';

const AppContext = createContext({});

const Providers = ({ children }: { children: React.ReactNode; }) => {
    const queryClient = useMemo(() => new QueryClient(), []);

    return (
        <AppContext.Provider value={{}}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                <QueryClientProvider client={queryClient}>
                    <KeyModalProvider>
                        {children}
                    </KeyModalProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </AppContext.Provider>
    );
};

export default Providers;