import React from 'react';
import { motion } from 'framer-motion';
import TimelineEvent from '../components/TimelineEvent';
import TeamCard from '../components/TeamCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { timelineEvents } from '../data/timeline';
import { teamMembers } from '../data/team';

const About: React.FC = () => {
  const timelineRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  return (
    <div className="relative pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About XURO
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a collective of visionaries, creators, and technologists united by a passion 
            for crafting digital experiences that transcend the ordinary.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="relative p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                At XURO, we believe that exceptional digital experiences are born from the perfect fusion 
                of creativity, technology, and human insight. We don't just build websites and applications—we 
                craft immersive journeys that captivate, inspire, and drive meaningful connections between 
                brands and their audiences.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          ref={timelineRef.ref}
          initial="hidden"
          animate={timelineRef.controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mb-32"
        >
          <motion.div
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to industry recognition, discover the milestones 
              that shaped XURO into the creative powerhouse it is today.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 transform -translate-x-1/2" />
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <TimelineEvent
                  key={event.id}
                  event={event}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          ref={teamRef.ref}
          initial="hidden"
          animate={teamRef.controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The creative minds and technical experts behind every XURO project. 
              Hover over each card to discover their story.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;