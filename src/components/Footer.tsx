import React from 'react';
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
    <footer className="bg-[#f1eeec] border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Maksym Shvachko. All Rights Reserved.
          </div>
          <a
            href="mailto:sophie@example.com"
            className="email-link group"
          >
            <Mail className="email-icon" />
            <span className="email-text"> mary.brainy.a@gmail.com</span>
          </a>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-200"
            whileHover={{ y: -2 }}
          >
            <ArrowUp className="w-4 h-4 uppercase" />
            Go Up
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;