import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Service } from '../types';
import buildlab from '../assets/Buildlab.mp4';
import designlab from '../assets/designlab.mp4';
import growthlab from '../assets/growthlab.mp4';



const Services: React.FC = () => {
  const servicesRef = useScrollAnimation();

  const services: Service[] = [
    {
      id: 'design-lab',
     title: 'Design Lab',
    description: 'Designing impactful brand identities and user experiences that enhance engagement and drive conversions.',
    points: [
      "Brand Identity & Logo Design",
      "UI/UX Design & Prototyping",
      "Creative Assets (Ads, Social Media, Marketing)",
      "Design Systems & Guidelines",
    ],
      video: designlab,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'build-lab',
      title: 'Build Lab',
    description: 'Building scalable, high-performance digital products that streamline operations and accelerate business growth.',
    points: [
      "Web Application Development",
      "Mobile App Development (iOS & Android)",
      "API & Backend Integration",
      "SaaS, CRM & Dashboard Development",
    ],
      video: buildlab,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      id: 'growth-lab',
      title: 'Growth Lab',
    description: 'Driving brand visibility and customer acquisition through content, media production, and strategic marketing.',
    points: [
     "Content Creation (Reels & Short-form)",
      "Video Production & Editing",
      "Social Media Growth Strategy",
      "Consulting & Training"
    ],
       video: growthlab,
      gradient: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <div className="relative pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From idea to execution - we design, build, and scale digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={servicesRef.ref}
          initial="hidden"
          animate={servicesRef.controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;