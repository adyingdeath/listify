"use client";

import { useState, useEffect } from 'react';
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check localStorage first
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else if (storedTheme === null) {
            // If no stored preference, check system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
            {isDarkMode ? (
                <LuSun className="h-5 w-5" />
            ) : (
                <LuMoon className="h-5 w-5" />
            )}
        </button>
    );
} 