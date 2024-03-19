'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const SunIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
    return (
        <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
            <path
                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                fill="none"
            />
        </svg>
    );
};

const MoonIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const DarkModeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        setMounted(true);
    }, [setMounted]);

    return (
        <button
            type="button"
            aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
            className="group rounded-full bg-white px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={() => setTheme(otherTheme)}
        >
            <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden" />
            <MoonIcon className="hidden h-6 w-6 transition dark:block group-hover:stroke-teal-400 fill-teal-400/10 group-hover:fill-teal-400/20 stroke-teal-500" />
        </button>
    );
};

export default DarkModeToggle;