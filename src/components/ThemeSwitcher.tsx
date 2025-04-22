import { useState, useRef, useEffect } from 'react'; // Import useRef and useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const options = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Laptop },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null); // Create a ref for the wrapper div

  const currentOption = options.find((opt) => opt.value === theme);

  // Add useEffect hook to handle clicks outside
  useEffect(() => {
    // Function to call when a click is detected
    function handleClickOutside(event: MouseEvent) {
      // Check if the ref exists and if the click was outside the ref'd element
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false); // Close the dropdown
      }
    }

    // Add event listener when the dropdown is open
    if (open) {
      // Use 'mousedown' to catch the event before 'click' which might toggle the button again
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Optional: Remove listener explicitly if already closed (good practice)
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function: This runs when the component unmounts or before the effect runs again
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]); // Only re-run the effect if the 'open' state changes

  return (
    // Attach the ref to the outermost container div
    <div ref={wrapperRef} className="relative inline-block text-left">
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 py-1 px-2 rounded-md transition-colors duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentOption && <currentOption.icon className="w-5 h-5" />}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            // No ref needed here, the check is on the outer wrapper
            className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-md shadow-lg z-50"
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = theme === opt.value;

              return (
                <button
                  key={opt.value}
                  onClick={() => {
                    // This uses 'as' which might not be ideal, consider refining theme type in useTheme hook
                    setTheme(opt.value as 'light' | 'dark' | 'system');
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300 ${
                    isSelected ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  {opt.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;