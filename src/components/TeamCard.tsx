import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Instagram, ExternalLink } from 'lucide-react';
import { useCursor } from '../hooks/useCursor';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: Record<string, string>;
  gradient: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { setHovering } = useCursor();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      className="relative w-80 h-96 perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => {
        setHovering(true);
        setIsFlipped(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
        setIsFlipped(false);
      }}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <motion.div
            className="relative w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${member.gradient}`} />
            
            {/* Avatar */}
            <div className="relative p-8 flex flex-col items-center">
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-transparent group-hover:border-blue-400/50 transition-all duration-300"
                />
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm`} />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {member.name}
              </h3>
              
              <p className="text-blue-400 font-medium mb-4">
                {member.role}
              </p>

              <div className="text-center">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Hover to learn more
                </p>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-sm -z-10`} />
          </motion.div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <motion.div
            className="relative w-full h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col justify-center"
            whileHover={{ scale: 1.02 }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${member.gradient} rounded-2xl`} />
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>
              
              <p className="text-blue-400 font-medium mb-6">
                {member.role}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {Object.entries(member.social).map(([platform, url]) => (
                  <motion.a
                    key={platform}
                    href={url}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-blue-400 hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getSocialIcon(platform)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamCard;