import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import GraphicDesigner from './pages/GraphicDesigner';
// import Illustrator from './pages/Illustrator';
import AboutMe from './pages/AboutMe';
import WorkDetails from './pages/WorkDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#EBE6E4]">
        <Header />
        <SocialLinks />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 min-h-[84vh]">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<GraphicDesigner />} />
              {/* The Illustrator functionality will be implemented soon */}
              {/* <Route path="/illustrator" element={<Illustrator />} /> */}
              <Route path="/about" element={<AboutMe />} />
              <Route path="/work/:id" element={<WorkDetails />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;