import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useCursor } from '../hooks/useCursor';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const { setHovering } = useCursor();

  return (
    <motion.div
      className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ 
        scale: 1.02, 
        y: -10,
        rotateX: 5,
        rotateY: 5,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Quote */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div className="text-6xl text-blue-400/30 font-serif leading-none mb-2">"</div>
          <p className="text-gray-300 text-lg leading-relaxed italic">
            {testimonial.content}
          </p>
        </motion.div>

        {/* Rating */}
        <motion.div
          className="flex items-center space-x-1 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + 0.5 + i * 0.1 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        {/* Client Info */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.6 }}
        >
          {/* Avatar */}
          <div className="relative">
            <motion.img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </div>

          {/* Details */}
          <div>
            <h4 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
              {testimonial.name}
            </h4>
            <p className="text-gray-400 text-sm">{testimonial.company}</p>
          </div>
        </motion.div>
      </div>

      {/* Floating Orb */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default TestimonialCard;