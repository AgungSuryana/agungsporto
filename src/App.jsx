import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import SocialSidebar from './components/SocialSidebar';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import ComingSoon from './pages/comingsoon';
import { motion } from 'framer-motion';
import LocomotiveScrollProvider from './components/LocomotiveScrollProvider';

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Sidebar tetap di luar Locomotive */}
      {isHome && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Sidebar />
          <SocialSidebar />
        </motion.div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <LocomotiveScrollProvider>
              <Home />
              <About />
              <Project />
            </LocomotiveScrollProvider>
          }
        />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}
