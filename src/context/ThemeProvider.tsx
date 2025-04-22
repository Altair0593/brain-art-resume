import { createContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  isWhite: boolean;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [isWhite, setIsWhite] = useState<boolean>(true);


  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;

    if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
      setIsWhite(false);
    } else {
      setIsWhite(true);
      root.classList.remove('dark');
    }

    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    applyTheme(stored ?? 'system');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme, isWhite }}>
      {children}
    </ThemeContext.Provider>
  );
};
