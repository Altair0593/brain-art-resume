import { motion } from 'framer-motion';
import { Book, Palette, Box, Pen, Film, Figma, Image, Layout, Brush, Video } from 'lucide-react';
import AboutMeCard from '../components/AboutMeCard';

const domains = [
  { name: 'Editorial Design', icon: Book, description: 'Creating compelling layouts for magazines and publications' },
  { name: 'Brand Identity', icon: Palette, description: 'Developing unique and memorable brand visuals' },
  { name: 'Book Design', icon: Layout, description: 'Crafting beautiful book covers and interior layouts' },
  { name: 'Digital Illustration', icon: Pen, description: 'Creating unique digital artwork and illustrations' },
  { name: 'Package Design', icon: Box, description: 'Designing eye-catching product packaging' },
  { name: 'Motion Graphics', icon: Film, description: 'Bringing designs to life through animation' }
];

const tools = [
  { name: 'Adobe Photoshop', icon: Image, description: 'Photo editing and digital art' },
  { name: 'Adobe Illustrator', icon: Brush, description: 'Vector graphics and illustrations' },
  { name: 'Figma', icon: Figma, description: 'UI/UX design and prototyping' },
  { name: 'Adobe InDesign', icon: Layout, description: 'Page layout and publishing' },
  { name: 'Procreate', icon: Pen, description: 'Digital illustration and art' },
  { name: 'Adobe After Effects', icon: Video, description: 'Motion graphics and animation' }
];

const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/avatar.jpg"
            alt="Profile"
            onContextMenu={(e) => e.preventDefault()}
            className="rounded-full w-64 h-64 object-cover mx-auto mb-8 shadow-xl"
          />
          <h1 className="text-4xl font-bold mb-4 uppercase text-gray-900 dark:text-gray-100">Mariia Shvachko</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light italic mb-8">
            Illustrator & Graphic Designer based in Prague
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            With over a decade of experience in both illustration and graphic design,
            I bring stories to life through visual storytelling. My work combines
            traditional techniques with digital innovation to create unique and
            memorable designs that resonate with audiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Domains</h2>
            <div className="grid grid-cols-2 gap-4">
              {domains.map((domain, index) => (
                <AboutMeCard
                  key={domain.name}
                  description={domain.description}
                  icon={domain.icon}
                  index={index}
                  name={domain.name}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <AboutMeCard
                  key={tool.name}
                  description={tool.description}
                  icon={tool.icon}
                  index={index}
                  name={tool.name}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
