import { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import { motion } from 'framer-motion';
// import Lanyard from './components/Lanyard';
import ProfileCard from './components/ProfileCard'
// import Lenis from "@studio-freight/lenis";

export default function App() {

  const [showSplash, setShowSplash] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showHome, setShowHome] = useState(false);

  // Saat splash selesai, tampilkan komponen satu-satu dengan delay
  const handleSplashComplete = () => {
    setShowSplash(false);

    // Delay tampilkan navbar
    setTimeout(() => {
      setShowNavbar(true);
    }, 800); // 400ms setelah splash

    // Delay tampilkan home
    setTimeout(() => {
      setShowHome(true);
    }, 100); // 800ms setelah splash
  };

  return (
    <>
      {/* {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {!showSplash && (
        <>
          {showNavbar && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Sidebar />
            </motion.div>
          )}



          {showHome && (
            <>
              <Home />
              <About />
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

               <ProfileCard
                name="Agung"
                title="Software Engineer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/path/to/avatar.jpg"
                showUserInfo={true}
                enableTilt={true}
                behindGradient="undefined"
                innerGradient="undefined"
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
              /> 
            </>
          )}
        </>
      )} */}

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Sidebar />
      </motion.div>

      <Home />
      <About />
      <Project />
    </>
  );
}
