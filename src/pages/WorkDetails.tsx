import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import sanitize from 'sanitize-html'
import { MERGED_WORKS } from '../data/works'; // Ensure this import path and data structure are correct
import { ArrowLeft } from 'lucide-react';
// Assuming these are correctly defined/imported constants
import { WORK_ITEM_VARIANTS } from '../constants';


const WorkDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  //Refactor the logic of getting the work details
  const workDetails = MERGED_WORKS.find(work => work.id === id);

  if (!workDetails) {
    return <div className="text-center py-10">Work item not found.</div>;
  }

  const images = workDetails.images || [];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="dark:text-gray-300 dark:hover:text-foreground inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Works
        </button>

        {/* Title and Description */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground"
          >
            {workDetails.title}
          </motion.h1>
          {workDetails.fullDescription && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              dangerouslySetInnerHTML={{
                __html: sanitize(workDetails.fullDescription)
              }}
              className="text-base md:text-lg text-gray-700 leading-relaxed: dark:text-gray-100 [&>p]:mb-3 [&>a]:underline"
            >
              {/* {workDetails.fullDescription} */}
            </motion.p>
          )}
        </div>

        {/* Image Grid - Masonry Layout */}
        {images.length > 0 && (
          <div
            className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8"
          >
            {images.map((image, index) => {
              return (
                // Item Wrapper
                <motion.div
                  key={index}
                  className="break-inside-avoid cursor-pointer group"
                  variants={WORK_ITEM_VARIANTS} // Assuming WORK_ITEM_VARIANTS includes 'hidden' and 'visible'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setOpen(true);
                  }}
                >
                  {/* Visual Container */}
                  <motion.div
                    className="relative overflow-hidden rounded-lg bg-gray-100 shadow-md"
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    {/* The actual image */}
                    <img
                      src={image}
                      alt={`${workDetails.title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover block"
                      loading="lazy"
                      // Optional: Prevent dragging the image itself (minor deterrent)
                      draggable="false"
                      // IMPORTANT: We do NOT disable right-click here directly
                    />

                    {/* --- Transparent Overlay --- */}
                    <div
                       className="absolute inset-0 z-10" // Positioned over the image
                       // Prevent the context menu ONLY on the overlay
                       onContextMenu={(e) => e.preventDefault()}
                       // Make sure the overlay doesn't interfere with hover effects below if needed
                       // style={{ pointerEvents: 'none' }} // Uncomment if overlay blocks hover effects intended for image/other layers
                    ></div>
                    {/* --------------------------- */}


                    {/* Optional visual overlay on hover (behind transparent overlay) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Lightbox Component */}
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={currentImageIndex}
            slides={images.map(src => ({ src }))}
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" }, slide: { pointerEvents: 'none' } }}
            animation={{ fade: 250, swipe: 250 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
            // --- Add Lightbox protection props ---
            carousel={{ finite: true }} // Prevent infinite looping which might make scraping easier
            // Disable download button in Lightbox if the library supports it
            // Note: 'yet-another-react-lightbox' v3+ might have this:
            // render={{
            //   buttonDownload: () => null, // Hides the default download button
            // }}
            // Check your specific version's documentation for disabling downloads/buttons.
            // --- ---
        />
      </motion.div>
    </div>
  );
};

export default WorkDetails;