import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  description: string;
  index: number;
  icon: LucideIcon;
}

const AboutMeCard = ({ name, index, description, icon: Icon}: Props) => {
  return (
    <motion.div
      className="about-me-card group bg-gradient-to-br from-gray-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-gray-100 dark:border-zinc-700 hover:border-gray-200 dark:hover:border-zinc-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
    >
      <div className="w-8 h-8">
        <Icon className="about-me-card-icon text-gray-700 dark:text-gray-300 group-hover:scale-110 group-hover:rotate-6" />
      </div>
      <div>
        <h3 className="font-medium mb-1 text-gray-900 dark:text-gray-100">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
};

export default AboutMeCard;
