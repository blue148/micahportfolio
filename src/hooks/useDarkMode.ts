import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useDarkMode() {
  // Initialize state with user's preference
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if user has previously set a theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    // Otherwise check if user prefers dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', theme);
    
    // Update document class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Function to toggle theme
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return {
    darkMode: theme === 'dark',
    toggleDarkMode,
  };
}