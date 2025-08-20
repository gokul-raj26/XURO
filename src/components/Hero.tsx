import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCursor } from '../hooks/useCursor';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { setHovering } = useCursor();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      ease: "easeOut" as any

      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Content */}
      <motion.div
        className="text-center max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
       {/* Floating Badge 
        <motion.div
          className="inline-flex items-center space-x-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">Futuristic Digital Experiences</span>
        </motion.div> */}

        {/* Main Heading */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          variants={textVariants}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            XURO
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          variants={textVariants}
        >
          Code. Create. Captivate.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={textVariants}
        >
          We craft immersive digital experiences that push the boundaries of creativity and technology.
          From stunning web designs to cutting-edge applications, we bring your vision to life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          variants={textVariants}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden"
            onClick={() => onNavigate('showcase')}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
            onClick={() => onNavigate('contact')}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator 
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
      */}
    </section>
  );
};

export default Hero;