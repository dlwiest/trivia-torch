'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';

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