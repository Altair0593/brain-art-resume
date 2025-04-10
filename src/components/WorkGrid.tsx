import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Work } from '../data/works'; // Adjust import if necessary
import { ASPECT_RATIO_PATTERN, WORK_ITEM_VARIANTS } from '../constants';

// Define Work interface (ensure it matches your data)

// --- Configuration for Stable Aspect Ratios ---
// Define a pattern of height factors (height / width).
// Choose a pattern length that's not a multiple of your column count (lg:columns-3)
// to help avoid repetition in adjacent columns.
// Values >= 1.0 as per previous requirement (height >= width).
// -------------------------------------------

const WorkGrid = ({ works }: { works: Work[] }) => {
  // State and Effect for random ratios are removed.

  // Animation variants remain the same
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Add index to the map function arguments */}
      {works.map((work) => {
        // --- Calculate Stable Aspect Ratio based on Index ---
        // Get the factor from the pattern using the item's index
        // const patternIndex = index % ASPECT_RATIO_PATTERN.length;
        // const aspectRatioFactor = ASPECT_RATIO_PATTERN[patternIndex];
        // CSS aspect-ratio format is width / height
        // const cssAspectRatio = `1 / ${aspectRatioFactor}`;
        // ----------------------------------------------------

        return (
          <motion.div
            key={work.id}
            className="break-inside-avoid group"
            variants={WORK_ITEM_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link to={`/work/${work.id}`} className="block group">
              <motion.div
                className="relative overflow-hidden shadow-lg rounded-md cursor-pointer border-gray-300 border"
                whileHover="hover"
              >
                {/* Image with Stable Aspect Ratio */}
                <motion.img
                  src={work.images?.[0] || '/images/placeholder.jpg'}
                  alt={work.title}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-auto object-cover block"
                  // Apply the calculated stable aspect ratio if needed
                  // style={{ aspectRatio: cssAspectRatio }}
                  variants={imageVariants}
                  transition={{ duration: 0.3 }} // Image scale transition
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t opacity-0 from-black/80 via-black/50 to-transparent flex items-end group-hover:opacity-100 transition-opacity duration-300"
                  initial="initial"
                  transition={{ duration: 0.3 }} // Overlay fade transition
                >
                  <div className="p-4 md:p-6 text-white w-full">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{work.title}</h3>
                    {work.description && (
                       <p className="text-xs md:text-sm opacity-90 line-clamp-2">{work.description}</p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default WorkGrid;