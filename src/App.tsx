import React, { useState, useEffect } from 'react';
import SplashCursor from "./components/SplashCursor";
import Fluid from './components/Fluid';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Services from './pages/Services';
import Showcase from './pages/Showcase';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { useTypewriter } from "./hooks/useTypewriter"; 


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      y: -20,
    },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'showcase':
        return <Showcase />;
      case 'testimonials':
        return <Testimonials onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
<div className="relative w-full min-h-screen bg-black">

      {/* Background */}
      <Background />
  <Fluid /> 
      {/* Custom Cursor */}
      <CustomCursor />
 <SplashCursor />

      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        {!isTransitioning && (
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative z-10"
          >
            {renderPage()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
 return (
    <>
      {/* your routes/components */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
      {/* Smooth scroll behavior */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}

export default App;