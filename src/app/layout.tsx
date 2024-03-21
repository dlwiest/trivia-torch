import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './app.css';
import Providers from './providers';
import { FireIcon } from '@heroicons/react/24/outline';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'TriviaTorch',
    description: 'An AI-powered trivia night companion',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="antialiased" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
