import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Computer } from 'lucide-react';

type Theme = "dark" | "light" | "system";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--background', '220 20% 15%');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--background', '0 0% 100%');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current?.contains?.(event?.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const getThemeIcon = () => {
    if (theme === 'light') {
      return <Sun className="w-5 h-5" />;
    } else if (theme === 'dark') {
      return <Moon className="w-5 h-5" />;
    } else {
      return <Computer className="w-5 h-5" />;
    }
  };

  const getThemeName = () => {
    if (theme === 'light') {
      return 'Light';
    } else if (theme === 'dark') {
      return 'Dark';
    } else {
      return 'System';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="rounded-full p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
      >
        {getThemeIcon()}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full right-0 mt-2 w-32 rounded-md shadow-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
        >
          <button
            onClick={() => handleThemeChange('light')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 ${theme === 'light' ? 'font-semibold' : ''}`}
          >
            <Sun className="w-4 h-4 inline-block mr-2" /> Light
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 ${theme === 'dark' ? 'font-semibold' : ''}`}
          >
            <Moon className="w-4 h-4 inline-block mr-2" /> Dark
          </button>
          <button
            onClick={() => handleThemeChange('system')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 ${theme === 'system' ? 'font-semibold' : ''}`}
          >
            <Computer className="w-4 h-4 inline-block mr-2" /> System
          </button>
        </div>
      )}
      {isOpen && (
        <div className="absolute top-full right-full mr-2 mt-2 text-xs text-gray-600 dark:text-gray-400">
          {getThemeName()}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
