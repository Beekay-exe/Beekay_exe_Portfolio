'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDemonMode: boolean;
  toggleDemonMode: () => void;
  themeColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDemonMode, setIsDemonMode] = useState(false);

  const toggleDemonMode = () => {
    setIsDemonMode(!isDemonMode);
  };

  const themeColor = isDemonMode ? '#ff0000' : '#26de81';

  return (
    <ThemeContext.Provider value={{ isDemonMode, toggleDemonMode, themeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 