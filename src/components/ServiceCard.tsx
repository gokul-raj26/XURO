import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { setHovering } = useCursor();

  // Detect if user is on a mobile device
  const isMobile = typeof window !== "undefined" && /Mobi|Android/i.test(window.navigator.userAgent);

  return (
    <motion.div
      className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onMouseEnter={() => !isMobile && setHovering(true)}
      onMouseLeave={() => !isMobile && setHovering(false)}
      onTouchStart={() => isMobile && setHovering(true)}
      onTouchEnd={() => isMobile && setHovering(false)}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`} />
      
      {/* Service Image */}
      <motion.div
        className="relative mb-6 overflow-hidden rounded-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">
        {service.description}
      </p>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
    </motion.div>
  );
};

export default ServiceCard;