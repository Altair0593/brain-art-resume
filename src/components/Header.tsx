import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import {AnimatedLogo} from '../svgs/AnimatedLogo';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isWhite } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07) dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.07)] border-b border-gray-200 dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl sm:text-2xl font-semibold">
            <AnimatedLogo variant={isWhite ? 'black' : 'white'} />
          </Link>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center gap-2'>
            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

         

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" active={location.pathname === "/"}>
              <span className='uppercase'>Graphic Designer</span>
            </NavLink>
            {/* The  Illustrator section will be implemented soon*/}
            {/* <NavLink to="/illustrator" active={location.pathname === "/illustrator"}>
              Illustrator
            </NavLink> */}
            <NavLink to="/about" active={location.pathname === "/about"}>
              <span className='uppercase'>About Me</span>
            </NavLink>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 space-y-4 border-b border-gray-200 dark:border-zinc-800 "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <MobileNavLink
              to="/"
              active={location.pathname === "/"}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className='uppercase'>Graphic Designer</span>
            </MobileNavLink>
            {/* ToDo the illustrator page will be added soon */}
            {/* <MobileNavLink
              to="/illustrator"
              active={location.pathname === "/illustrator"}
              onClick={() => setIsMenuOpen(false)}
            >
              Illustrator
            </MobileNavLink> */}
            <MobileNavLink
              to="/about"
              active={location.pathname === "/about"}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className='uppercase'>About Me</span>
            </MobileNavLink>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) => (
  <Link to={to} className="relative group">
    <span className={`text-lg ${active ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'} transition-colors duration-200 group-hover:text-black dark:group-hover:text-white`}>
      {children}
    </span>
    {active && (
      <motion.div
        layoutId="underline"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
      />
    )}
  </Link>
);

const MobileNavLink = ({
  to,
  children,
  active,
  onClick
}: {
  to: string;
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className={`block px-4 py-2 text-lg ${active ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'} hover:text-black dark:hover:text-white transition-colors duration-200`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;