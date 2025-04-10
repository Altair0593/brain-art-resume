import { motion } from 'framer-motion';
import { Linkedin, Instagram, Palette } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    // Ensure URLs are correct/placeholders for your actual links
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/' },
    { icon: Palette, name: 'Behance', url: 'https://www.behance.net/' },
  ];

  // Variants for the smooth text animation
  const textVariants = {
    // State when text is hidden (not hovered)
    hidden: {
      opacity: 0,
      x: -15, // Start further back for a clearer slide-in effect
      width: 0, // Animate width to prevent layout shift during animation
      transition: {
        duration: 0.2, // Faster fade out/slide out
        ease: "easeIn",
        // Ensure width transition happens quickly when hiding
        width: { duration: 0.1, delay: 0 }
      }
    },
    // State when text is visible (hovered)
    visible: {
      opacity: 1,
      x: 0,    // End at its normal position
      width: 'auto', // Animate width to accommodate text
      transition: {
        duration: 0.3, // Slightly slower fade in/slide in
        delay: 0.1,    // Slight delay after hover starts
        ease: "easeOut",
         // Control width animation separately if needed
        width: { duration: 0.2, delay: 0.1 } // Animate width smoothly
      }
    }
  };

  // Variants for the container div (optional, controls background/padding)
  // Using CSS transitions via group-hover is often simpler for this part
  // const containerVariants = {
  //   initial: { paddingRight: '0.5rem', backgroundColor: '#FFFFFF' },
  //   hover: { paddingRight: '1rem', backgroundColor: '#111827' } // Example: bg-slate-900
  // };

  return (
    // Container for the links, fixed position
    // Added items-end to align content divs nicely if they change size
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 md:gap-4">
      {links.map((link) => (
        // Link element - apply group for hover states on children
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex" // Simplified flex container for the link itself
          // Animate link position slightly on hover using spring physics
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          // Define initial and hover states to trigger variants in children
          initial="hidden"
          whileHover="visible"
          animate="hidden" // Explicitly keep hidden initially if needed
        >
          {/* Content Container - Handles background, padding, rounding */}
          {/* Removed explicit width, relies on content + padding */}
          <div
            className={`
              flex items-center gap-2 rounded-full shadow-lg cursor-pointer
              bg-white text-gray-700                           // Default state colors & text color for icon
              py-2 pl-2                                // Start with equal padding for just icon visible
              transition-all duration-300 ease-out              // Smooth transitions for CSS properties (color, padding)
              group-hover:bg-gray-900 group-hover:text-white   // Hover state colors (darker bg, white icon/text)
              group-hover:pr-4                                  // Expand right padding on hover
            `}
            // variants={containerVariants} // Alternative: control bg/padding via variants
            // transition={{ duration: 0.3 }}
          >
            {/* Icon */}
            <link.icon
              className="w-5 h-5 flex-shrink-0 text-current" // Inherits color from parent div
              aria-hidden="true"
            />

            {/* Text - Animated with Framer Motion */}
            {/* Wrap in a div to handle overflow during width animation */}
            <div className="overflow-hidden">
                <motion.span
                  variants={textVariants} // Apply animation variants
                  className="text-xs md:text-sm font-medium whitespace-nowrap block" // Added block display
                  aria-label={link.name} // Better accessibility
                >
                  {link.name}
                </motion.span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;