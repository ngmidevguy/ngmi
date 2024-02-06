import React, { createContext, useState, useEffect } from 'react';

const defaultContextValue = {
  theme: 'dark',
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultContextValue);

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState('dark');  // Default to dark theme if no theme is saved
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, hasMounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
