import { ArrowUp, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white/90 dark:bg-zinc-900/90 border-t border-gray-200 dark:border-zinc-800 mt-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Designed by Mariia Shvachko. All Rights Reserved.
          </div>
          <a
            href="mailto:sophie@example.com"
            className="email-link group text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <Mail className="email-icon text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
            <span className="email-text"> mary.brainy.a@gmail.com</span>
          </a>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            whileHover={{ y: -2 }}
          >
            <ArrowUp className="w-4 h-4 uppercase text-gray-500 dark:text-gray-400" />
            Go Up
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;