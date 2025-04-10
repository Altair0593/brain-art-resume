export const ASPECT_RATIO_PATTERN: number[] = [
    1.5,    // Tall
    1.0,    // Square
    1.3,    // Medium-Tall
    1.15,   // Shortish
    1.65,   // Taller
    1.05,   // Squarish
    1.4,    // Medium-Tall again
];

export const WORK_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
  },
};