import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

interface TimelineEventProps {
  event: {
    id: string;
    year: string;
    title: string;
    description: string;
    icon: string;
    gradient: string;
  };
  index: number;
  isLeft: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, index, isLeft }) => {
  const { setHovering } = useCursor();

  return (
    <motion.div
      className={`relative flex items-center ${isLeft ? 'flex-row-reverse' : 'flex-row'} mb-16`}
      initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      {/* Content Card */}
      <motion.div
        className={`group relative w-80 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 ${
          isLeft ? 'mr-8' : 'ml-8'
        }`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${event.gradient} rounded-2xl`} />
        
        {/* Year Badge */}
        <motion.div
          className={`absolute -top-3 ${isLeft ? 'right-6' : 'left-6'} px-4 py-1 bg-gradient-to-r ${event.gradient} rounded-full text-white text-sm font-bold`}
          whileHover={{ scale: 1.1 }}
        >
          {event.year}
        </motion.div>

        {/* Icon */}
        <motion.div
          className="text-4xl mb-4"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {event.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          {event.description}
        </p>

        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-sm -z-10`} />
      </motion.div>

      {/* Timeline Dot */}
      <motion.div
        className="relative z-10 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
        whileHover={{ scale: 1.3 }}
      >
        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Connecting Line */}
      <div className="absolute left-1/2 top-1/2 w-px h-16 bg-gradient-to-b from-blue-400/50 to-purple-500/50 transform -translate-x-1/2 translate-y-8" />
    </motion.div>
  );
};

export default TimelineEvent;