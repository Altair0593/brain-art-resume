export const WORK_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
  },
};