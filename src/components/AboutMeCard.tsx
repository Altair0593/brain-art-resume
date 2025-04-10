import { motion } from "framer-motion"
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
      className="about-me-card group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
    >
      <div className="w-8 h-8">
        <Icon className="about-me-card-icon" />
      </div>
      <div>
        <h3 className="font-medium mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
};

export default AboutMeCard;