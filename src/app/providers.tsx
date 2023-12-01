'use client';

import { ThemeProvider } from 'next-themes';
import { createContext } from 'react';

const AppContext = createContext({});

const Providers = ({ children} : { children: React.ReactNode }) => (
    <AppContext.Provider value={{}}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
            {children}
        </ThemeProvider>
    </AppContext.Provider>
);

export default Providers;